import { View, StyleSheet } from "react-native";
import InfoDescription from "../description/InfoDescription";
import InfoList from "../list/InfoList";
import { LIGHT_MODE } from "../../color/Colors";

type handleInfoContainer = {
  backgroundApp: string
  descriptionBox: string
  textColor: string
}

export default function InfoContainer({backgroundApp, descriptionBox, textColor}: handleInfoContainer) {
  return (
    <View style={[styles.bodyStyles, {backgroundColor: backgroundApp}]}>
      <View>
        <InfoDescription descriptionBox={descriptionBox}/>
        <InfoList textColor={textColor}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    backgroundColor: LIGHT_MODE.background
  },
});
