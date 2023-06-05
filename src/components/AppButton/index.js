import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppButton = ({ content, contentStyle, patch, ...restBtn }) => {

    const renderContent = (content, contentStyle) => {
        if (!content) {
            return null;
        }
        switch (typeof content) {
            case 'string':
            case 'number':
                return <Text style={contentStyle}>{content}</Text>;
            case 'function':
                return content?.();
            case 'boolean':
                return <Image style={contentStyle} source={patch}></Image>
            default:
                return <View />
        }
    }

    return (
        <TouchableOpacity hitSlop={1.5} {...restBtn}>
            {renderContent(content, contentStyle)}
        </TouchableOpacity>
    )
}

export default AppButton;

const styles = StyleSheet.create({

})