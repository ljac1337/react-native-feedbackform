import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Form from "../components/Form";
import { COLORS } from "../../constants";
import Title from "../components/Title";
import Loader from "../components/Loader";

const FormScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      <SafeAreaView
        style={{
          padding: 10,
          alignItems: "center",
        }}
      >
        {isLoading && <Loader />}

        <Title title="Feedback form" />
        <Form setIsLoading={setIsLoading} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: COLORS.darkGray,
    fontSize: 32,
    textAlign: "center",
    fontWeight: 700,
  },
});

export default FormScreen;
