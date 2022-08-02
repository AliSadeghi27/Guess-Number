import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../styles/style";

const Language = () => {
  return (
    <Pressable
      onPress={() => Alert.alert("Soon...")}
      style={styles.languageBox}
      android_ripple={{ color: "#ccc" }}
    >
      <Text style={styles.languageContent}>English</Text>
      <Text style={styles.languageContent}>Language :</Text>
    </Pressable>
  );
};

export default Language;

const styles = StyleSheet.create({
  languageBox: {
    marginTop: 200,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.orange,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: Colors.yellow,
    marginBottom: 30,
  },
  languageContent: {
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
