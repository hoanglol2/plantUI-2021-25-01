import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    wrapper: {
      
    },
    dotStyle: {
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    activeDotStyle: {
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    imageSlide: {
        marginLeft: 120,
        marginBottom: 130,
        height: 720,
        width: 420,
        marginTop: 60, 
        resizeMode: 'stretch'
    }
});