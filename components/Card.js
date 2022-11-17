import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({children, newStyles}) => {
  return (<View style={{...styles.imputcontainer, ...newStyles}}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    imputcontainer:{
        width:300,
        alignItems:'center',
        backgroundColor:'red',
        padding:40,
        shadowColor:'black',
        shadowOffset:{width:0, height: 2},
        shadowRadius:6,
        shadowOpacity:1,
        elevation:5,   
        borderRadius:10,     
    },

})