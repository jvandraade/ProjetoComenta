import React, { useState } from "react";
import { View, Text, Alert, ScrollView, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";
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
  const [agreed, setAgreed] = useState(true);

  const validarCPF = (cpf) => {
    const cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      return false;
    }
    // ...validação do CPF...
    return true;
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
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



    // Enviar os dados para o servidor
    try {
      const response = await fetch('http://10.0.0.127:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          cpf,
          email,
          dataNascimento,
          senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      } else {
        Alert.alert("Erro", data.message || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      Alert.alert("Erro", "Não foi possível se conectar ao servidor.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Campos do formulário */}
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
          privacidade das informações sigilosas.
        </Text>
      </TermsContainer>
      <StyledButton onPress={handleSubmit}>
        <ButtonText>Cadastrar</ButtonText>
      </StyledButton>
    </ScrollView>
  );
}

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
});
