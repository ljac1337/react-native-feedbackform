import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Title = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.container}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    color: COLORS.darkGray,
    fontSize: 32,
    textAlign: "center",
    fontWeight: 700,
  },
});
