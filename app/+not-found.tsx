import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <>
        <Stack.Screen options={{ headerShown: false }}/>
        <View style={styles.container}>
        <Text style={styles.text}>404 - Page not found</Text>
        <Text style={styles.info}>Please check the URL and try again</Text>
        <Link href="/" asChild>
            <Text style={styles.link}>Back to Home</Text>
        </Link>
        </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323232"
  },
  text: {
    color: "#f00",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "#5588ff",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  info: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    padding: 10,
    borderWidth: 1,
    borderColor: "#5588ff",
    borderRadius: 10,
    marginTop: 10
  },
});


