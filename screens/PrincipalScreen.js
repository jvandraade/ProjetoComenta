import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
    Container,
    NavBar,
    NavText,
    ComplaintContainer,
    ComplaintText,
} from "../components/styles";

export default function MainScreen({ navigation }) {
    const [complaints, setComplaints] = useState([]);

    return (
        <Container>
            <NavBar style={styles.navBar}>
                <NavText
                    style={styles.navText}
                    onPress={() => alert("Página inicial")}
                >
                    Home
                </NavText>
                <NavText
                    style={styles.navText}
                    onPress={() => navigation.navigate("About")}
                >
                    Sobre Nós
                </NavText>
                <NavText
                    style={styles.navText}
                    onPress={() =>
                        alert(
                            "Para relatar bugs, envie um email para suporte@comenta.app"
                        )
                    }
                >
                    Contato
                </NavText>
                <NavText
                    style={styles.navText}
                    onPress={() => navigation.navigate("Reclamacao")}
                >
                    Faça sua Reclamação
                </NavText>
            </NavBar>
            <ScrollView style={styles.scrollView}>
                <ComplaintContainer>
                    {complaints.map((complaint) => (
                        <ComplaintText key={complaint.id}>
                            {complaint.text}
                        </ComplaintText>
                    ))}
                </ComplaintContainer>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#00BFFF", // Azul ciano
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5, // Sombra para dar destaque no Android
    },
    navText: {
        color: "#FFFFFF", // Texto branco
        fontSize: 16,
        textAlign: "center",
    },
    scrollView: {
        marginTop: 10, // Espaço entre a NavBar e o conteúdo
    },
});
