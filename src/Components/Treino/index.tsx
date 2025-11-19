import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function Treino() {
  return (
    <TouchableOpacity style={styles.container}>

      <View style={styles.row}>
        <FontAwesome6 style={styles.icon} name="dumbbell" size={24} color="black" />
            
            <View>
                <Text style={styles.title}>Próximo treino</Text>
                <Text style={styles.subtitle}>Hipertrofia (Treino 4) - Pernas</Text>
            </View>
        </View>
        <AntDesign style={styles.seta} name="right" size={24} color="black" />
    </TouchableOpacity>
  );
}
