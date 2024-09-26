import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PageLoaihoa from "../pages/PageLoaihoa";
import PageHoa from "../pages/PageHoa";
import PageCtHoa from "../pages/PageCtHoa";
//Navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function TrangChu() {
  return (
    <Stack.Navigator initialRouteName="PageLoaihoa">
      <Stack.Screen
        name="PageLoaihoa"
        component={PageLoaihoa}
        options={{
          title: "Loại Hoa", //Set Header Title
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PageHoa"
        component={PageHoa}
        options={{
          title: "Trang Danh Sách Hoa", //Set Header Title
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PageCtHoa"
        component={PageCtHoa}
        options={{
          title: "Trang Chi Tiết", //Set Header Title
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
