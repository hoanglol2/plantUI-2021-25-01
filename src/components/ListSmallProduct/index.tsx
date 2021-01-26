import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ListSmallProduct.style';

interface Props {
  data: Array<any>;
  handleOnPress: Function;
}

const ListSmallProduct = (props: Props) => {
  const {data, handleOnPress} = props;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.outerContainer}>
      <LinearGradient
        colors={['rgba(0, 164, 109, 0.09)', 'transparent']}
        style={styles.productLinear}
      />
      {data
        ? data.map(({id, name, price, origin, image}, index) => (
            <TouchableOpacity
              onPress={() => handleOnPress(id)}
              style={styles.wrapImage}
              key={index}>
              <Image source={image} />
              <View style={styles.wrapPrice}>
                <Text style={styles.textNameproduct}>{name}</Text>
                <Text style={styles.textPriceProduct}>${price}</Text>
              </View>
              <Text style={styles.textOriginProduct}>{origin}</Text>
            </TouchableOpacity>
          ))
        : null}
    </ScrollView>
  );
};
export default ListSmallProduct;
