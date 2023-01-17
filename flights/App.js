import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./screens/SignUp";
import { styles } from "./styles/styles";
export default function App() {
  return (
    <View style={styles.containerApp}>
      <SignUp />
      <StatusBar style="auto" />
    </View>
  );
}
