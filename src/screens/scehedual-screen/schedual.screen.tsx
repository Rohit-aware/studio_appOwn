import { FlatList, TouchableOpacity, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common-styles'
import DateTimeList from '../../components/Schedual-screen/date-time'
import { SchedualList } from '../../local-data/dummyData'
import Colors from '../../constants/colors'
import { moderateScale } from 'react-native-size-matters'
import ForwardOrangeArrow from '../../assets/svg/orange-forwar-arrow'
import ClockSvg from '../../assets/svg/clock'
import fontStyles from '../../styles/font-styles'

const Schedual = ({ navigation }: any) => {
    const BorderColor = ['#4E8B00', '#888B00', '#007A8B', '#5E008B']
    const containerColor = ['#4E8B0008', '#888B0008', '#007A8B08', '#5E008B08']

    const renderItem = ({ item, index }: any) => {
        const borderColor = BorderColor[index % BorderColor.length];
        const backgroundColor = containerColor[index % containerColor.length];
        return (
            <View style={[commonStyles.flexRow, { paddingVertical: moderateScale(10) }]}>
                <View style={[commonStyles.RowJFSAC, {
                    width: '30%',
                    borderRightWidth: moderateScale(2),
                    padding: moderateScale(20),
                    borderRightColor: borderColor,
                }]}>
                    <Text style={fontStyles.InterBold12}>
                        {item.time}
                    </Text>
                </View>
                <View style={[styles.typeContainer, { backgroundColor: backgroundColor }]}>
                    <View style={[commonStyles.RowJSBAC,]}>
                        <Text style={fontStyles.InterBold14}>{item.type}</Text>
                        <View style={[commonStyles.flexRowJCAC, { columnGap: moderateScale(5) }]}>
                            <TouchableOpacity><ClockSvg /></TouchableOpacity>
                            <Text style={fontStyles.InterRegular10}>{item.duration}</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.RowJSBAC,]}>
                        <Text style={fontStyles.InterRegular12}>{item.trainer}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}
                        >
                            <ForwardOrangeArrow />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <View style={[commonStyles.flexOne, { backgroundColor: Colors.lightWhite }]}>
            {/* For Upper Coponent */}
            <DateTimeList />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    margin: moderateScale(15),
                    height: Dimensions.get('screen').height,
                }}>
                <FlatList
                    scrollEnabled={false}
                    data={SchedualList}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        marginBottom: moderateScale(10),
                        rowGap: moderateScale(20)
                    }}
                />
            </ScrollView>
        </View>
    )
}

export default Schedual

const styles = StyleSheet.create({
    typeContainer: {
        width: '70%',
        borderTopRightRadius: moderateScale(10),
        borderBottomEndRadius: moderateScale(10),
        justifyContent: 'center',
        padding: moderateScale(20),
        rowGap: moderateScale(5)
    }
})