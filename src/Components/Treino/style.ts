import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  icon: {
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 20,
    color: "#2C2C2C",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginTop: 3,
  },

  seta: {
    width: 20,
    height: 25,
  },
});
