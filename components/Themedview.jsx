import { StyleSheet, View } from "react-native";
import dashBoardcolors from "../constants/dashboardColors";

const Themedview = ({ style, ...props }) => {
  return <View style={[styles.container, style]} {...props}></View>;
};

export default Themedview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashBoardcolors.background.primary,
  },
});
