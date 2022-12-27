import React from 'react'
import { StyleSheet,  View } from 'react-native';
import { Spacing } from '../../../styles';
import Counter from '../../components/Counter';
import CustomButton from '../../components/CustomButton';

interface Props {
  value: number,
  changeValue: (amount:number) => void,
}

const MainContent = (props: Props): JSX.Element => {

    return <>
    <View style={styles.container}>
      {/* Counter */}
      <View>
        <Counter value={props.value} text={"Counter:"}/>
      </View>
      {/* Buttons */}
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CustomButton title={"+"} onPress={()=>{props.changeValue(+1)}} isActive={props.value >=100}/>
        </View>
        <View style={[styles.button, {marginLeft: Spacing.m}]}>
          <CustomButton title={"-"} onPress={()=>{props.changeValue(-1)}} isActive={props.value <=0}/>
        </View>
      </View>
    </View>
    </>
}

export default MainContent;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttons:{
    width:"100%",
    marginTop: Spacing.m,
    flexDirection:'row',
    justifyContent: 'center'
  },
  button:{
    width: "33%"
  }
});
  