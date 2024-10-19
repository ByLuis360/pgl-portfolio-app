import { View, Text, StyleSheet } from "react-native";

export type CardProp = {
  paragraph: String;
};

const Card = ({ paragraph }: CardProp) => {
  return (
    <View>
      <Text style={styles.thingsThatILiked}>{paragraph}</Text>
    </View>
  );
};

export default Card;

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
});
