import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ListSmallProduct.style';
// images.
import {Image4, Image5, Image6} from '../../assets/images';
interface Props {
  data: Array<any>;
  navigation: any;
}

const ListSmallProduct = (props: Props) => {
  const {data, navigation} = props;
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
        ? data.map((product, index) => (
            <TouchableOpacity
              onPress={() => navigation()}
              style={styles.wrapImage}
              key={index}>
              <Image source={product.image} />
              <View style={styles.wrapPrice}>
                <Text style={styles.textNameproduct}>{product.name}</Text>
                <Text style={styles.textPriceProduct}>${product.price}</Text>
              </View>
              <Text style={styles.textOriginProduct}>{product.origin}</Text>
            </TouchableOpacity>
          ))
        : null}
    </ScrollView>
  );
};
export default ListSmallProduct;
