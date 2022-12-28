import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { Colors } from '../../styles';

interface Props {
  children: JSX.Element | JSX.Element[],
  isPress: boolean
}

const Tooltip = (props: Props): JSX.Element => {

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 1 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 0.5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    if (props.isPress)
      fadeIn();
    else
      fadeOut();
  }, [props.isPress])

  return <>
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {props.children}
    </Animated.View>
  </>
}

export default Tooltip;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    top: -20,
    width: 35,
    backgroundColor: Colors.Gray,
    borderRadius: 30
  }
});
