import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';

export function Header() {
  return (
    <View style={styles.container}>
      
      
      <TouchableOpacity>
        <AntDesign style={styles.icon} name="bars" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.userName}>Nome do Profisional</Text>
      
      <TouchableOpacity>    
        <AntDesign style={styles.icon} name="bell" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
