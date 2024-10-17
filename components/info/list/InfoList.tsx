import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function InfoList() {
  return (
    <View>
      <Text style={styles.subTitle}>cosas que me gustan mucho:</Text>
      <ScrollView style={styles.thingsContainer}>
        <Text style={styles.thingsThatILiked}>Salir a pasear</Text>
        <Text style={styles.thingsThatILiked}>Senderismo</Text>
        <Text style={styles.thingsThatILiked}>Ir a la playita</Text>
        <Text style={styles.thingsThatILiked}>Domingos de misa</Text>
        <Text style={styles.thingsThatILiked}>La guitarrita</Text>
        <Text style={styles.thingsThatILiked}>El monte con lluvia</Text>
        <Text style={styles.thingsThatILiked}>Viajar</Text>
        <Text style={styles.thingsThatILiked}>Música variadita</Text>
        <Text style={styles.thingsThatILiked}>Anime</Text>
        <Text style={styles.thingsThatILiked}>Ducharme</Text>
        <Text style={styles.thingsThatILiked}>Videojuegos</Text>
        <Text style={styles.thingsThatILiked}>Ir de cenar romántica</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  thingsThatILiked: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
  subTitle: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  thingsContainer: {
    padding: 10,
  },
});
