import React from 'react';
import {Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './ListMediumProduct.style';

interface Props {
  data: Array<any>;
  handleOnPress: Function;
}
const ListMediumProduct = (props: Props) => {
  const {data, handleOnPress} = props;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {data
        ? data.map(({image}, index) => (
            <TouchableOpacity onPress={() => handleOnPress()} key={index}>
              {index === 0 ? (
                <Image
                  style={[styles.imageProductMedium, styles.fistImageProduct]}
                  source={image}
                />
              ) : (
                <Image style={styles.imageProductMedium} source={image} />
              )}
            </TouchableOpacity>
          ))
        : null}
    </ScrollView>
  );
};
export default ListMediumProduct;
