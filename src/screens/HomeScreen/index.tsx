import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './HomeScreen.style';
// components.
import HomeHeader from '../../components/HomeHeader';
import SearchBox from '../../components/SearchBox';
import MoreTitleBox from '../../components/MoreTitleBox';
import ListSmallProduct from '../../components/ListSmallProduct';
import ListMediumProduct from '../../components/ListMediumProduct';
// datas.
import {product} from '../../mocks/product';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.outerContainer}>
      <HomeHeader />
      <SearchBox />
      <MoreTitleBox title="Recommended" buttonText="More" />
      <ListSmallProduct
        navigation={() => navigation.navigate('Detail')}
        data={product}
      />
      <MoreTitleBox title="Featured Plants" buttonText="More" />
      <ListMediumProduct />
    </ScrollView>
  );
};
export default HomeScreen;
