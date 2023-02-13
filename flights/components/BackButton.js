import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.backButton}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="chevron-back"
        size={38}
        color="#4285F4"
      />
    </View>
  );
};

export default BackButton;
