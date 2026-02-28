import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";
import dashBoardcolors from "../../constants/dashboardColors";
import { scriptListColors } from "../../constants/scriptColors";


const Scriptlayout = ({ focused }) => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: dashBoardcolors.background.primary,
        },
        tabBarActiveTintColor: dashBoardcolors.accent.blue,
        tabBarInactiveTintColor: "#ffffff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
    <Tabs.Screen
        name="ScriptHub"
        options={{
        title: "Hub",
        tabBarIcon: ({color})=>(
          <Ionicons name="file-tray-stacked-outline" size={24} color={color}/>
        ),

        headerStyle: {
            backgroundColor: colors.background.primary,
            borderBottomWidth: 1,
            borderBottomColor: dashBoardcolors.border.divider,
        },

        headerTitleStyle: {
            fontWeight: "600",
            fontSize: 22,
            color:'orange'
        },

        headerLeft: () => (
            <TouchableOpacity onPress={() => console.log("Book pressed")}
            style={{ marginLeft: 15 }}
            >
            <Entypo name="book" size={26} color="#c86d24" />
            </TouchableOpacity>
        ),
        }}
    />

      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="home" size={24} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Createscriptspage"
        options={{
          headerStyle: {
            backgroundColor: scriptListColors.background.primary,
            title: "New Script",
            color: "#ffffff",
          },
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Ionicons name="create-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Scriptlayout;

const styles = StyleSheet.create({});
