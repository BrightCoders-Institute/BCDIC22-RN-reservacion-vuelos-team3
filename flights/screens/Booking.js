import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function Origin() {
  const [selectedValue, setSelectedValue] = useState("Select location");
  // const [value, setValue] = useState("");
  return (
    <View style={styles.container_origin}>
      <Text style={styles.origin}>Where are you now?</Text>
      <View style={styles.textInput}>
        <Picker
          label="select location"
          selectedValue={selectedValue}
          // style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          // style={{width:"100%"}}
        >
          <Picker.Item label="Select location" value="Select location" enabled={false} />
          <Picker.Item label="CAN" value="can" />
          <Picker.Item label="MEX" value="mex" />
          <Picker.Item label="GTM" value="gtm" />
          <Picker.Item label="FRA" value="fra" />
          <Picker.Item label="GER" value="ger" />
          <Picker.Item label="SPA" value="spa" />
          <Picker.Item label="POR" value="por" />
          <Picker.Item label="BRA" value="bra" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_origin: {
    marginTop: 180,
    width: "75%",
    marginLeft: 30,
  },
  origin: {
    fontSize: 40,
    fontWeight: "bold",
  },
  textInput: {
    marginTop: 120,
    height: 50, 
    width: 150,
    width: "100%"
  },
});
