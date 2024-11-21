import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

function TaskForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Task</Text>
      <Input
        label="Title"
        textInputConfig={{
          maxLength: 100,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          maxLength: 255,
          onChangeText: () => {},
          // autoCapitalize: 'none',
          // autoCorrect: true,
        }}
      />
      <Input
        label="Status"
        textInputConfig={{
          maxLength: 12,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default TaskForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
});
