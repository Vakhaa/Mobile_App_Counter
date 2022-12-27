import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors, Typography} from '../../styles';

interface Props {
    title: string,
    isActive: boolean,
    onPress: () => void
}

const CustomButton = (props: Props): JSX.Element => {

  const styleContainer = () => {
    return props.isActive ? styles.containerUnactive : styles.containerActive;
  }

    return <>
      <TouchableOpacity onPress={props.onPress} style={styleContainer()} disabled={props.isActive}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </>
}
 
export default CustomButton;

const _styleContainer = {
  borderRadius: 29,
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle

const styles = StyleSheet.create({
  containerActive:{
    backgroundColor: Colors.Orange,
    ..._styleContainer,
  },
  containerUnactive:{
    backgroundColor: Colors.LightGray,
    ..._styleContainer,
  },
  title: {
    color: Colors.White,
    fontFamily: Typography.Fonts.primary,
    fontSize: Typography.Sizes.l,
  },
});
