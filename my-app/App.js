import { NavigationContainer } from "@react-navigation/native";
import HomeStacks from "./src/navigations/Homestack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeStacks />
      </NavigationContainer>
    </>
  );
}
