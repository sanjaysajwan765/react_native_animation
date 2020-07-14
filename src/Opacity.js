import React, { useState } from 'react';
import { AppRegistry, StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

const Opacity = () => {
    const [animation, setAnimation] = useState(new Animated.Value(1))
    const animatedStyles = {
        opacity: animation
    }
    const startAnimation=()=>{
        Animated.timing(animation,{
            toValue:0,
            duration:300,
            useNativeDriver:true     
        }).start(()=>{
            Animated.timing(animation,{
                toValue:1,
                duration:100,
                useNativeDriver:true
            }).start()
        })
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

export default Opacity