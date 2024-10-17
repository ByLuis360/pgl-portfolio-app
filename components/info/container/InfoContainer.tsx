import { View, StyleSheet } from "react-native";
import InfoDescription from "../description/InfoDescription";
import InfoList from "../list/InfoList";

export default function InfoContainer() {
  return (
    <View style={styles.bodyStails}>
      <View>
        <InfoDescription/>
        <InfoList/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
});
