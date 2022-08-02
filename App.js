import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Game from "./screens/Game";
import Menu from "./screens/Menu";
import Setting from "./screens/Setting";
import { Colors } from "./styles/style";

const App = () => {
  const [settingScreen, setSettingScreen] = useState(false);
  const [gameScreen, setGameScreen] = useState(false);
  const [record, setRecord] = useState(100);
  const [roundsIsPlayed, setRoundsIsPlayed] = useState(0);

  let screen = (
    <Menu
      roundsIsPlayed={roundsIsPlayed}
      record={record}
      settingScreen={setSettingScreen}
      gameScreen={setGameScreen}
    />
  );

  if (settingScreen) {
    screen = (
      <Setting
        settingScreen={setSettingScreen}
        setRecord={setRecord}
        setRoundsIsPlayed={setRoundsIsPlayed}
        record={record}
        roundsIsPlayed={roundsIsPlayed}
      />
    );
  }

  if (gameScreen) {
    screen = (
      <Game
        gameScreen={setGameScreen}
        roundsIsPlayed={roundsIsPlayed}
        setRoundsIsPlayed={setRoundsIsPlayed}
        record={record}
        setRecord={setRecord}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>{screen}</View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.navy,
    paddingTop: 30,
  },
});
