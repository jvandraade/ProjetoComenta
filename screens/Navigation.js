import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import EsqueciSenhaScreen from "./screens/EsqueciSenhaScreen";
import PrincipalScreen from "./screens/PrincipalScreen";

const Stack = createStackNavigator();

const Navigation = () => {
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
};

export default Navigation;
