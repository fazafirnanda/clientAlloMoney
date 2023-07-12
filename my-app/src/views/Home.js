import React from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import city from "../../assets/Cityy.png";
import Vectornotification from "../../assets/Notificationss.png";
import people from "../../assets/Userr.png";
import arrowup from "../../assets/Up.png";
import arrowdown from "../../assets/Down.png";
import budget from "../../assets/Group-1.png";
import celengan from "../../assets/celengan1.png";
import Riwayat from "../../assets/Vector.png";
import pemasukan from "../../assets/Vector-2.png";
import bank from "../../assets/Bank.png";
import Home2 from "../../assets/Home2.png";
import CardTransaksi from "../components/atoms/CardTransaksi";

export default function Home({ navigation }) {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "white", marginBottom: 25 }}>
          <Image
            source={city}
            style={{
              position: "absolute",
              height: (height * 1) / 3,
              width: "100%",
            }}
          />
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 70,
              flexDirection: "column",
              rowGap: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 30,
              }}
            >
              <View>
                <Text style={{ fontSize: 12, lineHeight: 16 }}>
                  Selamat malam,
                </Text>
                <Text style={{ fontWeight: "bold" }}>Muhammad Nauval</Text>
              </View>

              <View style={{ flexDirection: "row", columnGap: 15 }}>
                <Image
                  source={Vectornotification}
                  style={{ width: 25, height: 25 }}
                />
                <Image source={people} style={{ width: 25, height: 25 }} />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEF0CD",
                opacity: 0.95,
                borderRadius: 20,
                padding: 10,
                shadowColor: "#171717",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5.41,
                elevation: 5,
              }}
            >
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: "#FFDA9F",
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ padding: 6, marginRight: 16 }}>
                  <Image
                    source={bank}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 9999,
                    }}
                  />
                </View>
                <View>
                  <Text>Saldo saat ini</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 2,
                      alignItems: "center",
                      columnGap: 5,
                    }}
                  >
                    <Text style={{ fontSize: 12, lineHeight: 16 }}>IDR</Text>
                    <Text>400.000</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  padding: 9,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{ alignItems: "center" }}
                    onPress={() => navigation.navigate("Transaksi")}
                  >
                    <View style={{ elevation: 3 }}>
                      <Image
                        source={pemasukan}
                        style={{ width: 25, height: 25, resizeMode: "center" }}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        lineHeight: 16,
                      }}
                    >
                      Pemasukan
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View style={{ elevation: 3 }}>
                    <Image
                      source={pemasukan}
                      style={{ width: 25, height: 25, resizeMode: "center" }}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 10,
                      lineHeight: 16,
                    }}
                  >
                    Pengeluaran
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View style={{ elevation: 3 }}>
                    <Image
                      source={Riwayat}
                      style={{ width: 25, height: 25, resizeMode: "center" }}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 10,
                      lineHeight: 16,
                    }}
                  >
                    Riwayat
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                padding: 17,
                borderRadius: 15,
                shadowColor: "#171717",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                backgroundColor: "white",
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
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Riwayat Transaksi
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Transaksi")}
                >
                  <Text style={{ fontSize: 12, lineHeight: 16, color: "gray" }}>
                    Lihat Detail
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image source={arrowup} style={{ height: 30, width: 30 }} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, lineHeight: 16 }}>
                      Pemasukan
                    </Text>
                    <Text
                      style={{ color: "#C9A365", fontSize: 12, lineHeight: 16 }}
                    >
                      Rp. 120.000
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={arrowdown}
                      style={{ height: 30, width: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, lineHeight: 16 }}>
                      Pengeluaran
                    </Text>
                    <Text
                      style={{ color: "#C9A365", fontSize: 12, lineHeight: 16 }}
                    >
                      Rp. 20.000
                    </Text>
                  </View>
                </View>
              </View> */}
              <View style={{ marginVertical: 10, marginTop: 20, rowGap: 7 }}>
                <CardTransaksi />
                <CardTransaksi />
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 10,
                }}
              >
                Budget Bulanan
              </Text>
              <View
                style={{
                  borderRadius: 15,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  flexDirection: "row",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: "70%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginVertical: 3,
                    padding: 7,
                    paddingHorizontal: 17,
                  }}
                >
                  <Text
                    style={{ fontSize: 12, lineHeight: 16, marginBottom: 13 }}
                  >
                    Atur budget bulanan dengan mudah dan tanpa bingung, yuk
                    gunakan Allo!
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("BudgetBulanan")}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#ae823aff", "#ffc66aff"]}
                        style={{
                          padding: 10,
                          paddingHorizontal: 15,
                          borderRadius: 7,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          Kuy, Atur Sekarang
                        </Text>
                      </LinearGradient>
                      <Text style={{ fontSize: 12, lineHeight: 16 }}></Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={budget}
                    style={{
                      resizeMode: "center",
                      width: "100%",
                      height: 80,
                    }}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 10,
                }}
              >
                Tabungan Impian
              </Text>
              <View
                style={{
                  borderRadius: 15,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    width: "40%",
                  }}
                >
                  <Image
                    source={Home2}
                    style={{
                      resizeMode: "center",
                      width: "100%",
                      height: 80,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginVertical: 3,
                    padding: 10,
                    paddingHorizontal: 17,
                    width: "60%",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, lineHeight: 16, marginBottom: 13 }}
                  >
                    Yuk Nabung dan Wujudkan Impianmu Bersama Allo!
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{}}
                      onPress={() => navigation.navigate("TabunganImpian")}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#ae823aff", "#ffc66aff"]}
                        style={{
                          padding: 10,
                          paddingHorizontal: 15,
                          borderRadius: 7,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          Nabung Sekarang
                        </Text>
                      </LinearGradient>
                      <Text style={{ fontSize: 12, lineHeight: 16 }}></Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* <View>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 7,
                }}
              >
                Tips AlloMoney
              </Text>
              <View
                style={{
                  borderRadius: 15,
                  marginBottom: 30,
                  backgroundColor: "white",
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  flexDirection: "row",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Image source={celengan} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginVertical: 3,
                    padding: 17,
                  }}
                >
                  <Text
                    style={{ fontSize: 12, lineHeight: 16, marginBottom: 13 }}
                  >
                    Yuk Nabung dan Wujudkan Impianmu Bersama Allo!
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#FFC73B",
                        padding: 10,
                        paddingHorizontal: 15,
                        borderRadius: 7,
                      }}
                    >
                      <Text>Nabung Sekarang</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
