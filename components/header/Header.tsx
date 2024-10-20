import {
  Button,
  Pressable,
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";
import { LIGHT_MODE } from "../color/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";

type HandleProp = {
  setDisplayMyQR: Function;
  colorScheme: string;
  toggleColorScheme: Function;
  isYellow: string;
  isOrange: string;
  textColor: string;
  sunOrMoon: React.JSX.Element;
};

export default function Header({
  setDisplayMyQR,
  colorScheme,
  toggleColorScheme,
  isYellow,
  isOrange,
  textColor,
  sunOrMoon
}: HandleProp) {
  return (
    <View style={styles.topContainer}>
      <Text
        style={[
          styles.firstTopRowContainer,
          { backgroundColor: isYellow, color: textColor },
        ]}
      >
        My Portfolio App
      </Text>
      <View
        style={[styles.secondTopRowContainer, { backgroundColor: isOrange }]}
      >
        <Pressable
          style={styles.buttonRoute}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={styles.shadowBoxing}>Mi info</Text>
        </Pressable>
        <View style={styles.darkOrLightMode}>
          <Text style={styles.shadowBoxing}>{sunOrMoon}</Text>
          <Switch
            value={colorScheme == "dark"}
            onChange={toggleColorScheme}
          />
        </View>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingBottom: 0,
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: LIGHT_MODE.yellow,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    padding: 22,
  },
  secondTopRowContainer: {
    flexDirection: "row",
    backgroundColor: LIGHT_MODE.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRoute: {
    width: "50%",
  },
  shadowBoxing: {
    color: LIGHT_MODE.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  darkOrLightMode: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: LIGHT_MODE.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
    paddingBottom: 20,
  },
});
