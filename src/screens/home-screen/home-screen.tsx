import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common-styles'
import fontStyles from '../../styles/font-styles'
import Colors from '../../constants/colors'
import ForwardArrow from '../../assets/svg/forward-arrow'
import SessionCard from '../../components/Home/SessionCard'
import Header from '../../components/Home/Header'
import CategoryList from '../../components/Home/category'
import { moderateScale } from 'react-native-size-matters'
import SupportSession from '../../components/Home/SupportSession'

const height = Dimensions.get('screen').height
const Home = () => {
    return (
        <ScrollView
            style={[
                commonStyles.flexOne,
                {
                    paddingHorizontal: moderateScale(10),
                    marginVertical: moderateScale(10),
                    height: height
                }]}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <Header />
            {/* Banner  */}
            <ImageBackground
                source={require('../../assets/images/banner.png')}
                style={{
                    height: moderateScale(185),
                }}
                resizeMode='contain'
            >
                <View style={[commonStyles.RowJFEAC, styles.bookContainer]}>
                    <TouchableOpacity style={styles.bookBtn}>
                        <Text style={[fontStyles.InterBold12, { color: Colors.white }]}>
                            Book Now
                        </Text>
                        <ForwardArrow />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* Category List coponenet */}
            <CategoryList />
            {/* MornignSessions */}
            <SessionCard />
            {/* Sweat Support */}
            <SupportSession />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    bookContainer: {
        position: 'absolute',
        bottom: moderateScale(25),
        right: moderateScale(20),

    },
    bookBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: moderateScale(10),
    },
})