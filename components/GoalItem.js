import { StyleSheet, View, Text, Pressable, } from "react-native";
function GoalItem(props){
  return(
    <View style={styles.goalItem}>
        <Pressable 
        android_ripple={{color:'#210644'}} 
        onPress={props.onDeleteItem.bind(this,props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
        {/* <Button title='Clear Goals' onPress={()=>setCourseGoals([])} /> */}
        </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
      },
      goalText:{
        color: '#ffffff',
        padding: 8,
      },
      pressed:{
        backgroundColor: '#210644',
      },
});