import React from 'react';
import {View, Text} from 'react-native';
import styles from './DescBox.style';

const DescBox = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Description</Text>
    </View>
  );
};
export default DescBox;
