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

export default function LoginScreen({ navigation }) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const validarCPF = (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, "");
        return cpfLimpo.length === 11; // CPF válido deve ter 11 dígitos
    };

    const handleLogin = async () => {
        if (!cpf || !password) {
            Alert.alert("Erro", "Por favor, preencha CPF e senha.");
            return;
        }

        if (!validarCPF(cpf)) {
            Alert.alert("Erro", "CPF inválido. Verifique e tente novamente.");
            return;
        }

        try {
            const response = await fetch("http://10.0.0.127:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cpf: cpf.replace(/\D/g, ""), // Limpa o CPF antes de enviar
                    senha: password,
                }),
            });

            let data;
            try {
                data = await response.json();
            } catch {
                data = { message: "Erro inesperado no servidor." };
            }

            if (response.ok) {
                Alert.alert("Sucesso", "Login bem-sucedido!");
                setCpf("");
                setPassword("");
                navigation.navigate("PrincipalScreen");
            } else {
                Alert.alert("Erro", data.message || "CPF ou senha incorretos!");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
            Alert.alert(
                "Erro",
                "Não foi possível se conectar ao servidor. Verifique sua conexão."
            );
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
                </StyledButton>

                <StyledButton
                    style={{
                        marginTop: 20,
                        backgroundColor: "#00BFFF",
                    }}
                    onPress={() => navigation.navigate("Principal")}
                >
                    <ButtonText>Ir para Principal</ButtonText>
                </StyledButton>
            </Container>
        </Background>
    );
}
