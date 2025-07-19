import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Container, NavBar, NavText } from "../components/styles";

export default function MainScreen({ navigation }) {
  const posts = [
    {
      id: "1",
      userName: "João Silva",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      image: "https://plus.unsplash.com/premium_photo-1675662138457-ce7e38a85c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Buraco na rua do bairro, dificultando a passagem dos pedestres e dos carros na mesma.",
      location: "Bairro Cidade Nova, Aracaju-SE",
    },
    {
      id: "2",
      userName: "Maria Oliveira",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      image: "https://images.unsplash.com/photo-1620631049586-2670d39a1cef?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Vazamento de água há vários dias promove alagamento na rua do bairro Jardins, desperdiçando recursos e a rua toda alagada comprometendo a passagem de pedestres e veículos.",
      location: "Bairro Jardins, Aracaju-SE",
    },
    {
      id: "3",
      userName: "Carlos Pereira",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      image: "https://images.unsplash.com/photo-1597535827808-73616636cc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Agrupamento exagerado de lixo no bairro Barra dos Coqueiros, fazem dias que a Torre não faz a coleta e o lixo fede demais, prejudicando a saúde nasal da população.",
      location: "Barra dos Coqueiros, Aracaju-SE",
    },
  ];

  const scrollViewRef = useRef(null);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (scrollViewRef.current && ref.current) {
      ref.current.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (x, y) => {
          scrollViewRef.current.scrollTo({ y: y, animated: true });
        }
      );
    }
  };

  return (
    <Container>
      <NavBar style={styles.navBar}>
        <NavText
          style={styles.navText}
          onPress={() => scrollToSection(scrollViewRef)}
        >
          Home
        </NavText>
        <NavText
          style={styles.navText}
          onPress={() => scrollToSection(aboutRef)}
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
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
      >
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.header}>
              <Image
                source={{ uri: post.avatar }}
                style={styles.avatar}
              />
              <Text style={styles.userName}>{post.userName}</Text>
            </View>
            <Image
              source={{ uri: post.image }}
              style={styles.image}
            />
            <Text style={styles.description}>
              {post.description}
            </Text>
            <Text style={styles.location}>{post.location}</Text>
          </View>
        ))}

        {/* Seção Sobre Nós */}
        <View ref={aboutRef} style={styles.footerSection}>
          <Text style={styles.footerTitle}>Sobre Nós</Text>
          <Text style={styles.footerText}>
            O aplicativo foi desenvolvido por alunos da Estácio de
            Sergipe do Polo Salgado Filho, da matéria de Programação
            Mobile com React-Native. O aplicativo, chamado
            "Comenta", possui o intuito e a finalidade de receber a
            reclamação dos moradores da capital Aracaju e também dos
            interiores do estado de Sergipe. Reclamações devidas a
            falta de infraestrutura, saneamento básico, vandalismo a
            locais públicos, ou qualquer outro tipo de problema
            relacionado ao cotidiano da população que possam
            interferir de maneira negativa.
          </Text>
        </View>

        {/* Seção Contato */}
        <View ref={contactRef} style={styles.footerSection}>
          <Text style={styles.footerTitle}>Contato</Text>
          <Text style={styles.footerText}>
            Para relatar algum problema com o app, mande mensagem ao
            nosso suporte: suporte@comenta.app
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#00BFFF",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 5,
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
  },
  location: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  footerSection: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    color: "#555",
  },
});
