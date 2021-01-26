import {StyleSheet} from 'react-native';
import {primaryColor,primaryBlurColor} from '../../colors';

export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: -120,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#62636a'
    },
    textPrice: {
        fontWeight: 'bold',
        color: primaryColor,
        paddingLeft: 180,
        fontSize: 20
    },
    textOrigin: {
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: primaryBlurColor,
        fontSize: 20,
        marginTop: -30
    },
    
});