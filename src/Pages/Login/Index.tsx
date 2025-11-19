import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './style';
import { Input } from "../../Components/InputLogin/index"
import { GoogleButton } from "../../Components/GoogleButton/index";
import { AppleButton } from "../../Components/ApleButton";
import { ButtonAmarelo } from "../../Components/ButtonAmarelo/index";


export function Login({ navigation }){

    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                Olá!
                </Text>
                <Text style={styles.subtitle}>
                    Acesse sua conta para planejar seus próximos treinos.
                </Text>
            </View>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha" secureTextEntry />
            <ButtonAmarelo
                title="Entrar"
                onPress={() => navigation.navigate("Home")} 
            />

            <View style={styles.OuContainer}>
                <View style={styles.line} />
                <Text style={styles.OuText}>OU</Text>
                <View style={styles.line} />
            </View>

            <GoogleButton
                title="Entrar com Google"
                icon={require("../../../assets/images-removebg-preview.png")}
                onPress={() => {
                console.log("Entrar com Google ");
                }}
            />

            <AppleButton
                title="Entrar com Apple"
                icon={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview.png")}
                onPress={() => console.log("Entrar com Apple")}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>Ainda não tem conta?</Text>

                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Clique aqui</Text>
                </TouchableOpacity>
            </View> 
        </View>

    )
}