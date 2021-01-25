import React from 'react';
import {View, Text} from 'react-native';
import styles from './MoreTitleBox.style';

interface Props {
  title: String;
  buttonText: String;
}

const MoreTitleBox = (props: Props) => {
  const {title, buttonText} = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapText}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.wrapButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </View>
    </View>
  );
};
export default MoreTitleBox;
