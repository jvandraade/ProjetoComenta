import React, { useState } from "react";
import {
    Background,
    Container,
    Title,
    Input,
    StyledButton,
    ButtonText,
} from "./styles";

export default function LoginScreen({ navigation }) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

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
                <StyledButton onPress={() => navigation.navigate("Main")}>
                    <ButtonText>Logar</ButtonText>
                </StyledButton>
                <StyledButton
                    onPress={() => alert("Funcionalidade de Cadastro")}
                >
                    <ButtonText>Cadastrar</ButtonText>
                </StyledButton>
                <StyledButton
                    onPress={() => alert("Funcionalidade de Redefinir Senha")}
                >
                    <ButtonText>Esqueci a Senha</ButtonText>
                </StyledButton>
            </Container>
        </Background>
    );
}
