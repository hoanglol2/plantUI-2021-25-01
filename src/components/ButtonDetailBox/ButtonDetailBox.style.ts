import {StyleSheet} from 'react-native';
import {primaryColor} from '../../colors';

export default StyleSheet.create({
    wrapper: {
        width: '50%',
        backgroundColor: primaryColor,
        height: 70,
        // marginTop: 50,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 17
    }
});