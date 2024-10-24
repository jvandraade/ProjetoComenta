import React, { useState } from "react";
import { View, Text, Alert, ScrollView, StyleSheet } from "react-native"; // Adicionando ScrollView e StyleSheet para melhorar a renderização
import { CheckBox } from "react-native";
import { TextInputMask } from "react-native-masked-text"; // Para formatar CPF e Data de Nascimento
import {
    Container,
    Input,
    StyledButton,
    ButtonText,
    TermsContainer,
} from "../components/styles";

export default function CadastroScreen() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const [agreed, setAgreed] = useState(false);

    // Função para validar o CPF
    const validarCPF = (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
        if (cpfLimpo.length !== 11) {
            return false;
        }
        let soma = 0;
        let resto;
        if (cpfLimpo === "00000000000") return false;

        for (let i = 1; i <= 9; i++)
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++)
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

        return true;
    };

    // Função para validar email
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (!nome || !cpf || !email || !dataNascimento || !senha) {
            Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
            return;
        }

        if (!validarCPF(cpf)) {
            Alert.alert("Erro", "CPF inválido.");
            return;
        }

        if (!validarEmail(email)) {
            Alert.alert("Erro", "Email inválido.");
            return;
        }

        if (!agreed) {
            Alert.alert("Erro", "Você precisa concordar com os termos.");
            return;
        }

        // Lógica para salvar o cadastro (simulada aqui com um alerta)
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {" "}
            {/* Usando ScrollView para garantir rolagem em telas menores */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Nome</Text>
                <Input
                    value={nome}
                    onChangeText={setNome}
                    autoCapitalize="words"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>CPF</Text>
                <TextInputMask
                    type={"cpf"}
                    value={cpf}
                    onChangeText={setCpf}
                    style={styles.maskedInput}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInputMask
                    type={"datetime"}
                    options={{
                        format: "DD/MM/YYYY",
                    }}
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    style={styles.maskedInput}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Senha</Text>
                <Input
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    autoCapitalize="none"
                />
            </View>
            <TermsContainer>
                <Text style={styles.termsTitle}>Termos e Condições:</Text>
                <Text style={styles.termsText}>
                    Ao usar este aplicativo, você concorda em não compartilhar
                    informações falsas, utilizar o aplicativo apenas para
                    reportar problemas reais da comunidade e respeitar a
                    privacidade das informações sigilosas. O uso indevido pode
                    resultar em suspensão da conta.
                </Text>
                <CheckBox value={agreed} onValueChange={setAgreed} />
                <Text style={styles.checkboxText}>
                    Eu concordo com os termos de uso
                </Text>
            </TermsContainer>
            <StyledButton onPress={handleSubmit}>
                <ButtonText>Cadastrar</ButtonText>
            </StyledButton>
        </ScrollView>
    );
}

// Estilos básicos para a tela
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 16,
    },
    maskedInput: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    termsTitle: {
        fontWeight: "bold",
        marginTop: 10,
    },
    termsText: {
        marginBottom: 10,
    },
    checkboxText: {
        marginTop: 5,
    },
});
