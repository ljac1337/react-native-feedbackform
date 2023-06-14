import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";

const SubmitButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 45,
        width: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Text style={{ color: COLORS.white, fontSize: 14, fontWeight: 400 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
