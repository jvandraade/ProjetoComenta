import React, { useState } from "react";
import {
    Background,
    Container,
    Title,
    Input,
    StyledButton,
    ButtonText,
} from "../components/styles";
import { Alert } from "react-native";

const usuariosFicticios = [
    { cpf: "12345678900", senha: "senha123" },
    { cpf: "98765432100", senha: "senha456" },
];

export default function LoginScreen({ navigation }) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const usuario = usuariosFicticios.find(
            (user) => user.cpf === cpf && user.senha === password
        );

        if (usuario) {
            navigation.navigate("PrincipalScreen");
        } else {
            Alert.alert("Erro", "CPF ou senha incorretos!");
        }
    };

    return (
        <Background
            source={{
                uri: "https://4.bp.blogspot.com/-pvPEFGr9p9Y/T4TfJk0taII/AAAAAAAAE2A/Fpo1d3EylW4/s1600/ar7rg.jpg",
            }}
        >
            <Container>
                <Title>Comenta - Login</Title>
                <Input
                    placeholder="CPF"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <StyledButton onPress={handleLogin}>
                    <ButtonText>Logar</ButtonText>
                </StyledButton>

                <StyledButton onPress={() => navigation.navigate("Cadastro")}>
                    <ButtonText>Cadastrar</ButtonText>
                </StyledButton>

                <StyledButton
                    onPress={() => navigation.navigate("EsqueciSenha")}
                >
                    <ButtonText>Esqueci a Senha</ButtonText>

                    <StyledButton
                        style={{ marginTop: 20, backgroundColor: "#4CAF50" }}
                        onPress={() => navigation.navigate("Principal")}
                    >
                        <ButtonText>Ir para Principal</ButtonText>
                    </StyledButton>
                </StyledButton>
            </Container>
        </Background>
    );
}
