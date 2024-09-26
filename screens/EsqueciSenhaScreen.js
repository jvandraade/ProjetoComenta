import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

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

export default function EsqueciSenhaScreen() {
    const [email, setEmail] = useState("");

    const handleSendEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email inválido");
        } else {
            alert("Email de redefinição enviado!");
        }
    };

    return (
        <Container>
            <Text>Digite seu email para redefinir a senha</Text>
            <Input
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <Button
                title="Enviar"
                alert="Email enviado com sucesso!"
                onPress={handleSendEmail}
            />
        </Container>
    );
}
