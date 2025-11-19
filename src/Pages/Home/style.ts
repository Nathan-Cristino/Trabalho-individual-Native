import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  
  background: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode:"cover"
  },
    containerMsg:{
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  icon:{
    flex: 3,
    alignItems: 'center',
    marginTop: 40,
    
  },
  title:{
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle:{
    justifyContent: "center",
    alignItems: "center" 
  },
  button: {
    width: 240,              
    height: 45,               
    backgroundColor: "#2e2e2bff",
    borderRadius: 4,         
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",    
    marginTop: 10,
  },
  containerFooter:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffffff",            
  },
});