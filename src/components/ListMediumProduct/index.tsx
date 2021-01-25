import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './ListMediumProduct.style';
import {Image18, Image19} from '../../assets/images';

const ListMediumProduct = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <Image style={styles.imageProductMedium} source={Image18} />
      <Image style={styles.imageProductMedium} source={Image19} />
    </ScrollView>
  );
};
export default ListMediumProduct;
