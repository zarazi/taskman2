import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import AllTasks from "./screens/AllTasks";
import ManageTask from "./screens/ManageTask";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllTasks" component={AllTasks} />
          <Stack.Screen name="ManageTask" component={ManageTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
