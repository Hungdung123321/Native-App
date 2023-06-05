import { StyleSheet, Text, View } from 'react-native'
import { scale } from '../../constants/scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scale(110),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.BLUE,
        justifyContent: 'center'
    },
    boxContent: {
        width: '100%',
        flexDirection: "row",
        backgroundColor: 'red'
    }
})

export default styles;