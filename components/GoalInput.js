import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler= (enteredText) => {
        setEnteredGoalText(enteredText);
      };
    function addGoalHandler(){
        if (enteredGoalText.length>0){
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
        else{
            alert('Please enter a goal');
        }
        // props.onAddGoal(enteredGoalText);
        // setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                style={styles.textInput} 
                placeholder='Your Course Goal!' 
                onChangeText={goalInputHandler} 
                value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default GoalInput;
const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
      image:{
        width: 100,
        height: 100,
        margin: 16,
      },
      textInput:{
        width: '100%',
        padding:16,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button:{
        width: 100,
        marginHorizontal: 8,
      },
});