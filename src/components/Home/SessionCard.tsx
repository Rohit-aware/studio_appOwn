import { FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common-styles'
import HeaderTitle from './HeaderTitle'
import { MornignSessions } from '../../local-data/dummyData'
import FastImage from 'react-native-fast-image'
import fontStyles from '../../styles/font-styles'
import Colors from '../../constants/colors'
import Calender from '../../assets/svg/calender'
import ClockSvg from '../../assets/svg/clock'
import ForwardArrow from '../../assets/svg/forward-arrow'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import WeatherSvg from '../../assets/svg/WeatherSvg'

const SessionCard = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={{
            paddingHorizontal: 0
        }}>
            <HeaderTitle
                categoryWord='Morning Magic'
                bodyText='Upcoming morning session'
            />
            <View style={{
                padding: moderateScale(5),
                marginTop: moderateScale(5)
            }}>
                <FlatList
                    data={MornignSessions}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ padding: moderateScale(10) }} />}
                    contentContainerStyle={{
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[commonStyles.commonShadow, styles.container]}>
                                <ImageBackground
                                    source={item.img}
                                    style={[styles.mornBann, {
                                        alignItems: 'flex-end',
                                        padding: moderateScale(10)
                                    }]}
                                    resizeMode='cover'
                                >
                                    <View style={[commonStyles.flexRowJCAC, styles.weatheTxt]}>
                                        <WeatherSvg />
                                        <Text style={[fontStyles.InterMedium12, { color: '#D6E7FF' }]}>
                                            Evening
                                        </Text>
                                    </View>
                                </ImageBackground>
                                <View>
                                    <Text style={[fontStyles.InterBold16, { padding: 15 }]}>
                                        {item.title}
                                    </Text>
                                </View>

                                <View style={[commonStyles.flexRow, { alignItems: 'center' }]}>
                                    <View style={styles.dateTimeContainer}>
                                        <View style={[commonStyles.flexRow, styles.dateTxt]}>
                                            <Calender />
                                            <Text style={fontStyles.InterRegular12}>
                                                {item.date}
                                            </Text>
                                        </View>
                                        <View style={[commonStyles.flexRow, styles.dateTxt]}>
                                            <ClockSvg />
                                            <Text style={fontStyles.InterRegular12}>
                                                {item.time}
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={[commonStyles.commonShadow, commonStyles.flexRowJCAC, styles.bookTxt]}
                                        onPress={() => navigation.navigate('Schedual')}
                                    >
                                        <Text style={[fontStyles.InterBold12, {
                                            color: Colors.white
                                        }]}>
                                            Book Now
                                        </Text>
                                        <ForwardArrow />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View >
        </View >
    )
}

export default SessionCard

const styles = StyleSheet.create({
    bookTxt: {
        height: moderateScale(40),
        width: moderateScale(100),
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(5)
    },
    dateTxt: {
        columnGap: 10,
        paddingHorizontal: 10
    },
    dateTimeContainer: {
        flexDirection: 'column',
        rowGap: moderateScale(10),
        paddingBottom: moderateScale(15),
        width: '60%'
    },
    mornBann: {
        height: moderateScale(185, 0.3),
        width: moderateScale(275, 0.3),
        borderTopLeftRadius: moderateScale(15),
        borderTopRightRadius: moderateScale(15)
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: moderateScale(15),
        marginVertical: moderateScale(10),
    },
    weatheTxt: {
        backgroundColor: '#002F7426',
        width: moderateScale(90),
        height: moderateScale(30),
        borderRadius: moderateScale(10),
        columnGap: moderateScale(5)
    }
})