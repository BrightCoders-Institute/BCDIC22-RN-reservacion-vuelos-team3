import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { addOrigin } from "../store/dataSlice";
import BackButton from "../components/BackButton";

export default function Origin() {
  const data = useSelector((state)=> state.data.flight )
  const uid = useSelector((state)=> state.data.userid )
  

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("Select location");

  useEffect(()=>{
    setSelectedValue(data.origin)
  },[data.origin])

  const handleOriginValue = (origin) =>{
    dispatch(addOrigin(origin))
  }
  return (
    <>
    <View>
    <BackButton style/>
    </View>
      <View style={{... styles.container_origin,}}>
        <Text style={styles.origin}>Where are you now?</Text>
        <View style={styles.selectOrigin}>
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
        style={{... styles.nextButton, marginTop: -22}}
        onPress={() => {
          handleOriginValue(selectedValue) 
          navigation.navigate("Destination")
        } }
      >
        <Text style={styles.nextText}>
          Next
        </Text>
      </Pressable>
    </>
  );
}
