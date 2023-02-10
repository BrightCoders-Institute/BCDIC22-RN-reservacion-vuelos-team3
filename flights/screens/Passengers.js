import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import BackButton from "../components/BackButton";
import FlightData from "../components/flightData";
import { useDispatch, useSelector } from "react-redux";
import { addPassengers } from "../store/dataSlice";
import { useEffect } from "react";
const PSGR = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Passengers() {
  const uid = useSelector((state) => state.data.userid);
  const [numberPassenger, setNumberPassenger] = useState();
  useEffect(() => {
    dispatch(addPassengers(numberPassenger));
  }, [numberPassenger]);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.passengerContainer}>
      <BackButton />
      <FlightData />
      <View style={{ ...styles.containerDate, alignSelf: "flex-start" }}>
        <Text style={styles.destination}>How many passengers?</Text>
      </View>

      <WheelPickerExpo
        style={styles.wheelPicker}
        height={300}
        width={150}
        initialSelectedIndex={3}
        items={PSGR.map((name) => ({ label: name, value: "" }))}
        onChange={({ item }) => setNumberPassenger(item.label)}
      />

      <Pressable
        style={{ ...styles.nextButton, marginTop: 69 }}
        onPress={() => navigation.navigate("Request")}
      >
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}
