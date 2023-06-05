import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import HomeBar from '../../components/HomeTopBar'
import { FONTS } from '../../assets/fonts'
import CardExam from '../../components/CardExam'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeBar />
      <View style={styles.padding}></View>
      <Text style={FONTS.FONT_TITLE}>Nổi Bật</Text>
      <CardExam />
    </View>
  )
}

export default HomeScreen

