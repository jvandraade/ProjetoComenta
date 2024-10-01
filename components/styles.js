import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
`;

export const NavBar = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-color: #007bff;
    padding: 10px;
    position: absolute;
    top: 0;
    z-index: 1;
`;

export const NavText = styled.Text`
    color: white;
    font-size: 18px;
`;

export const ComplaintContainer = styled.View`
    margin-top: 60px;
    padding: 20px;
`;

export const ComplaintText = styled.Text`
    margin-bottom: 10px;
    padding: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
`;

export const Footer = styled.View`
    padding: 20px;
    background-color: #f8f9fa;
    align-items: center;
    margin-top: 20px;
`;

export const FooterText = styled.Text`
    margin-bottom: 10px;
    text-align: center;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
`;

export const StyledButton = styled.TouchableOpacity`
    background-color: #007bff;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    align-items: center;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
`;

export const TermsContainer = styled.View`
    margin-bottom: 20px;
`;

export const TextArea = styled.TextInput`
    height: 100px;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
`;

export const ImageUploadButton = styled.TouchableOpacity`
    background-color: #28a745;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    align-items: center;
    border-radius: 5px;
`;
