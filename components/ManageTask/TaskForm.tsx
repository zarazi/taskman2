import { View } from "react-native";
import Input from "./Input";

function TaskForm() {
  return (
    <View>
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
