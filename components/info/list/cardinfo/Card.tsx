import { Text, StyleSheet, ScrollView, Image } from "react-native";
import { LIGHT_MODE } from "../../../color/Colors";

export type CardProp = {
  paragraph: string;
};

const ListCard = ( {paragraph}: CardProp  ) => {
  return (
    <ScrollView >
      <Text style={styles.thingsThatILiked}>{paragraph}  </Text>
    </ScrollView>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  thingsThatILiked: {
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: LIGHT_MODE.darkRed,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: LIGHT_MODE.sylver,
  },
});
