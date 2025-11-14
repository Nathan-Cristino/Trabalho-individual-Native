import { View, ImageBackground, ScrollView, Text} from "react-native"
import Banner from '../../../assets/banner.webp'
import { styles } from "./style"


export const Home = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={Banner} style={styles.background}>

      

      </ImageBackground>
    </View>
  )
}