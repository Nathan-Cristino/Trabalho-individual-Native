import { View, ImageBackground, ScrollView, Text, Image, TouchableOpacity} from "react-native"
import { styles } from "./style"
import { Header } from "../../Components/HeaderHome";
import { Treino } from "../../Components/Treino";
import { BoxPensando } from "../../Components/BoxPensando";
import { Tabs } from "../../Components/Tabs"
import { msg } from "../../../assets/msg.png"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Home = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Treino />
      <Tabs />
      <BoxPensando/>

      <View style={styles.containerMsg}>
        <MaterialCommunityIcons style={styles.icon} name="message-reply-text-outline" size={24} color="black" />

        <Text style={styles.title}>
          Nenhum post por aqui
        </Text>

        <Text style={styles.subtitle}>
          Comece criando seu primeiro post...
        </Text>
      </View>
      
      <View style={styles.containerFooter} >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Criar seu primeiro post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}