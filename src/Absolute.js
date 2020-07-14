import React, { useState } from 'react';
import { StyleSheet, View, Animated, Text, TouchableWithoutFeedback } from 'react-native';

// const Absolute = () => {
//     const [animation, setAnimation] = useState(new Animated.Value(0))

//     const animatedStyles={
//         left:animation,
//         top:animation
//     }
//     const startAnimation=()=>{
//         Animated.timing(animation,{
//             toValue:300,
//             duration:1500,
//             useNativeDriver:false
//         }).start()
//     }
//     return (
//         <View style={styles.container}>
//             <TouchableWithoutFeedback onPress={startAnimation}>
//                 <Animated.View style={[styles.box, animatedStyles]} />
//             </TouchableWithoutFeedback>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         position:'relative',
//         backgroundColor:'green'
//     },
//     box: {
//         width: 100,
//         height: 100,
//         position: 'absolute',
//         backgroundColor: "tomato"
//     }
// })

// export default Absolute


export default class Absolute extends React.Component {
    state = {
      animation: new Animated.Value(0),
    }
  
    componentDidMount() {
      Animated.timing(this.state.animation, {
        toValue: 300,
        duration: 1000,
        useNativeDriver:false
      }).start();
    }
    
    render() {
      const boxStyle = {
        right: this.state.animation
      }
  
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.box, boxStyle]}>
            <Text>
            This is long repeated text. This is long repeated text. This is long repeated text. This is long repeated text. This is long repeated text.
            </Text>
          </Animated.View>
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
      height: 100,
      position: "absolute",
      left: 0,
      top: 250,
      backgroundColor: "tomato",
    },
  });