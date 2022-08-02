import { StyleSheet, Text } from "react-native";
import { Colors } from "../../styles/style";

const Title = () => {
  return <Text style={styles.title}>Guess Number</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.yellow,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 100,
  },
});
