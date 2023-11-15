import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import commonStyles from '../../styles/common-styles'
import fontStyles from '../../styles/font-styles'
import ForwardOrangeArrow from '../../assets/svg/orange-forwar-arrow'
import Colors from '../../constants/colors'

const SupportSession = () => {
    return (
        <View style={{
            rowGap: moderateScale(20)
        }}>
            <HeaderTitle
                categoryWord='Sweat Support'
                bodyText='Questions, feedback? Send us a message'
            />
            <View style={[{ paddingBottom: moderateScale(10), backgroundColor: '#FFBBA01A', borderRadius: moderateScale(10) }]}>
                <FastImage
                    source={require('../../assets/images/supportBanner.png')}
                    style={{
                        height: moderateScale(94, 0.3),
                        borderRadius: moderateScale(10)
                    }}
                    resizeMode='contain'
                />
                <View style={[commonStyles.flexRowJCAC, { paddingVertical: moderateScale(20) }]}>
                    <View style={{
                        width: '55%',
                    }}>
                        <Text style={fontStyles.InterMedium16}>
                            Our team is ready to assist you!
                        </Text>
                    </View>
                    <TouchableOpacity style={[commonStyles.flexRowJCAC, {
                        columnGap: moderateScale(5),
                        borderWidth: moderateScale(1),
                        padding: moderateScale(10),
                        borderRadius: moderateScale(5),
                        borderColor: Colors.primaryColor
                    }]}>
                        <Text style={[fontStyles.InterSemiBold14, { color: Colors.primaryColor }]}>
                            Contact us
                        </Text>
                        <ForwardOrangeArrow />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SupportSession

const styles = StyleSheet.create({})