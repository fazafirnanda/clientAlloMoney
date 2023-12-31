import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import pemasukkan from "../../assets/pemasukkan.jpg";
import { Image } from "react-native";
import Transaksi from "../views/Transaksi";
import Dompet from "../views/Dompet";
import BudgetBulanan from "../views/BudgetBulanan";
import TabunganImpian from "../views/TabunganImpian";
import CatatTabunganmu from "../views/CatatTabunganmu";
import TargetRutin from "../views/TargetRutin";
import FormBudgetBulanan from "../views/FormBudgetBulanan";
import Akun from "../../assets/profile.png";
import Beranda from "../../assets/house-2.png";
import Aktivitas from "../../assets/clipboard-text.png";
import add from "../../assets/add.png";
import DompetFocused from "../../assets/solar_wallet-outline.png";
// import CreateTransaction from "../views/CreateTransaction";
import TambahTransaksi from "../views/TambahTransaksi";
import HomeSplashScreen from "../views/Login/HomeSplashScreen";
import Riwayat from "../../assets/clipboard-text.png";

const Tab = createBottomTabNavigator();

const TabManager = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({}) => {
          let icon;
          if (route.name == "Beranda") {
            icon = Beranda;
          } else if (route.name == "Aktivitas") {
            icon = DompetFocused;
          } else if (route.name == "Dompet") {
            icon = DompetFocused;
          } else if (route.name == "Akun") {
            icon = Akun;
          } else if (route.name == "Transaksi Baru") {
            icon = add;
          }
          return <Image source={icon} style={{ width: 30, height: 30 }} />;
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Home}></Tab.Screen>
      <Tab.Screen name="Aktivitas" component={Transaksi}></Tab.Screen>
      <Tab.Screen
        name="Transaksi Baru"
        component={TambahTransaksi}
      ></Tab.Screen>
      <Tab.Screen name="Dompet" component={Dompet}></Tab.Screen>
      <Tab.Screen name="Akun" component={FormBudgetBulanan}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabManager;
