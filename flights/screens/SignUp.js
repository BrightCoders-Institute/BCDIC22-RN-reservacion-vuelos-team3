import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(true);
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const [checkedSubscribed, setCheckedSubscribed] = useState(false);
  return (
    <View style={styles.signup}>
      <Text style={styles.textSignUpStyle}>Sign Up</Text>
      <Formik
        initialValues={{ firstName: "", email: "", password: "" }}
        onSubmit={(values) => Alert.alert(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.fieldsContainer}>
            <Text style={styles.textFieldLabel}>First Name</Text>
            <TextInput
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("email")}
              value={values.firstName}
              style={styles.textInputField}
              selectionColor="red"
            />
            <Text style={styles.textFieldLabel}>Email</Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.textInputField}
            />
            <Text style={styles.textFieldLabel}>Password</Text>
            <View style={styles.containerPassword}>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.textInputPassword}
                secureTextEntry={viewPassword}
              />
              <AntDesign
                name="eye"
                size={24}
                color="gray"
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
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
                color={"#085DFD"}
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
                color={"#085DFD"}
              />
              <Text style={styles.checkboxTextStyle}>
                Subscribe for select product updates.
              </Text>
            </View>
            <View style={styles.signUpButton}>
              <Button
                // onPress={handleSubmit}
                title="Sign up"
                color="#085DFD"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
