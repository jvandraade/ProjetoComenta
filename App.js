import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "././screens/CadastroScreens";
import EsqueciSenhaScreen from "./screens/EsqueciSenhaScreen";
import PrincipalScreen from "./screens/PrincipalScreen";
import ReclamacaoScreen from "./screens/ReclamacaoScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen
                    name="EsqueciSenha"
                    component={EsqueciSenhaScreen}
                />
                <Stack.Screen name="Principal" component={PrincipalScreen} />
                <Stack.Screen name="Reclamacao" component={ReclamacaoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
