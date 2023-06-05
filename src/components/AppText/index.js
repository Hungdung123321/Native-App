import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';

const AppText = ({ Text, styleText }) => {
    return <Text styles={[styleText, styles.default]}>{Text}</Text>
}

export default AppText;

const styles = StyleSheet.create({
    default: {
        color: COLORS.WHITE,
        fontWeight: '400',
        fontSize: 16
    }
})

