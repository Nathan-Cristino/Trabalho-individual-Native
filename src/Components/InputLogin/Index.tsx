import { TextInput } from "react-native";
import { styles } from "./style";
import { InputProps } from "./type"




export function Input({ placeholder, secureTextEntry }: InputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    );
}