import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
import { styles } from "../styles/styles";
import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function ScreenModal({ modalVisible, setModalVisible }) {
  const navigation = useNavigation();
  function succesfullySignedUp() {
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              You have succesfully signed up!
            </Text>
            <Button
              title="Ok"
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("Origin");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
