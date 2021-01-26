import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './DetailScreen.style';
// components.
import ColLeftDetail from '../../components/ColLeftDetail';
import SwiperBox from '../../components/Swiper';
import DetailInfoBox from '../../components/DetailInfoBox';
import ButtonDetailBox from '../../components/ButtonDetailBox';
import DescBox from '../../components/DescBox';
// datas.
import {product} from '../../mocks/product';

const DetailScreen = ({route, navigation}: any) => {
  /* Get the param */
  const {id} = route.params;

  const setData = product.find((e) => e.id === id);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.wrapSlider}>
        <ColLeftDetail handleOnPress={() => navigation.goBack()} />
        <SwiperBox />
      </View>
      <DetailInfoBox data={setData} />
      <View style={styles.wrapDesc}>
        <ButtonDetailBox />
        <DescBox />
      </View>
    </View>
  );
};
export default DetailScreen;
