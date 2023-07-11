import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import tabManager from "./TabBottom";

const Stack = createNativeStackNavigator();

const Homestacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabManager" component={tabManager} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Homestacks;
