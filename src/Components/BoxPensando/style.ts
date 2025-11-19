import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
    marginTop: 25,
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  placeholderText: {
    height: 60,
    fontSize: 16,
    color: "#131313ff",
    position: 'absolute',
    marginLeft: 25
  },
  placeholder: {
    width: 320,              
    height: 48,               
    backgroundColor: "#dfdfdfff",
    borderRadius: 14,         
    justifyContent: "center",
    alignItems: "center",    
    marginTop: 10,
  },

  icon: {
    position: 'absolute',
    width: 23,
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 300
  },
});
