import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Spacing } from '../../../styles';
import Counter from '../../components/Counter';
import MinusButton from '../../components/MinusButton';
import PlusButton from '../../components/PlusButton';

interface Props {
  value: number,
  longPressValue: number,
  onPressOut: () => void,
  changeValue: (amount: number) => void,
  changeLongPressValue: (amount: number) => void,
}


const MainContent = (props: Props): JSX.Element => {

  return <>
    <View style={styles.container}>
      {/* Counter */}
      <View>
        <Counter value={props.value} text={"Counter:"} />
      </View>
      {/* Buttons */}
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PlusButton {...props} />
        </View>
        <View style={[styles.button, { marginLeft: Spacing.m }]}>
          <MinusButton {...props} />
        </View>
      </View>
    </View>
  </>
}

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: "100%",
    marginTop: Spacing.m,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: "33%"
  }
});
