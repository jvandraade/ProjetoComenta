import React, { useState } from "react";
import { TextInput, Button, View, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { isValidCpf } from "cpf-cnpj-validator"; // Validação de CPF

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #ccc;
`;

const ButtonStyled = styled.Button`
    margin-top: 20px;
`;

export default function LoginScreen() {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if (!isValidCpf(cpf)) {
            alert("CPF inválido");
        } else if (senha.length < 6 || !/\d/.test(senha)) {
            alert(
                "Senha deve conter pelo menos 6 caracteres e ser alfanumérica"
            );
        } else {
            navigation.navigate("Principal");
        }
    };

    return (
        <Container>
            <Text>Bem-vindo ao Comenta</Text>
            <Input
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />
            <Input
                placeholder="Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />
            <ButtonStyled title="Logar" onPress={handleLogin} />
            <Button
                title="Cadastrar"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Esqueci a Senha"
                onPress={() => navigation.navigate("EsqueciSenha")}
            />
        </Container>
    );
}
