import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  Platform,
} from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface TaskStatusProps {
  status: string;
  onChange?: (status: string) => void;
}

function TaskStatus({ status, onChange }: TaskStatusProps) {
  const [statusBarStyle, setStatusBarStyle] = useState<ViewStyle>(
    styles.status
  );

  function getStatusBarStyle(status: string) {
    switch (status) {
      default:
      case "todo":
        return styles.status25;
      case "in-progress":
        return styles.status50;
      case "done":
        return styles.status100;
    }
  }
  useEffect(() => {
    setStatusBarStyle(getStatusBarStyle(status));
  }, [status]);

  function getNextStatus(status: string) {
    switch (status) {
      case "todo":
        return "in-progress";
      case "in-progress":
        return "done";
      case "done":
      default:
        return "todo";
    }
  }
  function statusPressHandler() {
    if (!onChange) return;

    onChange(getNextStatus(status));
  }

  return (
    <Pressable
      onPress={statusPressHandler}
      style={({ pressed }) => onChange && pressed && styles.pressed}
    >
      <View style={styles.statusContainer}>
        <Text style={[styles.status, statusBarStyle]}>{status}</Text>
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
    padding: Platform.OS === "ios" ? 6 : null,
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
