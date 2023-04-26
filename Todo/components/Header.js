import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.parentElement}>
      <Text style={styles.headerText}>Todo App</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  parentElement: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 15,
  },
});
