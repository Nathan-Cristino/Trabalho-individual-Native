import { View, Text } from "react-native";
import { styles } from "./styles";

export function Tabs() {
  return (
    <View style={styles.container}>

      <View style={styles.tab}>
        <Text style={styles.text}>Feed de notícias</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.tab}>
        <Text style={styles.text}>Meu feed</Text>
        <View style={styles.line} />
      </View>

    </View>
  );
}
