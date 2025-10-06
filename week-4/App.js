import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;
  
  function clickMe() {
    alert("this is the click me button"); // alert for web
    Alert.alert("this is the click me button"); // alert for phone

    
    totalGradeScores += gradePoints[sswd.toUpperCase()] * credits;
    totalGradeScores += gradePoints[ob.toUpperCase()] * credits;
    gpa = totalGradeScores / totalPossibleCredits;

    
    Alert.alert("Your GPA is " + gpa.toFixed(2));
 }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: "5%",
      marginRight: "5%",
      padding: "5%",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "3%",
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "gray",
      padding: "2%",
      width: "40%",
      borderRadius: 8,
    }
  });


return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center", marginTop: "10%" }}>
        GPA Calculator
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Maths</Text>
      <TextInput
        placeholder="Grade"
        onChangeText={setSswd}
        style={styles.textInput}
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Organisational Behaviour</Text>
      <TextInput
        placeholder="Grade"
        onChangeText={setOb}
        style={styles.textInput}
      />
    </View>

    <View style={styles.row}>
      <Button title="Submit" onPress={clickMe} />
    </View>
  </SafeAreaView>
);
}