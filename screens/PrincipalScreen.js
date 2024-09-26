import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const NavBar = styled.View`
    flex-direction: row;
    justify-content: space-around;
    background-color: #ddd;
    padding: 10px;
    width: 100%;
`;

export default function PrincipalScreen() {
    const navigation = useNavigation();

    return (
        <Container>
            <Text>Bem-vindo à tela principal do Comenta</Text>
            <Button
                title="Faça sua reclamação agora"
                onPress={() => navigation.navigate("Reclamacao")}
            />

            {/* Barra de navegação */}
            <NavBar>
                <Button
                    title="Home"
                    onPress={() => alert("Você já está na Home")}
                />
                <Button
                    title="Sobre nós"
                    onPress={() => alert("Página Sobre nós")}
                />
                <Button
                    title="Contato"
                    onPress={() => alert("Página Contato")}
                />
                <Button
                    title="Faça sua reclamação"
                    onPress={() => navigation.navigate("Reclamacao")}
                />
            </NavBar>
        </Container>
    );
}
