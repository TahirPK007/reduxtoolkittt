import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../src/themeSlice';

const Theme = () => {
  const [color, setcolor] = useState('');
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Theme</Text>
      <TextInput
        placeholder="enter color"
        value={color}
        onChangeText={value => setcolor(value)}
      />
      <Button
        title="change color"
        onPress={() => {
          dispatch(changeTheme(color));
        }}
      />
    </View>
  );
};

export default Theme;
