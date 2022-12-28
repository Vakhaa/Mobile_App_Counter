import React from 'react'
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native'
import { Colors, Typography } from '../../styles';
import usePeriodically from '../../utils/usePeriodically';
import Tooltip from './Tooltip';

interface Props {
  title: string,
  value: number,
  isDisable: boolean,
  longPressValue: number,
  onPress: () => void,
  onLongPress: () => void,
  onPressOut: () => void
}

const CustomButton = (props: Props): JSX.Element => {

  //This hook a bit redundent of code, but it makes the component more readable and understandable. The details about this hook in it.
  const [startOnPressProcess, stopOnPressProcess] = usePeriodically(props.onLongPress);

  const styleContainer = (pressed: boolean) => (!pressed && !props.isDisable) ? styles.containerActive : styles.containerUnactive;

  const onPressIn = () => startOnPressProcess(500, 100);


  const onPressOut = () => {
    stopOnPressProcess();

    let supposedValue = props.value + props.longPressValue;
    if (supposedValue <= 100 && supposedValue >= 0)
      props.onPress();

    //The function is designed to reset the longPressValue
    props.onPressOut();
  }

  const displayLongPressValue = (): string => props.title === "+" ? `+${props.longPressValue + 1}` : `${props.longPressValue - 1}`;

  return <>
    <Pressable
      style={({ pressed }) => [styleContainer(pressed)]}
      disabled={props.isDisable}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {({ pressed }) => <>
        <Tooltip isPress={pressed}>
          <Text>{displayLongPressValue()}</Text>
        </Tooltip>
        <Text style={styles.title}>{props.title}</Text>
      </>}
    </Pressable>
  </>
}

export default CustomButton;

const _styleContainer = {
  borderRadius: 29,
  justifyContent: 'center',
  alignItems: 'center',

} as ViewStyle

const styles = StyleSheet.create({
  containerActive: {
    backgroundColor: Colors.Orange,
    ..._styleContainer,
  },
  containerUnactive: {
    backgroundColor: Colors.LightGray,
    ..._styleContainer,
  },
  title: {
    color: Colors.White,
    fontFamily: Typography.Fonts.primary,
    fontSize: Typography.Sizes.l,
  },
});
