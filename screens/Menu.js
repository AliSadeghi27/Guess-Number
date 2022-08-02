import { StyleSheet, View } from "react-native";
import Copyright from "../components/Menu/Copyright";
import MenuButtons from "../components/Menu/MenuButtons";
import Status from "../components/Menu/Status";
import Title from "../components/Menu/Title";

const Menu = ({ settingScreen, roundsIsPlayed, record, gameScreen }) => {
  return (
    <View style={styles.menu}>
      <Status roundsIsPlayed={roundsIsPlayed} record={record} />
      <Title />
      <MenuButtons settingScreen={settingScreen} gameScreen={gameScreen} />
      <Copyright />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    alignItems: "center",
  },
});
