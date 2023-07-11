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
import back from "../../assets/back.png";
import dots from "../../assets/3dots.png";
import CardNabung from "../components/atoms/CardNabung";
import investment from "../../assets/Investments.png";
import taxes from "../../assets/Taxes-1.png";

import bca from "../../assets/bca.png";
export default function FormBudgetBulanan() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            paddingTop: 65,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image source={back} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <Text>Budget Bulanan</Text>
            <TouchableOpacity>
              {/* <Image source={dots} style={{ width: 27, height: 27 }} /> */}
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 35 }}>
            <Text>
              Kelola uangmu dengan bijak, buat anggaran bulanan yang tepat.
            </Text>
          </View>

          <View
            style={{ flexDirection: "column", rowGap: 16, marginBottom: 10 }}
          >
            <CardNabung
              title={"Pantau Anggaran"}
              paragraf={
                "Kendalikan keuanganmu dengan rencana anggaran bulanan yang tepat."
              }
              imageUrl={bca}
            />
            <CardNabung
              title={"Finansial"}
              paragraf={"Atur finansialmu dengan bijak dan disiplin."}
              imageUrl={bca}
            />
          </View>

          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: "#b5883e",
              borderRadius: 20,
              marginTop: 27,
              marginHorizontal: 15,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Atur Budget
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
