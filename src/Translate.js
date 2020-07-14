import React, { useState } from 'react';
import { AppRegistry, StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

const Translate = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0))
    const animatedStyles = {
        transform:[
            {
                translateY:animation
            }
        ]
    }
    const startAnimation=()=>{
        Animated.timing(animation,{
            toValue:400,
            duration:1500,
            useNativeDriver:true     
        }).start(()=>animation.setValue(0))
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box,animatedStyles]} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box:{
        width:100,
        height:100,
        backgroundColor:"tomato",
    }

})

export default Translate