import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { styles } from "../styles/styles";
import { Link } from "@react-navigation/native";
export default function ScreenModal({ navigation, modalVisible, setModalVisible }) {
  function succesfullySignedUp(){
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You have succesfully signed up!</Text>
              <Link style={styles.linkLogin} to={{ screen: "Booking" }}>
                <Text>Ok</Text>
              </Link>
          </View>
        </View>
      </Modal>
    </View>
  );
}