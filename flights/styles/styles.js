import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
  fieldsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  textFieldLabel: {
    alignSelf: "flex-start",
    marginLeft: "7%",
    paddingBottom: 5,
  },
  textInputField: {
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
    fontSize: 15,
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "85%",
  },
  textInputPassword: {
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
    fontSize: 18,
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },
});
