import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/style";

const Status = ({ roundsIsPlayed, record }) => {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusContent}>
        You Played <Text style={styles.statusNumber}>{roundsIsPlayed}</Text>{" "}
        Rounds
      </Text>
      <Text style={styles.statusContent}>
        Your Record is <Text style={styles.statusNumber}>{record}</Text>
      </Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  statusContent: {
    color: Colors.yellow,
  },
  statusNumber: {
    color: Colors.orange,
    fontWeight: "bold",
  },
});
