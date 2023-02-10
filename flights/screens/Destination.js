import { View, Text, Button, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import FlightData from "../components/flightData";
import BackButton from "../components/BackButton";
import { useSelector, useDispatch } from "react-redux";
import { addDestination } from "../store/dataSlice";

export default function Destination() {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("Select destination");
  const data = useSelector((state)=> state.data.flight )
  
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("Select location");

  useEffect(()=>{
    setSelectedValue(data.origin)
  },[data.origin])

  const handleDestinationValue = (dest) =>{
    dispatch(addDestination(dest))
  }

  return (
    <View style={styles.destinationContainer}>
      <BackButton />
      <FlightData />
      <View style={styles.container_destination}>
        <Text style={styles.destination}>Where will you be flying to?</Text>
        <View style={styles.selectDestination}>
          <Picker
            label="select location"
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item
              label="Select location"
              value="Select location"
              enabled={false}
            />
            <Picker.Item label="CAN" value="CAN" />
            <Picker.Item label="MEX" value="MEX" />
            <Picker.Item label="GTM" value="GTM" />
            <Picker.Item label="FRA" value="FRA" />
            <Picker.Item label="GER" value="GER" />
            <Picker.Item label="SPA" value="SPA" />
            <Picker.Item label="POR" value="POR" />
            <Picker.Item label="BRA" value="BRA" />
          </Picker>
        </View>
      </View>
      <Pressable
        style={{ ...styles.nextButton, marginTop: -18}}
        onPress={() => {
          handleDestinationValue(selectedValue)
          navigation.navigate("Date")
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}
