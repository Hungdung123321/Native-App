import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import AppButton from '../AppButton'
import { IC_MENU, IC_MENU_LIGHT, IC_USER } from '../../assets/imgs'
import { FONTS } from '../../assets/fonts'

const HomeBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.space.flex.one}>
                <AppButton
                    content={true}
                    contentStyle={{ height: 32 }}
                    patch={IC_MENU_LIGHT} />
            </View>
            <View style={[styles.space.flex.two, styles.userBox]}>
                <View style={styles.userBoxText}>
                    <Text style={FONTS.FONT_DEFAULT}>{'Truong Hung Dung'}</Text>
                    <AppButton
                        content={'9999'}
                        contentStyle={FONTS.FONT_DEFAULT} />
                </View>
                <AppButton content={true} patch={IC_USER} />
            </View>
        </View>
    )
}

export default HomeBar
