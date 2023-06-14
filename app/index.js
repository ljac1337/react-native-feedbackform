import { View, ScrollView, SafeAreaView, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { COLORS, SIZES } from "../constants";
import FormScreen from "../views/screens/FormScreen";

const App = () => {
  async function loadFonts() {
    await Font.loadAsync({
      Montserrat: require("../assets/fonts/Montserrat.ttf"),
    });
  }

  loadFonts();
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.background,
        height: "100%",
      }}
    >
      <FormScreen />
    </SafeAreaView>
  );
};

export default App;
