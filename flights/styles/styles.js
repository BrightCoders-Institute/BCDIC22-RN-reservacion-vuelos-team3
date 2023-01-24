import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 40,
    width: "100%",
  },
  fieldsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  textFieldLabel: {
    alignSelf: "flex-start",
    marginLeft: "7.5%",
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
  signup: {
    width: "100%",
  },
  signupButton: {
    marginTop: 25,
    width: "85%",
  },
  containerPassword: {
    position: "relative",
    width: "85%",
  },
  textCharacters: {
    color: "gray",
    marginBottom: 10,
    marginTop: -10,
    width: "85%",
  },
  checkBoxTerms: {
    flexDirection: "row",
    marginTop: 15,
    width: "85%",
  },
  checkBoxSuscribe: {
    width: "85%",
    marginTop: 15,
    flexDirection: "row",
  },
  signUpButton: {
    alignItems: "center",
    borderRadius: 10,
    height: 35,
    justifyContent: "center",
  },
  eyeIcon: { position: "absolute", right: 10, top: 10 },
  textTouchableButton: { color: "#fff", fontWeight: "600", fontSize: 16 },
  orText: { paddingVertical: 15, color: "gray" },
  googleButton: {
    borderRadius: 10,
    backgroundColor: "#4285f4",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
  },
  viewGoogleButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  textGoogleButton: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 12,
  },
  bottomText: { marginTop: 20, color: "gray", alignSelf: "center" },
  linkLogin: { color: "#4285f4", textDecorationLine: "underline" },
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    margin: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10, 
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
