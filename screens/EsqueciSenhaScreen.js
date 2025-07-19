import React, { useState } from "react";
import {
  Container,
  Title,
  Input,
  StyledButton,
  ButtonText,
} from "../components/styles";

export default function EsqueciSenhaScreen() {
  const [email, setEmail] = useState("");
  return (
    <Container
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Title>Esqueci minha Senha</Title>
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
