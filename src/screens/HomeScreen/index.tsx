import React from 'react';
import {ScrollView} from 'react-native';
import styles from './HomeScreen.style';
// components.
import HomeHeader from '../../components/HomeHeader';
import SearchBox from '../../components/SearchBox';
import MoreTitleBox from '../../components/MoreTitleBox';
import ListSmallProduct from '../../components/ListSmallProduct';
import ListMediumProduct from '../../components/ListMediumProduct';
// datas.
import {product, featuredProduct} from '../../mocks/product';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.outerContainer}>
      <HomeHeader />
      <SearchBox />
      <MoreTitleBox title="Recommended" buttonText="More" />
      <ListSmallProduct
        handleOnPress={(id: Number) => navigation.navigate('Detail', {id: id})}
        data={product}
      />
      <MoreTitleBox title="Featured Plants" buttonText="More" />
      <ListMediumProduct
        handleOnPress={() => navigation.navigate('Detail')}
        data={featuredProduct}
      />
    </ScrollView>
  );
};
export default HomeScreen;
