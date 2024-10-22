import React, { useState } from "react";
import { CheckBox } from "react-native";
import {
    Container,
    Input,
    StyledButton,
    ButtonText,
    TermsContainer,
} from "../components/styles";

export default function CadastroScreen() {
    const [agreed, setAgreed] = useState(false);

    return (
        <Container>
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <TermsContainer>
                <Text>Termos e Condições:</Text>
                <Text>
                    Ao usar este aplicativo, você concorda em não compartilhar
                    informações falsas, utilizar o aplicativo apenas para
                    reportar problemas reais da comunidade e respeitar a
                    privacidade das informações sigilosas. O uso indevido pode
                    resultar em suspensão da conta.
                </Text>
                <CheckBox value={agreed} onValueChange={setAgreed} />
                <Text>Eu concordo com os termos de uso</Text>
            </TermsContainer>
            <StyledButton
                onPress={() =>
                    agreed
                        ? alert("Cadastro realizado")
                        : alert("Você precisa concordar com os termos")
                }
            >
                <ButtonText>Cadastrar</ButtonText>
            </StyledButton>
        </Container>
    );
}
