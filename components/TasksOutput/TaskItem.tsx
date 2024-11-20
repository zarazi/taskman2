import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { ITask } from "../../@types/task";
import { StackParamList } from "../../@types/navigation";

interface TaskItemProps {
  item: ITask;
}

function TaskItem({ item }: TaskItemProps) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  function taskPressHandler() {
    navigation.navigate("ManageTask");
  }

  return (
    <Pressable
      onPress={taskPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.taskItem}>
        <View>
          <Text style={[styles.textBase, styles.title]}>{item.title}</Text>
          <Text style={[styles.textBase, styles.description]}>
            {item.description}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  taskItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  description: {
    color: GlobalStyles.colors.primary100,
  },
  statusContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.primary50,
    // backgroundColor: "orange",
    // backgroundColor: "cyan",
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  status: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
