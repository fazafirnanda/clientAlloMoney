import React, { useState } from "react";
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
  TextInput,
} from "react-native";
import dots from "../../assets/3dots.png";
import { Picker } from "@react-native-picker/picker";
import short from "../../assets/short.png";

import { LinearGradient } from "expo-linear-gradient";

export default function TambahTransaksi() {
  const [isPage, setIsPage] = useState("Pemasukan");

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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Image source={back} style={{ width: 27, height: 27 }} /> */}
          </TouchableOpacity>
          <Text style={{ fontWeight: "600", fontSize: 13 }}>
            Tambah Transaksi
          </Text>
          {/* <TouchableOpacity>
            <Image source={dots} style={{ width: 27, height: 27 }} />
          </TouchableOpacity> */}
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
        </View>

        <ScrollView>
          <View style={{ marginTop: 10 }}>
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
                ini data
                {isPage == "Pemasukan" ? " pemasukanmu " : " pengeluaranmu "}
                bulan ini!
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
          </View>

          {isPage == "Pemasukan" ? (
            <View style={{ rowGap: 20 }}>
              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Jumlah Pemasukan
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    // columnGap: 7,
                    borderRadius: 10,
                    borderColor: "#979797",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ padding: 15, fontSize: 12 }}>Rp</Text>
                  <TextInput
                    style={{
                      borderLeftWidth: 1,
                      padding: 10,
                      fontSize: 12,
                    }}
                    placeholder="100000"
                  >
                    {/* 100.000 */}
                  </TextInput>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>
                  Tabungan
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <Picker
                    // style={styles.input}
                    placeholder="Isi Tanggal"
                    //   selectedValue={"Pilih kategori"}
                    style={{ fontSize: 12, lineHeight: 10 }}
                    // value={namaTabungan}
                    // onChangeText={(text) => setNamaTabungan(text)}
                  >
                    <Picker.Item
                      label="Pilih Tabunganmu"
                      value="Pilih Tabunganmu"
                      style={{ fontSize: 12, lineHeight: 16, color: "#D9D9D9" }}
                    />
                    <Picker.Item
                      label="Senin"
                      value="Senin"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Selasa"
                      value="Selasa"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Rabu"
                      value="Rabu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Kamis"
                      value="Kamis"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Jumat"
                      value="Jumat"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Sabtu"
                      value="Sabtu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Minggu"
                      value="Minggu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                  </Picker>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>Sumber</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <Picker
                    // style={styles.input}
                    placeholder="Isi Tanggal"
                    //   selectedValue={"Pilih kategori"}
                    style={{ fontSize: 12, lineHeight: 10 }}
                    // value={namaTabungan}
                    // onChangeText={(text) => setNamaTabungan(text)}
                  >
                    <Picker.Item
                      label="Pilih Sumber"
                      value="Pilih Sumber"
                      style={{ fontSize: 12, lineHeight: 16, color: "#D9D9D9" }}
                    />
                    <Picker.Item
                      label="Gaji"
                      value="Gaji"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Bantuan"
                      value="Bantuan"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Sumbangan"
                      value="Sumbangan"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                  </Picker>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>Tanggal</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <TextInput />
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>
                  Deskripsi
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <TextInput />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("FormBudgetBulanan")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#ae823aff", "#ffc66aff"]}
                  style={{
                    padding: 10,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    marginTop: 27,
                    marginHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Tambah
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ rowGap: 20 }}>
              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Jumlah Pengeluaran
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    // columnGap: 7,
                    borderRadius: 10,
                    borderColor: "#979797",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ padding: 15, fontSize: 12 }}>Rp</Text>
                  <TextInput
                    style={{ borderLeftWidth: 1, padding: 10, fontSize: 12 }}
                  >
                    Target Pengeluaran
                  </TextInput>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>
                  Tabungan
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <Picker
                    // style={styles.input}
                    placeholder="Isi Tanggal"
                    //   selectedValue={"Pilih kategori"}
                    style={{ fontSize: 12, lineHeight: 10 }}
                    // value={namaTabungan}
                    // onChangeText={(text) => setNamaTabungan(text)}
                  >
                    <Picker.Item
                      label="Pilih Tabunganmu"
                      value="Pilih Tabunganmu"
                      style={{ fontSize: 12, lineHeight: 16, color: "#D9D9D9" }}
                    />
                    <Picker.Item
                      label="Senin"
                      value="Senin"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Selasa"
                      value="Selasa"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Rabu"
                      value="Rabu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Kamis"
                      value="Kamis"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Jumat"
                      value="Jumat"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Sabtu"
                      value="Sabtu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Minggu"
                      value="Minggu"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                  </Picker>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>Sumber</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <Picker
                    // style={styles.input}
                    placeholder="Isi Tanggal"
                    //   selectedValue={"Pilih kategori"}
                    style={{ fontSize: 12, lineHeight: 10 }}
                    // value={namaTabungan}
                    // onChangeText={(text) => setNamaTabungan(text)}
                  >
                    <Picker.Item
                      label="Pilih Sumber"
                      value="Pilih Sumber"
                      style={{ fontSize: 12, lineHeight: 16, color: "#D9D9D9" }}
                    />
                    <Picker.Item
                      label="Gaji"
                      value="Gaji"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Bantuan"
                      value="Bantuan"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                    <Picker.Item
                      label="Sumbangan"
                      value="Sumbangan"
                      style={{ fontSize: 12, lineHeight: 16 }}
                    />
                  </Picker>
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>Tanggal</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <TextInput />
                </View>
              </View>

              <View style={{ rowGap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 13 }}>
                  Deskripsi
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                >
                  <TextInput />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("FormBudgetBulanan")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#ae823aff", "#ffc66aff"]}
                  style={{
                    padding: 10,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    marginTop: 27,
                    marginHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Tambah
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
