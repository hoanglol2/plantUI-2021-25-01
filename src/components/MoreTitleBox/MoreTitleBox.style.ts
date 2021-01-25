import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    wrapText: {
        width: '50%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#585a61',
    },
    line: {
        width: 115,
        height: 4,
        marginTop: -5,
        backgroundColor: '#b1e5d3'
    },
    wrapButton: {
        width: '50%',
        alignItems: 'flex-end'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: '#00a46c',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#FFF'
    }
});