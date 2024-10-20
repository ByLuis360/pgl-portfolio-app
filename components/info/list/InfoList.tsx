import { ScrollView, View, Text, StyleSheet } from "react-native";
import { cards } from "./cardinfo/Cards";
import ListCard, { CardProp } from "./cardinfo/Card";

type handleInfoList = {
  textColor: string;
};

export default function InfoList({ textColor }: handleInfoList) {
  return (
    <>
      <Text style={[styles.subTitle, { color: textColor }]}>
        cosas que me gustan mucho:
      </Text>
      <ScrollView style={styles.thingsContainer}>
        {cards.map((card: CardProp, id: number) => (
          <ListCard key={id} paragraph={card.paragraph} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  thingsContainer: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 50,
    marginLeft: 0,
    marginRight: 0,
    width: "auto",
  },
});
