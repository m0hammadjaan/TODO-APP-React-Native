import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
// import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=>goal.key !== id);
    });
  };
  const setAddGoalHandler=()=>setIsModalVisible(true);
  const endAddGoalHandler=()=>setIsModalVisible(false);
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#a065ec' onPress={setAddGoalHandler} />
      <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData)=>{
      return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler} />;
    }} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
  },
  goalsContainer:{
    flex:5,
    marginBottom: 24,
  },
});
