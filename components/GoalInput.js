import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput({ setCourseGoals, modalIsVisible, setModalIsVisible }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() },
        ]);
        setModalIsVisible(false);
      }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                source={require("../assets/images/goal.png")} 
                style={styles.image}
                />
                <TextInput 
                placeholder="Your course goal!" 
                style={styles.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                        <Button 
                        title="Cancel"
                        color="#f31282"
                        onPress={() => {
                            setModalIsVisible(false);
                            setEnteredGoalText("");
                        }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                        title="Add Goal"
                        color="#bea1e4"
                        onPress={() => {
                            addGoalHandler(enteredGoalText);
                            setEnteredGoalText("");
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16,
        fontWeight: "bold",
      },
      buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
      },
      button: {
        marginHorizontal: 10,
        width: 100,
      },
});