import React from 'react';
import {Image, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './Swiper.style';
import {Slide1, Slide2} from '../../assets/images';

const SwiperBox = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={styles.dotStyle}
      activeDotColor="#FFF"
      activeDotStyle={styles.activeDotStyle}>
      <View style={styles.slide}>
        <Image source={Slide1} style={styles.imageSlide} />
      </View>
      <View style={styles.slide}>
        <Image source={Slide2} style={styles.imageSlide} />
      </View>
    </Swiper>
  );
};
export default SwiperBox;
