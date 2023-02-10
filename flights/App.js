import { Navigation } from "./Navigation";
import { Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {

  return (
   <Provider store={store}>
      <Navigation/>
   </Provider>
   );
}
