import { StyleSheet } from "react-native";
import dimensions from "../../constants/Layout";

export const style = StyleSheet.create({
  avatar: {
    marginLeft: 8,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: 80,
  },
  lastMessage: {
    color: "grey",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContent: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(88, 88, 88, 0.12)",
    marginLeft: 20,
    display: "flex",
    width: dimensions.window.width - 100,
    height: 60,
  },
});
