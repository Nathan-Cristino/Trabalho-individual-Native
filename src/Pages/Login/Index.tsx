import { Text, View } from "react-native";
import { styles } from './style';
import { Input } from "../../Components/InputLogin/Index";
import React, { useState } from "react";




export function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
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

                <Input
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                />

                <Input
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                />
        </View>
    )
}