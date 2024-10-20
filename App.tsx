import { useState } from "react";
import { Pressable, StyleSheet, View, Text, Switch } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/header/Header";
import InfoContainer from "./components/info/container/InfoContainer";
import { DARK_MODE, LIGHT_MODE } from "./components/color/Colors";
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [colorScheme, setColorScheme] = useState("light");
  const isDarkMode = colorScheme == "dark";
  const textColor = isDarkMode ? DARK_MODE.white : LIGHT_MODE.black;
  const isYellow = isDarkMode ? DARK_MODE.header : LIGHT_MODE.yellow;
  const isOrange = isDarkMode ? DARK_MODE.black : LIGHT_MODE.orange;
  const backgroundApp = isDarkMode
    ? DARK_MODE.bakcground
    : LIGHT_MODE.background;
  const descriptionBox = isDarkMode ? DARK_MODE.orange : LIGHT_MODE.greenLimon
  const sunOrMoon = isDarkMode ? <FontAwesome name="moon-o" size={24} color={DARK_MODE.white} /> : <Fontisto name="day-sunny" size={24} color={LIGHT_MODE.yellow} />

  const toggleColorScheme = () => {
    setColorScheme((prevScheme) => (prevScheme == "light" ? "dark" : "light"));
  };

  return (
    <View>
      <Header
        setDisplayMyQR={setDisplayMyQR}
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
        isYellow={isYellow}
        isOrange={isOrange}
        textColor={textColor}
        sunOrMoon={sunOrMoon}
      />
      {displayMyQR ? (
        <InfoContainer backgroundApp={backgroundApp} descriptionBox={descriptionBox} textColor={textColor} />
      ) : (
        <View style={[styles.bodystyles, {backgroundColor: backgroundApp}]}>
          <View style={styles.styleQRCode}>
            <QRCode value="https://github.com/ByLuis360" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodystyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  cosasQmeGustanMuxoEstails: {
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
  styleQRCode: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
