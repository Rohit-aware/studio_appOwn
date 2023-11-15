import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import { category } from '../../local-data/dummyData'
import fontStyles from '../../styles/font-styles'
import Colors from '../../constants/colors'
import { moderateScale } from 'react-native-size-matters'


const CategoryList = () => {
    return (
        <View style={{
            paddingHorizontal: moderateScale(5),
            marginVertical: moderateScale(20)
        }}>
            <HeaderTitle
                categoryWord='Our Categories'
                bodyText='Browse through our categories'
            />
            <View style={{
                padding: moderateScale(5)
            }}>
                <FlatList
                    scrollEnabled={false}
                    data={category}
                    numColumns={3}
                    columnWrapperStyle={{
                        columnGap: moderateScale(10),
                        paddingBottom: moderateScale(10)
                    }}
                    contentContainerStyle={{
                        paddingTop: 20
                    }}
                    renderItem={({ item, index }: any) => {
                        return (
                            <TouchableOpacity style={{

                            }}>
                                <ImageBackground
                                    source={item.img}
                                    style={styles.categoryImg}
                                >
                                    <Text style={[fontStyles.InterBold12, { color: Colors.white }]} numberOfLines={2}>
                                        {item.title}
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    categoryImg: {
        height: moderateScale(104),
        width: moderateScale(104),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: moderateScale(12)
    }
})