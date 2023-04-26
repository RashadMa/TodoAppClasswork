import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Todos({ title, desc }) {
  return (
    <View style={styles.parentElement}>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
}

export default Todos;

const styles = StyleSheet.create({
  parentElement: {
    marginVertical: "1%",
    borderBottomWidth: 1,
  },
});
