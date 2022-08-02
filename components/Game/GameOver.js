import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const GameOver = ({ showGameOver, gameScreen, desiredNumber, guessNumber }) => {
  const goToHomeScreen = () => {
    showGameOver(false);
    gameScreen(false);
  };

  return (
    <View style={styles.gameOver}>
      <Text style={styles.gameOverTitle}>You succeeded</Text>
      <View style={styles.desiredBox}>
        <Text>{desiredNumber}</Text>
        <Text>Desired number:</Text>
      </View>
      <View style={styles.guessesBox}>
        <Text>{guessNumber + 1}</Text>
        <Text>Number of your guesses:</Text>
      </View>
      <Button
        title={"Back To Home"}
        containerStyles={styles.button}
        titleStyles={{ color: "#fff" }}
        onPress={goToHomeScreen}
      />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  gameOver: {
    width: "80%",
    backgroundColor: Colors.yellow,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  gameOverTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 8,
    marginBottom: 15,
    color: Colors.green,
  },
  desiredBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  guessesBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.green,
    paddingVertical: 7,
    width: "40%",
    borderRadius: 8,
    marginVertical: 15,
  },
});
