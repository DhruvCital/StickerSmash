import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>how it  works - It is OTA On-The-Air</Text>
      <Link href="/about" asChild>
        <Text style={styles.link}>About me</Text>
      </Link>
      <Link href="/test" asChild>
        <Text style={styles.link}>Test</Text>
      </Link>
    </View>
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
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "#5588ff",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 20
  },
});

