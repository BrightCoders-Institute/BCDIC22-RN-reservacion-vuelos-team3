import {
  Button,
  TextInput,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import * as Google from "expo-auth-session/providers/google";
import { Link } from "@react-navigation/native";
import ScreenModal from "../components/Modal";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [accessToken, setAccessToken] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  // handle view password eye icon
  const [viewPassword, setViewPassword] = useState(true);
  //  handle check boxes
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const [checkedSubscribed, setCheckedSubscribed] = useState(false);
  //  handle google data
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "574186843571-qvvmqu8om3do6f7ahhuo6qt8lj3csn30.apps.googleusercontent.com",
    iosClientId:
      "574186843571-55nd4un4a81bo3c1t38sqnibir1kesja.apps.googleusercontent.com",
    expoClientId:
      "574186843571-lefr80nu249qusga4teuidp7050rkd4k.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  return (
    <View style={styles.signup}>
      <ScreenModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Text style={styles.textSignUpStyle}>Sign Up</Text>
      <Formik
        initialValues={{ firstName: "", email: "", password: "" }}
        onSubmit={(values) => Alert.alert(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.fieldsContainer}>
            <Text style={styles.textFieldLabel}>First Name *</Text>
            <TextInput
              onChangeText={(value) => setFirstName(value)}
              onBlur={handleBlur("firstname")}
              value={firstName}
              style={{
                ...styles.textInputField,
                borderColor: firstName !== "" ? "#4285F4" : "gray",
              }}
              selectionColor="#4285F4"
            />
            <Text style={styles.textFieldLabel}>Email</Text>
            <TextInput
              onChangeText={(value) => setEmail(value)}
              onBlur={handleBlur("email")}
              value={email}
              style={{
                ...styles.textInputField,
                borderColor: email !== "" ? "#4285F4" : "gray",
              }}
              selectionColor="#4285F4"
            />
            <Text style={styles.textFieldLabel}>Password *</Text>
            <View style={styles.containerPassword}>
              <TextInput
                onChangeText={(value) => setPassword(value)}
                onBlur={handleBlur("password")}
                value={password}
                style={{
                  ...styles.textInputPassword,
                  borderColor: password !== "" ? "#4285F4" : "gray",
                }}
                secureTextEntry={viewPassword}
                selectionColor="#4285F4"
              />
              <AntDesign
                name="eye"
                size={24}
                color="gray"
                style={styles.eyeIcon}
                onPress={() => setViewPassword(!viewPassword)}
              />
            </View>
            <Text style={styles.textCharacters}>
              Use 8 characters with a mix of letters, numbers and symbols
            </Text>
            {/* Terms and Policy */}
            <View style={styles.checkBoxTerms}>
              <Checkbox
                value={checkedPolicy}
                onValueChange={setCheckedPolicy}
                color={"#4285F4"}
              />
              <Text style={styles.checkboxTextStyle}>
                I agree to the Terms and Privacy Policy.
              </Text>
            </View>
            {/* Subscribe */}
            <View style={styles.checkBoxSuscribe}>
              <Checkbox
                value={checkedSubscribed}
                onValueChange={setCheckedSubscribed}
                color={"#4285F4"}
              />
              <Text style={styles.checkboxTextStyle}>
                Subscribe for select product updates.
              </Text>
            </View>
            <View style={styles.signupButton}>
              {/* Signup Button */}
              <TouchableHighlight
                onPress={() => setModalVisible(true)}
                disabled={
                  firstName !== "" &&
                  email !== "" &&
                  password !== "" &&
                  checkedPolicy !== false &&
                  checkedSubscribed !== false
                    ? false
                    : true
                }
                style={{
                  ...styles.signUpButton,
                  backgroundColor:
                    firstName !== "" &&
                    email !== "" &&
                    password !== "" &&
                    checkedPolicy !== false &&
                    checkedSubscribed !== false
                      ? "#4285f4"
                      : "gray",
                }}
              >
                <Text style={styles.textTouchableButton}>Sign up</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.orText}>Or</Text>
          </View>
        )}
      </Formik>
      {/* Sign up with google button */}
      <TouchableHighlight
        style={styles.googleButton}
        onPress={
          accessToken
            ? getUserData
            : () => promptAsync({ useProxy: true, showInRecents: true })
        }
      >
        <View style={styles.viewGoogleButton}>
          <AntDesign name="google" size={18} color="white" />
          <Text style={styles.textGoogleButton}>Sign up with google</Text>
        </View>
      </TouchableHighlight>
      {/* Already have an account */}
      <Text style={styles.bottomText}>
        Already have an account?{" "}
        <Link style={styles.linkLogin} to={{ screen: "Login" }}>
          {" "}
          Log in{" "}
        </Link>
      </Text>
    </View>
  );
}
