import { TextInput } from "react-native";
import { styles } from "./style";


interface InputProps {
    placeholder: string;
    value: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
}

export function Input() {
    return (
        <TextInput
            style={styles.input}
        />
    );
}