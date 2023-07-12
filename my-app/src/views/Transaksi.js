import React, { useEffect, useState } from "react";
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
import CardTransaksi from "../components/atoms/CardTransaksi";
import TotalTransaksi from "../components/atoms/TotalTransaksi";
import short from "../../assets/short.png";
import dots from "../../assets/3dots.png";
import { LinearGradient } from "expo-linear-gradient";

export default function Transaksi({ navigation }) {
  const [isPage, setIsPage] = useState("Pemasukan");

  // const changeTransaction = (value) => {
  //   setIsPage(value);
  // };

  // const isFocused = () => {
  //   if (isPage == "Pemasukan") {
  //   } else {
  //   }
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={{ width: 27, height: 27 }} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Data Transaksi</Text>
          <TouchableOpacity>
            <Image source={dots} style={{ width: 27, height: 27 }} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 7,
            paddingVertical: 20,
            paddingBottom: 15,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Pemasukan")}
          >
            {isPage == "Pemasukan" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Pemasukan
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Pemasukan
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Pengeluaran")}
          >
            {isPage == "Pengeluaran" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Pengeluaran
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Pengeluaran
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Gabungan")}
          >
            {isPage == "Gabungan" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Gabungan
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Gabungan
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ width: "70%", fontSize: 12 }}>
              Halo <Text style={{ fontWeight: "bold" }}>Nauval</Text>, berikut
              ini data pemasukanmu bulan ini!
            </Text>
            <TouchableOpacity
              style={{
                width: "30%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Image source={short} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "column", rowGap: 12, paddingBottom: 20 }}
          >
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
          </View>
        </View>

        <View>
          <TotalTransaksi />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
