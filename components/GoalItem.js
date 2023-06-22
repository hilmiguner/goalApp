import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, id, setCourseGoals}) {
    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => (
            currentCourseGoals.filter((item) => item.key != id)
        ));
    }

    return (
        <View style={styles.goalItem}>
            <Pressable 
            onPress={() => deleteGoalHandler(id)} 
            android_ripple={{color: "#dddddd"}} 
            style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: "white",
        padding: 8,
    },
});