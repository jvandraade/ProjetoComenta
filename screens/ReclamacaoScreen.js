import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

const Container = styled.ScrollView`
    flex: 1;
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

const TextArea = styled.TextInput`
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #ccc;
`;

export default function ReclamacaoScreen() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        mensagem: "",
        bairro: "",
        logradouro: "",
        numero: "",
        cidade: "",
        estado: "",
    });

    const [image, setImage] = useState(null);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    const handleSubmit = () => {
        alert("Reclamação enviada com sucesso!");
    };

    return (
        <Container>
            <Text>Faça sua Reclamação</Text>
            <Input
                placeholder="Nome"
                value={formData.nome}
                onChangeText={(value) => handleChange("nome", value)}
            />
            <Input
                placeholder="Email"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(value) => handleChange("email", value)}
            />
            <Input
                placeholder="CPF"
                keyboardType="numeric"
                value={formData.cpf}
                onChangeText={(value) => handleChange("cpf", value)}
            />
            <TextArea
                placeholder="Mensagem de Reclamação"
                value={formData.mensagem}
                onChangeText={(value) => handleChange("mensagem", value)}
                multiline={true}
                numberOfLines={5}
            />
            <Input
                placeholder="Bairro"
                value={formData.bairro}
                onChangeText={(value) => handleChange("bairro", value)}
            />
            <Input
                placeholder="Logradouro"
                value={formData.logradouro}
                onChangeText={(value) => handleChange("logradouro", value)}
            />
            <Input
                placeholder="Número"
                keyboardType="numeric"
                value={formData.numero}
                onChangeText={(value) => handleChange("numero", value)}
            />
            <Input
                placeholder="Cidade"
                value={formData.cidade}
                onChangeText={(value) => handleChange("cidade", value)}
            />
            <Input
                placeholder="Estado"
                value={formData.estado}
                onChangeText={(value) => handleChange("estado", value)}
            />

            <Button title="Escolher Imagem" onPress={pickImage} />
            {image && <Text>Imagem selecionada: {image}</Text>}

            <Button title="Enviar Reclamação" onPress={handleSubmit} />
        </Container>
    );
}
