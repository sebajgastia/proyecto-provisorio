import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Gamescreens from './screens/Gamescreens';
import StartGameScreen from './screens/StartGameScreen'
import {useFonts} from 'expo-font'


export default function App() {
  
const [loaded] = useFonts({
  Roboto: require('./assets/fonts/RobotoCondensed-Bold.ttf')
})

 const [userNumber, setUserNumber] = useState()
 
 const handleStart = (selectedNumber) => {
  setUserNumber(selectedNumber)
 }

 let content = <StartGameScreen onStartGame={handleStart}/>

 if (userNumber) {
  content = <Gamescreens/>
 }

 if (!loaded){
  return null
 }

 

  return (
    <View style={styles.container}>
      <Header title={'Elige un numero'}newStyles={{fontFamily: 'Roboto'}} />
      {content}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
