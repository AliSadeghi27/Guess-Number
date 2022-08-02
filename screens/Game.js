import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameOver from "../components/Game/GameOver";
import Instructions from "../components/Game/Instructions";
import PlayGame from "../components/Game/PlayGame";

const Game = ({
  gameScreen,
  roundsIsPlayed,
  setRoundsIsPlayed,
  record,
  setRecord,
}) => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showPlayGame, setShowPlayGame] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [desiredNumber, setDesiredNumber] = useState(0);
  const [guessNumber, setGuessNumber] = useState(0);

  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <View style={styles.game}>
      {showInstructions && (
        <Instructions
          showInstructions={setShowInstructions}
          showPlayGame={setShowPlayGame}
          roundsIsPlayed={roundsIsPlayed}
          setRoundsIsPlayed={setRoundsIsPlayed}
        />
      )}
      {showPlayGame && (
        <PlayGame
          showPlayGame={setShowPlayGame}
          showGameOver={setShowGameOver}
          randomNumber={randomNumber}
          setDesiredNumber={setDesiredNumber}
          setGuessNumber={setGuessNumber}
          record={record}
          setRecord={setRecord}
        />
      )}
      {showGameOver && (
        <GameOver
          showGameOver={setShowGameOver}
          gameScreen={gameScreen}
          desiredNumber={desiredNumber}
          guessNumber={guessNumber}
        />
      )}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  game: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
