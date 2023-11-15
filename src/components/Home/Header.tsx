import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common-styles'
import fontStyles from '../../styles/font-styles'
import NotificationSvg from '../../assets/svg/notification'
import { moderateScale } from 'react-native-size-matters'


const Header = () => {
    return (
        <View style={[styles.container]}>
            <View style={[commonStyles.RowJSBAC, { padding: moderateScale(10), }]}>
                <View style={
                    [commonStyles.RowJFS, { columnGap: moderateScale(15), alignItems: 'center' }]
                }>
                    <Image source={require('../../assets/images/banner.png')}
                        style={styles.profileImg}
                    />
                    <View style={{}}>
                        <Text style={[fontStyles.InterLight12,]}>
                            Good Morning
                        </Text>
                        <Text style={[fontStyles.InterBold16,]}>
                            MAX!
                        </Text>
                    </View >
                </View >
                <TouchableOpacity style={{}}>
                    <NotificationSvg />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: moderateScale(100),
        paddingVertical: moderateScale(10),
        marginBottom: moderateScale(5)
    },
    profileImg: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(60 / 2)
    }

})