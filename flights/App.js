import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./screens/SignUp";
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#fff",
    flex: 1,
    marginTop: 40,
    width: "100%",
  },
});
