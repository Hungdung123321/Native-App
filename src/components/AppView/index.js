import { View } from 'react-native'
import React from 'react'

const AppView = ({ children, style, ...rest }) => {

    return <View >
        <View {...rest}>{children}</View>
    </View>;
}

export default AppView;
