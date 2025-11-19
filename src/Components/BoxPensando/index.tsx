import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./style";
import Octicons from '@expo/vector-icons/Octicons';

export function BoxPensando() {
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.placeholder}>
        </TextInput>
          <Text style={styles.placeholderText}>
            No que você está pensando?
          </Text>
        <Octicons style={styles.icon} name="arrow-right" size={24} color="black" />
      </View>
    </>
  );
}
