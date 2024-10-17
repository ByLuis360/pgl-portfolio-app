import { View, Image, Text, StyleSheet } from "react-native";

export default function InfoDescription() {
  return (
    <View style={styles.descriptionContainer}>
      <Image
        style={styles.avatar}
        source={require("./assets/SofyanAmrabat.jpg")}
      ></Image>
      <View style={styles.paragraphContainer}>
        <Text
          style={styles.title}
        >
          Descripción sobre mí!
        </Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraphContainer: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
