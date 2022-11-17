import React, { useState } from "react";
import { View,StyleSheet, Text, Pressable, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";



const StartGameScreen = ({onStartGame}) => {

const [value, setValue] = useState('')
const [Confirm, setConfirmed] = useState(false)
const [numberselected, setnumberselected] = useState('')

const handleConfirmation = () => {
    const choseNumber = parseInt(value);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setnumberselected(choseNumber);
    setValue("");
  };



const handleResetinput = () =>{
    setValue ("");
    setConfirmed(false);
};

const handleImput  = (text) => {
    setValue(text.replace(/[^0-9]/g, ''))
}



    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        <View style={styles.screen}>
            <Card>
                <Text style={{color:'white', fontSize:20}}>Selecciona un numero</Text>
                <Input value={value} onChangeText={handleImput}/> 
                <View style={styles.contenedorbutton} >
                   
                    <Pressable style={styles.cleanALL} onPress={handleResetinput}>
                       <Text>LIMPIAR</Text>
                    </Pressable>

                    <Pressable style={styles.confirmALL}  onPress={handleConfirmation} >
                       <Text>CONFIRMAR</Text>
                    </Pressable>
                </View>
            </Card>
            {Confirm && (
             <Card newStyles={{marginTop:50, width:250, backgroundColor:'white'}}>   
            <Text>Tu numero</Text>
            <Text>{numberselected}</Text>
            <Button title="Comenzar!" onPress={() => onStartGame (numberselected)}/>
            </Card>
            )}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen 


const styles = StyleSheet.create ({
    screen:{
        flex: 1,
        padding:10,
        alignItems: 'center',
        marginTop:50

    },


    contenedorbutton:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },

    cleanALL:{
        backgroundColor: colors.secondary,
        height:25,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,


    },

    confirmALL:{
        backgroundColor: colors.secondary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,


    }


})