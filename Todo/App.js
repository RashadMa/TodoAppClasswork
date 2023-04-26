import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import Todos from "./components/Todos";

export default function App() {
  const datas = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },

    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
    {
      title: "Title 5",
      description: "Description 5",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <View>
        {datas.map((item) => (
          <Todos title={item.title} desc={item.description} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
});
