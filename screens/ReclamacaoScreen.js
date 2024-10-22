import React, { useState } from "react";
import {
    Container,
    Input,
    TextArea,
    StyledButton,
    ButtonText,
    ImageUploadButton,
} from "../components/styles";
import { ScrollView } from "react-native";

export default function ReclamacaoScreen() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [residenceNumber, setResidenceNumber] = useState("");
    const [street, setStreet] = useState("");
    const [complaint, setComplaint] = useState("");

    return (
        <ScrollView>
            <Container>
                <Input placeholder="Nome" value={name} onChangeText={setName} />
                <Input
                    placeholder="Idade"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                />
                <Input
                    placeholder="Estado"
                    value={state}
                    onChangeText={setState}
                />
                <Input
                    placeholder="Cidade"
                    value={city}
                    onChangeText={setCity}
                />
                <Input
                    placeholder="Bairro"
                    value={neighborhood}
                    onChangeText={setNeighborhood}
                />
                <Input
                    placeholder="Número da Residência"
                    keyboardType="numeric"
                    value={residenceNumber}
                    onChangeText={setResidenceNumber}
                />
                <Input
                    placeholder="Logradouro"
                    value={street}
                    onChangeText={setStreet}
                />
                <TextArea
                    placeholder="Descreva a sua reclamação"
                    multiline
                    value={complaint}
                    onChangeText={setComplaint}
                />
                <ImageUploadButton onPress={() => alert("Upload de foto")}>
                    <ButtonText>Adicionar Foto</ButtonText>
                </ImageUploadButton>
                <StyledButton
                    onPress={() => alert("Reclamação enviada com sucesso")}
                >
                    <ButtonText>Enviar Reclamação</ButtonText>
                </StyledButton>
            </Container>
        </ScrollView>
    );
}
