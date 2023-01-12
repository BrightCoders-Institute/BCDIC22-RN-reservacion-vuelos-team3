import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    width: "100%",
  },
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
  textSignUpStyle: {
    color: "#085DFD",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "7%",
    paddingBottom: 15,
  },
  checkboxTextStyle: {
    color: "gray",
    marginLeft: 5,
  },
  signupButton: { width: "85%", marginTop: 25 },
});
