import React, { useState } from 'react';
import { AppRegistry, StyleSheet, View,Text, Animated, TouchableWithoutFeedback } from "react-native";

// const Dimension = () => {
//     const [animation, setAnimation] = useState(new Animated.Value(1))
//     const animatedStyles = {
//         transform:[
//             {
//                 scaleX:animation
//             }
//         ]
//     }
//     const startAnimation=()=>{
//         Animated.timing(animation,{
//             toValue:2,
//             duration:300,
//             useNativeDriver:true
//         }).start(()=>animation.setValue(1.33))
//     }
//     return (
//         <View style={styles.container}>
//             <TouchableWithoutFeedback onPress={startAnimation}>
//                 <Animated.View style={[styles.box,animatedStyles]}>
//                     <Text>This is a text</Text>
//                 </Animated.View>
//             </TouchableWithoutFeedback>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     box:{
//         width:100,
//         height:100,
//         backgroundColor:"tomato",
//     }

// })

// export default Dimension


export default class animations extends React.Component {
    state = {
      animation: new Animated.Value(1),
    }
  
    componentDidMount() {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 4000,
        useNativeDriver:true
      }).start();
    }
    
    render() {
      const yInterpolate = this.state.animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -25]
      });
  
      const boxStyle = {
        transform: [
          { scaleY: this.state.animation },
          { translateY: yInterpolate }
        ]
      }
  
      return (
        <View style={styles.container}>
          <View>
            <View style={styles.box2} />
            <Animated.View style={[styles.box, boxStyle]} />
            
          </View>
        </View>
      );
  
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: "tomato",
    },
    box2: {
      width: 100,
      height: 100,
      backgroundColor: "blue",
    }
  });