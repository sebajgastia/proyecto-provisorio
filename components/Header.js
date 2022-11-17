import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colors from "../constants/colors";

const Header = ({title, newStyles}) =>{
    return (
        <View style={styles.header}>
            <Text style={{...styles.titleheader, ...newStyles}}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.primary,
        height:90,
        paddingTop:50,
        alignItems:'center'
    },

    titleheader:{
        color:'white',
        fontSize:26,
    },
});