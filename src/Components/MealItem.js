import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function MealItem(props) {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{...styles.mealItem, ...styles.mealHeader}}>
            <View>
                <Text>{props.title}</Text>
            </View>
            <View style={{...styles.maelRow, ...styles.mealDetail}} > 
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:500
    }
})

export default MealItem
