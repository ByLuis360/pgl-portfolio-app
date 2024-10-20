import { View, Image, Text, StyleSheet } from "react-native";
import { LIGHT_MODE } from "../../color/Colors";

type handleInfoDescription = {
  descriptionBox: string
}

export default function InfoDescription({descriptionBox}: handleInfoDescription) {
  return (
    <View style={styles.descriptionContainer}>
      <Image
        style={styles.avatar}
        source={require("../../../assets/arbol.png")}
      ></Image>
      <View style={[styles.paragraphContainer, {backgroundColor: descriptionBox }]}>
        <Text style={styles.title}>Descripción sobre mí!</Text>
        <Text>
          Soy un alumno un poco bastante vago pero que le gusta lo que hace y sobretodo y
          más importante, soy del Barça xddd
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  paragraphContainer: {
    margin: 10,
    marginBottom: 60,
    backgroundColor: LIGHT_MODE.greenLimon,
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
