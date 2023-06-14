import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  Text,
} from "react-native";
import { COLORS } from "../../constants";

const Loader = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[style.container, { height, width }]}>
      <View style={style.loader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={{ fontWeight: "700", marginLeft: 10 }}>Sending...</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    height: 70,
    backgroundColor: "white",
    width: "50%",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Loader;
