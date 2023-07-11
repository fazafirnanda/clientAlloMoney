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
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

import back from "../../assets/back.png";
import dots from "../../assets/3dots.png";
import CardNabung from "../components/atoms/CardNabung";
import bca from "../../assets/bca.png";
import group from "../../assets/Groupbudget.png";

export default function CatatTabunganmu() {
  const [namaTabungan, setNamaTabungan] = useState("");
  const [targetSaldo, setTargetSaldo] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [targetWaktu, setTargetWaktu] = useState("");

  const handleSave = () => {
    // Lakukan sesuatu dengan data yang diinputkan
    console.log("Nama Tabungan:", namaTabungan);
    console.log("Target Saldo:", targetSaldo);
    console.log("Deskripsi:", deskripsi);
    console.log("Target Waktu:", targetWaktu);

    // Reset nilai input setelah disimpan
    setNamaTabungan("");
    setTargetSaldo("");
    setDeskripsi("");
    setTargetWaktu("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingTop: 65,
              paddingHorizontal: 20,
              backgroundColor: "#FEF0CD",
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              shadowColor: "#171717",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              //   backgroundColor: "white",
              elevation: 2,
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
              <Text style={{ fontWeight: "bold" }}>Catat Tabunganmu</Text>
              <TouchableOpacity>
                {/* <Image source={dots} style={{ width: 27, height: 27 }} /> */}
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                columnGap: 20,
                marginVertical: 30,
                alignItems: "center",
              }}
            >
              <View style={{ width: "40%", alignItems: "flex-end" }}>
                <Image source={group} />
              </View>
              <View style={{ width: "60%" }}>
                <Text>
                  Kelola keuangan jadi lebih mudah dan praktis dimana aja
                </Text>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 35, paddingHorizontal: 20 }}>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Nama Tabungan"
                value={namaTabungan}
                onChangeText={(text) => setNamaTabungan(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Target Saldo"
                value={targetSaldo}
                onChangeText={(text) => setTargetSaldo(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Deskripsi"
                value={deskripsi}
                onChangeText={(text) => setDeskripsi(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Target Waktu"
                value={targetWaktu}
                onChangeText={(text) => setTargetWaktu(text)}
              />
              <Button title="Simpan" onPress={handleSave} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
