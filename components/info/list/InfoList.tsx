import { ScrollView, View, Text, StyleSheet } from "react-native";
import { cards } from "./cardinfo/Cards";
import Card, { CardProp } from "./cardinfo/Card";

export default function InfoList() {
  return (
    <View>
      <Text style={styles.subTitle}>cosas que me gustan mucho:</Text>
      <ScrollView style={styles.thingsContainer}>
        {cards.map((card: CardProp) => (
          <Card paragraph={card.paragraph}/>
        ))}
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
