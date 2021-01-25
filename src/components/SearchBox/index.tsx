import React from 'react';
import {View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './SearchBox.style';
import LinearGradient from 'react-native-linear-gradient';
// images.
import {Image3} from '../../assets/images';

const SearchBox = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 164, 109, 0.4)', 'transparent']}
      style={styles.searchLinear}>
      <View style={styles.wrapInput}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#b1e5d3"
          style={styles.inputSearch}
        />
        <Image source={Image3} style={styles.iconSearch} />
      </View>
    </LinearGradient>
  );
};
export default SearchBox;
