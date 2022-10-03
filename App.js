import { useState } from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView,FlatList} from 'react-native';

export default function App() {
  const[enteredGoalText,setEnteredGoalText]=useState('');
  const[courseGoals,setCourseGoal]=useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    setCourseGoal(currentCourseGoals=>[...currentCourseGoals,enteredGoalText]);
  };
  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer }>
        <TextInput style={styles.inputText} placeholder='Course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal!' onPress={addGoalHandler}/>
      </View>
      <View style={styles.appContainer}>
        <FlatList>
          {courseGoals.map((goal)=><Text style={styles.goalItem} key={goal}>{goal}</Text>)}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:3,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#000000"
  },
  inputText:{
    borderWidth:1,
    borderColor:"#000000",
    width:"75%",
    marginRight:8,
    padding:8
  },
  goalContainer:{
    flex:5
  },
  goalItem:{
    margin:8,
    padding:6,
    borderRadius:6,
    backgroundColor:'#808080',
    color:'white',
  }
});
