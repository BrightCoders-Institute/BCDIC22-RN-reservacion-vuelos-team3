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
    width: "85%",
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  textInputPassword: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});
