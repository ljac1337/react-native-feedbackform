import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT } from "../../constants";
import { TextInput } from "react-native";

const InputField = ({ label, error, onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? "#8B0000"
              : isFocused
              ? COLORS.darkSeaGreen
              : COLORS.tintedGray,
          },
        ]}
      >
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={[
            {
              color: COLORS.darkSeaGreen,
              flex: 1,
              fontSize: 10,
              fontWeight: 700,
            },
            {
              color: error
                ? "#8B0000"
                : isFocused
                ? COLORS.darkSeaGreen
                : COLORS.tintedGray,
            },
            { outline: "none" },
          ]}
          {...props}
        />
      </View>
      {error && (
        <Text
          style={{
            color: "#8B0000",
            fontSize: 9,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputField;

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: 700,
  },
  inputContainer: {
    height: 38,
    width: 160,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.tintedGray,
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  focusOutline: {
    borderWidth: 0,
    borderColor: "red",
    outline: "none",
  },
});
