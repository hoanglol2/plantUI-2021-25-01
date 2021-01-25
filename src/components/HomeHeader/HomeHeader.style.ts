import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    wrapHeader: {
        backgroundColor: '#00a46c',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },
    tabImage: {
        height: 10,
        width: 20,
        marginTop: 50,
    },
    wrapLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        width: '100%',
    },
    titleBox: {
        width: '50%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    logoBox: {
        width: '50%',
        alignItems: 'flex-end'
    },
    logo: {
        width: 60,
        height: 60,
    }
});