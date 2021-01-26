import React from 'react';
import {View, Text} from 'react-native';
import styles from './DetailInfoBox.style';

interface Props {
  data: any;
}

const DetailInfoBox = (props: Props) => {
  const {data} = props;

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.textPrice}>${data.price}</Text>
      </View>
      <Text style={styles.textOrigin}>{data.origin}</Text>
    </View>
  );
};
export default DetailInfoBox;
