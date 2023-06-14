import { Keyboard, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputField from "./InputField";
import Range from "../components/Range";
import { COLORS } from "../../constants";
import NavigationButton from "./NavigationButton";
import SubmitButton from "./SubmitButton";
import CommentComponent from "./CommentComponent";

const initialInput = {
  name: "",
  number: "",
  email: "",
};

export default function Form({ setIsLoading }) {
  const [inputs, setInputs] = React.useState(initialInput);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.name) {
      handleError("Please enter your name!", "name");
    }
    if (!inputs.email) {
      handleError("Please enter your email!", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please enter valid email!", "email");
    }
    if (!inputs.number) {
      handleError("Please enter your phone number!", "number");
    }
    if (valid) {
      register();
    }
  };

  const register = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
    setInputs(initialInput);
    console.log(inputs);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        width: 410,
        height: 624,
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 20,

        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <NavigationButton title="Back" />

      <View style={{ flexDirection: "row", gap: 30 }}>
        <InputField
          placeholder="Enter you name"
          label="Name"
          value={inputs.name}
          placeholderTextColor={COLORS.tintedGray}
          error={errors.name}
          onFocus={() => {
            handleError(null, "name");
          }}
          onChangeText={(text) => handleOnChange(text, "name")}
        />
        <InputField
          placeholder="+385 91 196 6413"
          label="Contact Number"
          keyboardType="numeric"
          error={errors.number}
          value={inputs.number}
          onFocus={() => {
            handleError(null, "number");
          }}
          placeholderTextColor={COLORS.tintedGray}
          onChangeText={(text) => handleOnChange(text, "number")}
        />
      </View>
      <View>
        <InputField
          placeholder="email@email.com"
          label="Email Address"
          error={errors.email}
          value={inputs.email}
          onFocus={() => {
            handleError(null, "email");
          }}
          placeholderTextColor={COLORS.tintedGray}
          onChangeText={(text) => handleOnChange(text, "email")}
        />
      </View>

      <Range />
      <CommentComponent />

      <SubmitButton title="SUBMIT" onPress={validate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,

    justifyContent: "center",
    height: 37,
  },
  text: {
    fontSize: 14,
    color: "#2071B2",
    fontWeight: 400,
  },
});
