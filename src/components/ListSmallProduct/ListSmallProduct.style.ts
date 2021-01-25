import {StyleSheet} from 'react-native';
import {primaryColor, primaryBlurColor} from '../../colors';

export default StyleSheet.create({
    outerContainer: {
        height: 400
    },
    productLinear: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 100,
        marginTop: 220,
    },
    wrapImage: {
        height: 250,
        elevation: 2,
        backgroundColor: '#FFF',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 160,
    },
    wrapPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    textNameproduct: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textPriceProduct: {
        fontWeight: 'bold',
        color: primaryColor,
    },
    textOriginProduct: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        paddingTop: 3,
        textTransform: 'uppercase',
        color: primaryBlurColor,
    }
});