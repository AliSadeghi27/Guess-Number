import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Status from "../components/Menu/Status";
import BackButton from "../components/Setting/BackButton";
import Language from "../components/Setting/Language";
import Reset from "../components/Setting/Reset";
import ResetModal from "../components/Setting/ResetModal";

const Setting = ({
  settingScreen,
  setRecord,
  setRoundsIsPlayed,
  roundsIsPlayed,
  record,
}) => {
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <View style={styles.setting}>
      <BackButton settingScreen={settingScreen} />
      <Status record={record} roundsIsPlayed={roundsIsPlayed} />
      <Language />
      <Reset showResetModal={setShowResetModal} />
      {showResetModal && (
        <ResetModal
          showResetModal={setShowResetModal}
          roundsIsPlayed={setRoundsIsPlayed}
          record={setRecord}
        />
      )}
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  setting: {
    alignItems: "center",
    flex: 1,
  },
});
