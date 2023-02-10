import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import FlightData from "../components/flightData";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";

export default function FlightList() {
  function generateUID() {
    const uid =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    dispatch(addUserId(uid));
    return uid;
  }
  const uid = useSelector((state) => state.data.userid);
  const docRef = doc(db, "users", uid);
  const [userFlightsData, setUserFlightsData] = useState();

  useEffect(() => {
    async function handleGetUserData() {
      try {
        const docSnap = await getDoc(docRef);
        setUserFlightsData(docSnap.data().myflights);
      } catch (err) {
        Alert.alert(err);
      }
    }
    handleGetUserData();
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.myFlightsText}>My flights</Text>
      <ScrollView>
        <View>
          {userFlightsData &&
            userFlightsData.map((item) => {
              return (
                <FlightData
                  key={item.date}
                  origin={item.origin}
                  destination={item.destination}
                  date={item.date}
                  passengers={item.passengers}
                />
              );
            })}
        </View>
      </ScrollView>
      <Pressable
        style={{ ...styles.addFlightButton, position: "absolute", bottom: 15 }}
        onPress={() => navigation.navigate("Origin")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 70,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          +
        </Text>
      </Pressable>
    </>
  );
}
