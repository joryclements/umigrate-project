import React, { useState, useEffect }  from "react";
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Constants from 'expo-constants';

export default function App(){
  const [fact, setFact] = useState([]);
  const [counter, setCount] = useState(0);
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((json) => setFact(json.map(cat => cat.text)))
  }, []);

  return (
    <View style={{padding: 50}}>
    <Text>{fact[counter]}</Text>
    <Button title="next fact" onPress ={() => {
      if (counter != 4){setCount(counter + 1)}
      else {setCount(0)}}}/>
    </View>
  )
}
