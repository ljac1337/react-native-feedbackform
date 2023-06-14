import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { COLORS } from "../../constants";

export default function Range() {
  const [range, setRange] = useState(0.1);
  return (
    <View>
      <Text style={style.label}>Share your experience in scaling</Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: 20,
        }}
      >
        {range >= 0 && range <= 0.2 ? (
          <Image source={require("../../assets/images/emoji/6.png")} />
        ) : (
          <Image source={require("../../assets/images/emoji/1.png")} />
        )}

        {range >= 0.21 && range <= 0.4 ? (
          <Image source={require("../../assets/images/emoji/7.png")} />
        ) : (
          <Image source={require("../../assets/images/emoji/2.png")} />
        )}

        {range >= 0.41 && range <= 0.6 ? (
          <Image source={require("../../assets/images/emoji/8.png")} />
        ) : (
          <Image source={require("../../assets/images/emoji/3.png")} />
        )}

        {range >= 0.61 && range <= 0.8 ? (
          <Image source={require("../../assets/images/emoji/9.png")} />
        ) : (
          <Image source={require("../../assets/images/emoji/4.png")} />
        )}

        {range >= 0.81 && range <= 1 ? (
          <Image source={require("../../assets/images/emoji/10.png")} />
        ) : (
          <Image source={require("../../assets/images/emoji/5.png")} />
        )}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {range >= 0 && range <= 0.2 ? (
          <Text style={style.isFocused}>Worst</Text>
        ) : (
          <Text style={style.isNotFocused}>Worst</Text>
        )}

        {range >= 0.21 && range <= 0.4 ? (
          <Text style={style.isFocused}>{"Not\nGood"}</Text>
        ) : (
          <Text style={style.isNotFocused}>{"Not\nGood"}</Text>
        )}

        {range >= 0.41 && range <= 0.6 ? (
          <Text style={style.isFocused}>Fine</Text>
        ) : (
          <Text style={style.isNotFocused}>Fine</Text>
        )}

        {range >= 0.61 && range <= 0.8 ? (
          <Text style={style.isFocused}>{"Look\nGood"}</Text>
        ) : (
          <Text style={style.isNotFocused}>{"Look\nGood"}</Text>
        )}

        {range >= 0.81 && range <= 1 ? (
          <Text style={style.isFocused}>{"Very\nGood"}</Text>
        ) : (
          <Text style={style.isNotFocused}>{"Very\nGood"}</Text>
        )}
      </View>

      <Slider
        style={{
          innerWidth: 30,
          innerHeight: 100,
          marginTop: 10,
        }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#105955"
        maximumTrackTintColor="#A5E0DD"
        thumbTintColor="#105955"
        onValueChange={setRange}
        value={range}
      />
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: 700,
    marginBottom: 20,
  },
  isFocused: {
    color: COLORS.darkSeaGreen,
    fontWeight: 700,
    fontSize: 12,
  },
  isNotFocused: {
    color: COLORS.crystal,
    fontWeight: 700,
    fontSize: 12,
  },
});
