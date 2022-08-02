import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/style";

const BackButton = ({ settingScreen }) => {
  const backToMenu = () => {
    settingScreen(false);
  };

  return (
    <View style={styles.backButtonContainer}>
      <Pressable
        style={styles.backButtonContent}
        onPress={backToMenu}
        android_ripple={{ color: "#ccc" }}
      >
        <Text style={styles.titleButton}>Back</Text>
        <Ionicons name="chevron-back-outline" size={24} color={Colors.orange} />
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonContainer: {
    marginBottom: 20,
    alignItems: "flex-end",
    width: "89%",
  },
  backButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 60,
  },
  titleButton: {
    color: Colors.orange,
    fontSize: 20,
  },
});
