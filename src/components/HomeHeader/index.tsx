import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HomeHeader.style';
// images.
import {Image1, LOGO} from '../../assets/images';

const HomeHeader = () => {
  return (
    <View style={styles.wrapHeader}>
      <Image source={Image1} style={styles.tabImage} />
      <View style={styles.wrapLogo}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Hi Uishopy</Text>
        </View>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={LOGO} />
        </View>
      </View>
    </View>
  );
};
export default HomeHeader;
