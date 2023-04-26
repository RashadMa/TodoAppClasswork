import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Body() {
  return (
    <View style={styles.parentElement}>
      <TextInput placeholder="Write something" style={styles.textInput} />
      <Button style={styles.addButton} title="Add" />
    </View>
  );
}

export default Body;

const styles = StyleSheet.create({
  parentElement: {
    marginVertical: "15%",
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 3,
    padding: 10,
    backgroundColor: "#c2f4ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    color: "green",
  },
});
