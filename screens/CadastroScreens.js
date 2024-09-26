import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
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

export default function CadastroScreen() {
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleRegister = () => {};

    return (
        <Container>
            <Text>Cadastre-se aqui</Text>
            <Input
                placeholder="Nome"
                value={formData.nome}
                onChangeText={(value) => handleChange("nome", value)}
            />
            <Input
                placeholder="CPF"
                keyboardType="numeric"
                value={formData.cpf}
                onChangeText={(value) => handleChange("cpf", value)}
            />
            <Input
                placeholder="Email"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(value) => handleChange("email", value)}
            />
            <Input
                placeholder="Senha"
                secureTextEntry={true}
                value={formData.senha}
                onChangeText={(value) => handleChange("senha", value)}
            />
            <Button
                title="Cadastrar"
                alert="O usuário foi cadastrado com sucesso, Faça seu login!"
                onPress={handleRegister}
            />
        </Container>
    );
}
