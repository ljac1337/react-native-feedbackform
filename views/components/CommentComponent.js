import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const CommentComponent = ({ onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={styles.input}
        placeholder="Add your comments..."
        placeholderTextColor={COLORS.tintedGray}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: COLORS.tintedGray,
    borderWidth: 2,
    borderRadius: 9,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 12,
    padding: 10,
    fontWeight: 500,
    outline: "none",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default CommentComponent;
