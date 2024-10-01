import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
    Container,
    NavBar,
    NavText,
    ComplaintContainer,
    ComplaintText,
    Footer,
    FooterText,
} from "./styles";

export default function MainScreen({ navigation }) {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        // Lógica do banco de dados para utilizar as reclamações na tela de rolagem principal
        const fetchedComplaints = [
            { id: 1, text: "Buraco na rua principal." },
            { id: 2, text: "Sem iluminação no bairro." },
        ];
        setComplaints(fetchedComplaints);
    }, []);

    return (
        <Container>
            <NavBar>
                <NavText onPress={() => alert("Página inicial")}>Home</NavText>
                <NavText onPress={() => navigation.navigate("About")}>
                    Sobre Nós
                </NavText>
                <NavText onPress={() => alert("Contato")}>Contato</NavText>
                <NavText onPress={() => navigation.navigate("Complaint")}>
                    Faça sua Reclamação
                </NavText>
            </NavBar>
            <ScrollView>
                <ComplaintContainer>
                    {complaints.map((complaint) => (
                        <ComplaintText key={complaint.id}>
                            {complaint.text}
                        </ComplaintText>
                    ))}
                </ComplaintContainer>
                <Footer>
                    <FooterText>
                        O aplicativo foi desenvolvido por alunos da Estácio
                        Sergipe, com a finalidade de desenvolvê-lo para a
                        comunidade da cidade. Denuncie problemas de
                        infraestrutura, saneamento básico, estradas, e ajude a
                        melhorar a cidade!
                    </FooterText>
                    <FooterText>
                        Para relatar bugs, envie um email para
                        suporte@comenta.app
                    </FooterText>
                </Footer>
            </ScrollView>
        </Container>
    );
}
