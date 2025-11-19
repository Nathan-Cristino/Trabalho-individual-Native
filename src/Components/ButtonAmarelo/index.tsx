import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { ButtonAmareloProps } from "./type";

export function ButtonAmarelo({ title, onPress }: ButtonAmareloProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}