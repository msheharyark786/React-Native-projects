import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Header = props=> {
    return (
        <View style={styles.header}>
            <Text style={styles.tittle}>{props.title} </Text>
        </View>
    ) 
}

const styles=StyleSheet.create({
    header:{
        height:90,
        width:'100%',
        justifyContent:'center',
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',

    },
    tittle: {
        color:'black',
        fontSize: 18
    }
})


export default Header
