import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, fontWeight: "bold" },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
    flex: 1,
    fontStyle: "italic",
  },
  price: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
    textAlign: "right",
    marginRight: 15,
  },
  inner: { flex: 1, paddingVertical: 15 },
});
