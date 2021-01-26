import React from 'react';
import {View, Text} from 'react-native';
import styles from './ButtonDetailBox.style';

const ButtonDetailBox = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Buy Now</Text>
    </View>
  );
};

export default ButtonDetailBox;
