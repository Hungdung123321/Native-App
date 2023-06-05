import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { IMG_UEF_Logo } from '../../assets/imgs'
import AppButton from '../AppButton'
import { FONTS } from '../../assets/fonts'



const CardExam = () => {

    const renderChild = () => {
        return (
            <View style={styles.boxContent}>
                <View>
                    <Text style={FONTS.FONT_DEFAULT}>hello</Text>
                    <Text style={FONTS.FONT_DEFAULT}>asdas</Text>
                </View>
                <AppButton />
                <AppButton />
            </View>
        )
    }

    return <AppButton
        style={styles.container}
        content={() => renderChild()}
    />
}

export default CardExam
