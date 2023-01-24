import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./screens/SignUp";
import { styles } from "./styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./Navigation";


export default function App() {
  return (
       <Navigation/>
   );
}
