import { Pressable, Text } from "react-native";

const Button = ({ title, containerStyles, onPress, titleStyles }) => {
  return (
    <Pressable
      onPress={onPress}
      style={containerStyles}
      android_ripple={{ color: "#ccc" }}
    >
      <Text style={[{ textAlign: "center" }, titleStyles]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
