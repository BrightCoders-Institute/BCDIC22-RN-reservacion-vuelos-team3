import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/styles";
import FlightData from "../components/flightData";
import { useNavigation } from "@react-navigation/native";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../store/dataSlice";
import { db } from "../firebaseConfig";

export default function Request() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.flight);
  const uid = useSelector((state) => state.data.userid);
  const dataRef = doc(db, "users", uid);
  const navigation = useNavigation();
  async function handleAddFlights() {
    dispatch(clearData())
    try {
      await updateDoc(dataRef, {
        myflights: arrayUnion(data),
      });
    } catch (err) {
      Alert.alert(err);
    }
  }
  return (
    <>
      <View style={{ marginTop: 215, height: "100%" }}>
        <FlightData />
        <View style={styles.requestTextContainer}>
          <Text style={styles.textRequest}>
            Your request was received. 🥳🎉{" "}
          </Text>
        </View>
      </View>
      <Pressable
        style={{ ...styles.nextButton, marginTop: -310 }}
        onPress={() => {
          handleAddFlights();
          navigation.navigate("FlightList");
        }}
      >
        <Text style={styles.nextText}>Finish</Text>
      </Pressable>
    </>
  );
}
