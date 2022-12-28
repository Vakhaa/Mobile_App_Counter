import React from 'react'
import CustomButton from './CustomButton';

interface Props {
  value: number,
  longPressValue: number,
  onPressOut: () => void,
  changeValue: (amount: number) => void,
  changeLongPressValue: (amount: number) => void,
}

const PlusButton = (props: Props): JSX.Element => {

  return <CustomButton title={"+"}
    value={props.value}
    isDisable={props.value >= 100}
    longPressValue={props.longPressValue}
    onPress={() => { props.changeValue(+1) }}
    onLongPress={() => props.changeLongPressValue(+1)}
    onPressOut={props.onPressOut} />
}

export default PlusButton;
