import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/common-styles'
import { dateTimeListData } from '../../local-data/dummyData';
import Colors from '../../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import fontStyles from '../../styles/font-styles';
import HeaderTitle from '../Home/HeaderTitle';

const DateTimeList = () => {
    const [selectedDate, setSelectedDate] = useState(12);

    const renderItem = ({ item }: any) => {
        const isSelected = selectedDate === item.date;
        return (
            <TouchableOpacity
                style={[commonStyles.centerJCAC,
                styles.itemContainer,
                ]}
                onPress={() => setSelectedDate(item.date)}
            >
                <Text style={[isSelected ? [fontStyles.InterBold12] : [fontStyles.InterBold12, { color: Colors.grey }], { padding: moderateScale(6) },]}>
                    {item.day}
                </Text>
                <Text style={[isSelected && [fontStyles.InterBold12, { color: Colors.white }], isSelected ? styles.selectedItem : null]}>
                    {item.date}
                </Text>
            </TouchableOpacity>
        );
    };


    return (
        <View style={{ backgroundColor: '#F6F6F6' }}>
            <View style={[commonStyles.RowJFSAC, { marginTop: moderateScale(10), padding: moderateScale(10) }]}>
                <HeaderTitle
                    categoryWord='Our Schedule'
                />
            </View>
            <FlatList
                data={dateTimeListData}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                horizontal={true}
                contentContainerStyle={[{
                    // alignItems: 'flex-start',
                }]}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default DateTimeList

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: moderateScale(10),
        paddingBottom: moderateScale(20),
        borderBottomWidth: moderateScale(1),
        borderBottomColor: '#FD4B01'
    },
    selectedItem: {
        backgroundColor: 'orange',
        padding: moderateScale(7),
        borderRadius: moderateScale(5)
    },

})