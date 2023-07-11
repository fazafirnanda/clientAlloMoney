import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import arrowUp from "../../../assets/Up.png";
import arrowDown from "../../../assets/Down.png";

export default function TotalTransaksi() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderTopWidth: 2,
        borderTopColor: "#D9D9D9",
      }}
    >
      <Text style={{ marginBottom: 20, fontWeight: "600", fontSize: 15 }}>
        Total Pemasukan
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", columnGap: 15, alignItems: "center" }}
        >
          <View>
            <Image source={arrowUp} style={{ height: 35, width: 35 }} />
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 16 }}>Pemasukan</Text>
            <Text style={{ color: "#C9A365" }}>Rp. 120.000,00</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", columnGap: 15, alignItems: "center" }}
        >
          <View>
            <Image source={arrowDown} style={{ height: 35, width: 35 }} />
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 16 }}>Pengeluaran</Text>
            <Text style={{ color: "#C9A365" }}>Rp. 20.000,00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
