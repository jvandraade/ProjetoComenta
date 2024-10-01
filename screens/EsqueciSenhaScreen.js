import React, { useState } from "react";
import { Container, Title, Input, StyledButton, ButtonText } from "./styles";

export default function EsqueciSenhaScreen() {
    const [email, setEmail] = useState("");

    return (
        <Container>
            <Title>Esqueci minha senha</Title>
            <Input
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <StyledButton onPress={() => alert("Email enviado com sucesso")}>
                <ButtonText>Enviar email de redefinição</ButtonText>
            </StyledButton>
        </Container>
    );
}
