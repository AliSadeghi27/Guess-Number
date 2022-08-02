Copyright;
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/style";

const Copyright = () => {
  return <Text style={styles.copyrightContent}>Created By Ali Sadeghi</Text>;
};

export default Copyright;

const styles = StyleSheet.create({
  copyrightContent: {
    marginTop: 180,
    color: Colors.blue,
  },
});
