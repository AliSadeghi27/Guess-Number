import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const ResetModal = ({ showResetModal, record, roundsIsPlayed }) => {
  const resetStatusHandler = () => {
    record(100);
    roundsIsPlayed(0);
    showResetModal(false);
  };

  return (
    <>
      <Pressable
        style={styles.modalBackground}
        onPress={() => showResetModal(false)}
      ></Pressable>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Do you want to reset your status?</Text>
        <Text style={styles.modalInformation}>
          By doing this, all your information will be deleted.
        </Text>
        <View style={styles.modalButtons}>
          <Button
            title={"No"}
            containerStyles={styles.noButton}
            titleStyles={styles.titleButtons}
            onPress={() => showResetModal(false)}
          />
          <Button
            title={"Yes"}
            containerStyles={styles.yesButton}
            titleStyles={styles.titleButtons}
            onPress={resetStatusHandler}
          />
        </View>
      </View>
    </>
  );
};

export default ResetModal;

const styles = StyleSheet.create({
  modalBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.295)",
    zIndex: 2,
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    zIndex: 3,
    width: "80%",
    height: 200,
    backgroundColor: Colors.yellow,
    position: "absolute",
    top: "30%",
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.orange,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
    marginBottom: 15,
  },
  modalInformation: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 25,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30,
  },
  noButton: {
    backgroundColor: Colors.green,
    paddingVertical: 8,
    width: "45%",
    borderRadius: 10,
  },
  yesButton: {
    backgroundColor: Colors.red,
    paddingVertical: 8,
    width: "45%",
    borderRadius: 10,
  },
  titleButtons: {
    color: "#fff",
  },
});
