import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors, Typography } from '../../styles';

interface Props {
    value: number,
    text: string
}

const Counter = (props: Props): JSX.Element => {

    return <>
      <Text style={styles.text}>{props.text} {props.value}</Text>
    </>
}

export default Counter;


const styles = StyleSheet.create({
    text:{
      fontFamily: Typography.Fonts.primary,
      fontSize: Typography.Sizes.xl,
      color: Colors.Orange,
      textShadowColor: Colors.Black,
      textShadowRadius: 2
    }
  });
    