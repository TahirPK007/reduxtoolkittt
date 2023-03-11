import {View, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
const Global = () => {
  const count = useSelector(state => state.counter.count);
  const themecolor = useSelector(state => {
    state.theme.color;
  });
  return (
    <View>
      <Text style={{fontSize: 20, color: themecolor}}>Global</Text>
      <Text>Global count : {count}</Text>
    </View>
  );
};

export default Global;
