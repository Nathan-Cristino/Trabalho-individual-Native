import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 25,
    marginBottom: 10,
  },

  tab: {
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 6,
  },

  line: {
    width: 90,
    height: 3,
    backgroundColor: "#000000ff",
    borderRadius: 2,
  },
});
