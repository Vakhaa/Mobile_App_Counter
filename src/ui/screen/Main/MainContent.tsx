import React from 'react'
import { StyleSheet, View } from 'react-native';
import Counter from '../../components/Counter';

interface Props {
  value: number
}

const MainContent = (props: Props): JSX.Element => {

    return <>
    <View style={styles.container}>
      <View>
        <Counter value={props.value} text={"Main:"}/>
      </View>
      <View>
        {/* Place for buttons */}
      </View>
    </View>
    </>
}

export default MainContent;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
  