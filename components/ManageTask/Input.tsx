import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface InputProps {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  invalid: boolean;
  style?: StyleProp<ViewStyle>;
  textInputConfig: TextInputProps;
  textInputStyle?: StyleProp<ViewStyle>;
}

function Input({
  label,
  labelStyle,
  invalid,
  style,
  textInputConfig,
  textInputStyle,
}: InputProps) {
  const inputStyles: StyleProp<ViewStyle> = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel, labelStyle]}>
        {label}
      </Text>
      <TextInput style={[inputStyles, textInputStyle]} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
