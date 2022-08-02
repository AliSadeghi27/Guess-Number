import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const Instructions = ({
  showInstructions,
  showPlayGame,
  roundsIsPlayed,
  setRoundsIsPlayed,
}) => {
  const startGame = () => {
    showInstructions(false);
    showPlayGame(true);
    setRoundsIsPlayed(roundsIsPlayed + 1);
  };

  return (
    <View style={styles.instructionsContainer}>
      <Text style={styles.instructionsTitle}>Game instructions</Text>
      <Text style={styles.instructionsContent}>
        The logic of the game is very simple, the system automatically selects a
        number between 0 and 99 and you have to guess that number. After each
        wrong guess, you will receive a hint that the desired number is more or
        less than your guess, and you can use this hint in the next guess.
      </Text>
      <Button
        title={"Let's Go"}
        containerStyles={styles.instructionsButton}
        titleStyles={{ color: "#fff" }}
        onPress={startGame}
      />
    </View>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  instructionsContainer: {
    backgroundColor: Colors.yellow,
    width: "80%",
    borderRadius: 10,
    elevation: 10,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  instructionsTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 8,
    marginBottom: 15,
  },
  instructionsContent: {
    textAlign: "center",
    lineHeight: 20,
  },
  instructionsButton: {
    backgroundColor: Colors.green,
    paddingVertical: 7,
    width: "40%",
    borderRadius: 8,
    marginVertical: 15,
  },
});
