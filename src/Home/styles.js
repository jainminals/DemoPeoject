import {
    StyleSheet,
  } from "react-native";

export const styles = StyleSheet.create({
    inputbox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      width: "100%",
      paddingHorizontal: 5,
      borderRadius: 5,
      marginVertical: 10,
    },
    textinput: { height: 40, paddingLeft: 2, color: "#000" },
    maincontainer: { backgroundColor: "lightgray", flex: 1 },
    container: { marginHorizontal: 10, flex: 1 },
    inputview: { height: 40, width: "90%" },
    loadmoreview: {
      width: "50%",
      borderRadius: 50,
      backgroundColor: "#4CC0F8",
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    loadmoretext: { color: "#fff" },
    itemcontainer: {
      backgroundColor: "#fff",
      width: "49%",
      margin: 2,
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
    },
    itemconainerimage: { height: 100, width: 100, borderRadius: 50 },
    itemconatinertext: { color: "#000" },
  });