import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
const Global = () => {
  const count = useSelector(state => state.counter.count);
  const clr = useSelector(state => state.theme.color);
  console.log(clr);
  return (
    <View>
      <Text style={{color: clr}}>Global</Text>
      <Text>Global count : {count}</Text>
    </View>
  );
};

export default Global;
