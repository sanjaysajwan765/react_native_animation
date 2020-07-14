import React, { useState } from 'react';
import { AppRegistry, StyleSheet, View,Text, Animated, TouchableWithoutFeedback } from "react-native";

const Scale = () => {
    const [animation, setAnimation] = useState(new Animated.Value(1))
    const animatedStyles = {
        transform:[
            {
                scaleX:animation
            }
        ]
    }
    const startAnimation=()=>{
        Animated.timing(animation,{
            toValue:0.5,
            duration:600,
            useNativeDriver:true     
        }).start(()=>animation.setValue(1))
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box,animatedStyles]}>
                    <Text>This is a text</Text>
                </Animated.View>
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

export default Scale