import { View, Text, Pressable, Alert } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import BackButton from "../components/BackButton";
import FlightData from "../components/flightData";
import { useSelector, useDispatch } from "react-redux";
import { addDate } from "../store/dataSlice";

const Date = () => {

  const dispatch = useDispatch();
  const handleDateValue = (date) => {
    const dateString = numberToMonth(date.month)
    dispatch(addDate(`${dateString} ${date.day}, ${date.year}`));
  };

  function numberToMonth(num) {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[num - 1];
  }

  const navigation = useNavigation();
  return (
    <View style={{marginTop:-5}}>
      <BackButton />
      <FlightData />
      <View style={styles.containerDate}>
        <Text style={styles.destination}>Select Date</Text>
      </View>

      <Calendar
        onDayPress={(day) => {
          handleDateValue(day);
        }}
        style={styles.calendar}
      />
      <Pressable
        style={{ ...styles.nextButton, marginTop: 107 }}
        onPress={() => {
          navigation.navigate("Passengers");
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Date;
