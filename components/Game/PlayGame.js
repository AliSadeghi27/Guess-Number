import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const PlayGame = ({
  randomNumber,
  showGameOver,
  showPlayGame,
  setDesiredNumber,
  setGuessNumber,
  record,
  setRecord,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [massage, setMassage] = useState("");
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const inputValueHandler = (enteredNumber) => {
    setInputValue(enteredNumber);
  };

  const guessedNumber = () => {
    setNumberOfGuesses(numberOfGuesses + 1);
    setInputValue("");
    if (!inputValue.trim() || isNaN(inputValue)) {
      Alert.alert("Please choose a number between 0 and 99");
    }
    if (randomNumber === +inputValue) {
      showPlayGame(false);
      showGameOver(true);
      setDesiredNumber(randomNumber);
      setGuessNumber(numberOfGuesses);
      if (record > numberOfGuesses) {
        setRecord(numberOfGuesses + 1);
      }
    } else {
      if (randomNumber > +inputValue) {
        setMassage(
          "The desired number is greater than the number you selected."
        );
      } else {
        setMassage(
          "The desired number is smaller than the number you selected."
        );
      }
    }
  };

  return (
    <>
      <View style={styles.status}>
        <Text style={styles.statusNumber}>{numberOfGuesses}</Text>
        <Text style={styles.statusText}>Number of your guesses:</Text>
      </View>
      <View style={styles.game}>
        <Text style={styles.gameTitle}>
          Please Select a Number between 0 and 99.
        </Text>
        <View style={styles.gameContent}>
          <Button
            titleStyles={{ color: "#fff" }}
            containerStyles={styles.gameButton}
            title={"I Choose"}
            onPress={guessedNumber}
          />
          <TextInput
            style={styles.gameInput}
            keyboardType="number-pad"
            maxLength={2}
            value={inputValue}
            onChangeText={inputValueHandler}
          />
        </View>
      </View>
      <Text style={styles.massage}>{massage}</Text>
    </>
  );
};

export default PlayGame;

const styles = StyleSheet.create({
  game: {
    backgroundColor: Colors.yellow,
    width: "80%",
    borderRadius: 10,
    elevation: 10,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  gameContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
  gameTitle: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 23,
    marginTop: 15,
  },
  gameInput: {
    borderWidth: 1,
    borderColor: Colors.orange,
    width: "40%",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 8,
  },
  gameButton: {
    backgroundColor: Colors.green,
    paddingVertical: 7,
    width: "40%",
    borderRadius: 8,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: Colors.yellow,
    fontSize: 20,
  },
  statusNumber: {
    color: Colors.orange,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  massage: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.orange,
    fontWeight: "bold",
  },
});
