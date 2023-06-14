import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";

const NavigationButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.container}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    color: COLORS.secondary,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    fontWeight: 400,
    tintColor: COLORS.secondary,
  },
});
