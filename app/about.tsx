import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About me!! - I am Dhruv</Text>
      <Text style={styles.info}>Heder will show back button on iOS with the previous screen title if it doesn't fit then it will show Back label</Text>
      <Link href="/" asChild>
        <Text style={styles.link}>Open Index again</Text>
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
    marginTop: 10,
  },
  info: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#5588ff",
    borderRadius: 10,
  },
});


