import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
  return (
    <>
        <StatusBar style="light" />
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            headerStyle: {
            backgroundColor: "#282828",
            shadowColor: "#fff",
            },
            headerShadowVisible: true,
            headerTintColor: "#fff",
            tabBarStyle: {
            backgroundColor: "#282828",
            borderTopWidth: 0.5,
            borderTopColor: "rgba(256, 256, 256, 0.2)",
            }
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            headerTitle: "Home",
            headerLeft: () => <></>,
            tabBarIcon: ({ focused, color }) => (
                <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={30}
                />
            )
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
            headerTitle: "About",
            tabBarIcon: ({ focused, color }) => (
                <Ionicons
                name={focused ? "information-circle-sharp" : "information-circle-outline"}
                color={color}
                size={30}
                />
            )
            }}
        />
        <Tabs.Screen
            name="old_index"
            options={{
            headerTitle: "Old Index",
            tabBarIcon: ({ focused, color }) => (
                <Ionicons
                name={focused ? "information-sharp" : "information-circle-outline"}
                color={color}
                size={30}
                />
            )
            }}
        />
        </Tabs>
    </>
  );
}
