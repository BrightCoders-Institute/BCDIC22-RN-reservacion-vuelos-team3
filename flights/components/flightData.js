import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function FlightData({ origin, destination, date, passengers }) {
  const data = useSelector((state) => state.data.flight);
 
  return (
    <View style={styles.flightDataFlowContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.countryOrigin}>{origin ? origin : data.origin}</Text>
        <Text style={{ color: "gray", paddingVertical: 5 }}>{date ? date : data.date}</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <FontAwesome name="plane" size={24} color="#4285f4" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.countryDestination}>{destination ? destination : data.destination}</Text>
        <Text
          style={{ color: "gray", alignSelf: "flex-end", paddingVertical: 5 }}
        >
          {passengers ? passengers + " passengers" : data.passengers + " passengers"}
        </Text>
      </View>
    </View>
  );
}
