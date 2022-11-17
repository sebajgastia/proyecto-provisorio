import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

const Gamescreens = ({handleResult}) => {
const [currentGuess, setCurrentGuess] = useState()
useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

   return (
    <View style={styles.ContainerGame}>
      <Text>El numero en pantalla es mayor o menor?</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonGame}>
        <Button title='Mayor' onPress={() => handleResult("lower", currentGuess)}/>
        <Button title='Menor' onPress={() => handleResult("greater", currentGuess)} />
      </Card>
    </View>
  )
}

export default Gamescreens

const styles = StyleSheet.create({
    ContainerGame:{
        flex:1,
        padding:10,
        alignItems:'center',
    },

    buttonGame:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20,
        width: 300,
        backgroundColor:'pink',
    

    }

})