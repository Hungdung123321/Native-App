import { StyleSheet, Text, View } from 'react-native'
import { scale } from '../../constants/scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: scale(80),
        backgroundColor: COLORS.BLUE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 1
    },
    space: {
        flex: {
            one: 1,
            two: 2
        }
    },
    userBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    IC_menu: {
        width: scale(40),
    },
    userBoxText: {
        alignItems: 'flex-end',
        paddingRight: scale(10)
    }
})
export default styles;