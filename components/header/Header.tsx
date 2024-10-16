import { Button, Pressable, View, Text, StyleSheet } from "react-native";

export default function Header({setDisplayMyQR}) {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <View style={styles.secondTopRowContainer}>
        <Pressable
          style={styles.buttonRoute}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text
            style={styles.shadowBoxing}
          >
            Mi info
          </Text>
        </Pressable>
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
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  secondTopRowContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRoute: {
    width: "50%",
  },
  shadowBoxing: {
    color: "white",
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
});
