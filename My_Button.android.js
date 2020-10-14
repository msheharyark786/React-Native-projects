import React from 'react'
import { Text, StyleSheet, TouchableNativeFeedback, View, TouchableOpacity, Platform} from 'react-native';
import Colors from '../Constants/Colors';


function My_Buttons(props) {

    let ButtonComponent=TouchableOpacity;
    if(Platform.Version>=21){
        ButtonComponent=TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.8} onPress={props.onPress} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </View>
        </ButtonComponent>
        </View>
    )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonContainer:{
        borderRadius:25,
        overflow:'hidden'

    },
    buttonText:{
        color: 'white',
        fontFamily:'open-sans',
        fontSize:18

    }

})

export default My_Buttons
