import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "react-native";

// CUSTOM COMPONENTS - BEGINNING
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
// CUSTOM COMPONENTS - ENDING

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  return(
    <>
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.appContainer}>
        <Button title="Add Goal" color="#bea1e4" onPress={() => setModalIsVisible(true)}/>
        <GoalInput setCourseGoals={setCourseGoals} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible}/>
        <View style={styles.goalsContainer}>
          <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={itemData => (
            <GoalItem itemData={itemData} id={itemData.item.key} setCourseGoals={setCourseGoals}/>
          )}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 4,
  },
});