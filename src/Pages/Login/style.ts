import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0.4,
    paddingHorizontal: 20,
    justifyContent: "space-between"
},
  header: {
    marginTop: 40,
    marginBottom: 30,
},

title: {
    fontSize: 40,
    fontWeight: 'bold',
},

subtitle: {
    fontSize: 16,
    color: '#8c8c8c',
    marginTop: 8,
    lineHeight: 22,
    width: '80%'
},

OuContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 20,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: "#525151ff",
},

OuText: {
  marginHorizontal: 10,
  fontSize: 14,
  color: "#1f1f1fff",
  fontWeight: "500",
},
footer: {
  alignItems: "center",
  marginBottom: 30,
},

footerText: {
  fontSize: 14,
  color: "#7D7D7D",
  marginBottom: 10,
  fontWeight: "500",
},

footerButton: {
  borderWidth: 1,
  borderColor: "#D9D9D9",
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: "#FFFFFF",
},

footerButtonText: {
  fontSize: 14,
  fontWeight: "600",
  color: "#222222",
},

});