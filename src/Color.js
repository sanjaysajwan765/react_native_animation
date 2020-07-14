import React, { useState } from 'react';
import { View, Animated, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Color = () => {

    const [animation, setAnimation] = useState(new Animated.Value(0))

    const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })

    const animatedStyles = {
        backgroundColor: boxInterpolation
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, animatedStyles]} />
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
    box: {
        width: 100,
        height: 100,
        // backgroundColor:"tomato"
    }
})

export default Color