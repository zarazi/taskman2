import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

type TaskStatusProps = {
  status: string;
  onChange: (status: string) => void;
};

function TaskStatus({ status }: TaskStatusProps) {
  const [statusValue, setStatusValue] = useState<string>(status);

  let statusBarStyle = {};

  switch (statusValue) {
    case "todo":
      statusBarStyle = styles.status25;
      break;
    case "in-progress":
      statusBarStyle = styles.status50;
      break;
    case "done":
      statusBarStyle = styles.status100;
      break;
  }

  function statusPressHandler() {
    setStatusValue((currentStatusValue) => {
      switch (currentStatusValue) {
        case "todo":
          return "in-progress";
        case "in-progress":
          return "done";
        case "done":
        default:
          return "todo";
      }
    });
  }

  return (
    <Pressable
      onPress={statusPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.statusContainer}>
        <Text style={[styles.status, statusBarStyle]}>{statusValue}</Text>
      </View>
    </Pressable>
  );
}

export default TaskStatus;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  statusContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  status: {
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    minHeight: 30,
    color: GlobalStyles.colors.primary500,
    backgroundColor: "white",
  },
  status25: {
    width: "25%",
    backgroundColor: "orange",
  },
  status50: {
    width: "50%",
    backgroundColor: "yellow",
  },
  status100: {
    width: "100%",
    backgroundColor: "lightgreen",
  },
});
