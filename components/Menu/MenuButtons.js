import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const MenuButtons = ({ settingScreen, gameScreen }) => {
  const startGameHandler = () => {
    gameScreen(true);
  };
  const settingHandler = () => {
    settingScreen(true);
  };

  return (
    <View style={styles.menuButtons}>
      <Button
        title={"Start"}
        onPress={startGameHandler}
        containerStyles={styles.button}
        titleStyles={styles.titleButton}
      />
      <Button
        title={"Setting"}
        onPress={settingHandler}
        containerStyles={styles.button}
        titleStyles={styles.titleButton}
      />
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  menuButtons: {
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: Colors.orange,
    marginBottom: 27,
    paddingVertical: 10,
    minWidth: "60%",
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: Colors.yellow,
  },
  titleButton: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
