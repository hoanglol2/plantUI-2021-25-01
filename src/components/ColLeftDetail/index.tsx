import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './ColLeftDetail.style';
import {weather} from '../../mocks/product';
// images.
import {Image17} from '../../assets/images';

interface Props {
  handleOnPress: Function;
}

const ColLeftDetail = (props: Props) => {
  const {handleOnPress} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOnPress()}>
        <Image source={Image17} style={styles.iconGoback} />
      </TouchableOpacity>

      {weather
        ? weather.map(({image}, index) => (
            <View key={index} style={styles.wrapIcon}>
              <Image source={image} />
            </View>
          ))
        : null}
    </View>
  );
};
export default ColLeftDetail;
