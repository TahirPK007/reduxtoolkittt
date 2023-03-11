import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../src/counterSlice';
import {decrement} from '../src/counterSlice';
import {incrementByAmount} from '../src/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        felx: 1,
        // flexDirection: 'row',
        // width: '100%',
        // height: '50%',
        // justifyContent: 'center',
        // alignItems:"center"
        // backgroundColor:"black"
      }}>
      <Text>Counter</Text>
      <Button
        title="+"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Text style={{textAlign: 'center'}}>count : {count}</Text>
      <Button
        title="-"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Button
        title="Increment By Amount"
        onPress={() => {
          dispatch(incrementByAmount(10));
        }}
      />
    </View>
  );
};

export default Counter;
