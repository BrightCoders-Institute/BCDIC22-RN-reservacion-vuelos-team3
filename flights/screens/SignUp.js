import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(true);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text
        style={{
          marginLeft: "7%",
          fontSize: 20,
          fontWeight: "bold",
          color: "#085DFD",
          paddingBottom: 15,
        }}
      >
        Sign Up
      </Text>
      <Formik
        initialValues={{ firstName: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.fieldsContainer}>
            <Text style={styles.textFieldLabel}>First Name</Text>
            <TextInput
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("email")}
              value={values.firstName}
              style={styles.textInputField}
              selectionColor="rd"
            />
            <Text style={styles.textFieldLabel}>Email</Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.textInputField}
            />
            <Text style={styles.textFieldLabel}>Password</Text>

            <View
              style={{
                width: "85%",
                position: "relative",
              }}
            >
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

       
          </View>
        )}
      </Formik>
    </View>
  );
}
