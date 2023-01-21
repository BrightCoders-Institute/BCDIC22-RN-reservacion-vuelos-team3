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
import { androidClientId, iosClientId, expoClientId } from "@env";

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
    androidClientId: androidClientId,
    iosClientId: iosClientId,
    expoClientId: expoClientId,
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
    <View style={styles.signIn}>
      <ScreenModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Text style={styles.textSignUpStyle}>Log in</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.fieldsContainer}>
            <Text style={styles.textFieldLabel}>Email *</Text>
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
            <View style={styles.signupButton}>
              {/* Signup Button */}
              <TouchableHighlight
                onPress={() => setModalVisible(true)}
                disabled={email !== "" && password !== "" ? false : true}
                style={{
                  ...styles.signUpButton,
                  backgroundColor:
                    email !== "" && password !== "" ? "#4285f4" : "gray",
                }}
              >
                <Text style={styles.textTouchableButton}>Sign In</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.orText}>Or</Text>
          </View>
        )}
      </Formik>
      {/* Log In with google button */}
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
          <Text style={styles.textGoogleButton}>Sign In with google</Text>
        </View>
      </TouchableHighlight>
      {/* Already have an account */}
      <Text style={styles.bottomText}>
        Don't have an account?{" "}
        <Link style={styles.linkLogin} to={{ screen: "Signup" }}>
          {" "}
          Sign up{" "}
        </Link>
      </Text>
    </View>
  );
}
