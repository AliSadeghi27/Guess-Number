import { StyleSheet } from "react-native";
import { Colors } from "../../styles/style";
import Button from "../../UI/Button";

const Reset = ({ showResetModal }) => {
  const showResetStatusModal = () => {
    showResetModal(true);
  };

  return (
    <Button
      onPress={showResetStatusModal}
      containerStyles={styles.resetButton}
      title={"Reset Status"}
      titleStyles={styles.titleButton}
    />
  );
};

export default Reset;

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: Colors.orange,
    paddingVertical: 10,
    minWidth: "70%",
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: Colors.yellow,
  },
  titleButton: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
