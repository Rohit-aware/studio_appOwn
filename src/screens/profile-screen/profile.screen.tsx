import { FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../../components/Home/HeaderTitle'
import commonStyles from '../../styles/common-styles'
import { moderateScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import { SCREEN_WIDTH } from '../../constants/responsive'
import fontStyles from '../../styles/font-styles'
import Colors from '../../constants/colors'
import TakeSpace from '../../components/common/take-space'
import TrainingSVG from '../../assets/svg/Profile/TrainingSvg'
import ShareSVG from '../../assets/svg/Profile/shaire'
import USerDelSvg from '../../assets/svg/Profile/userDelete'
import LogOutSvg from '../../assets/svg/Profile/logoutSVG'
import LockSVG from '../../assets/svg/Profile/lock'
import ForwardOrangeArrow from '../../assets/svg/orange-forwar-arrow'
import ForwarBlackArrow from '../../assets/svg/Profile/forwar-black-arrow'
import ForwarRedArrow from '../../assets/svg/Profile/forwar-red-arrow'

const Profile = () => {

    const userDetails = [
        {
            img: TrainingSVG,
            title: 'My Trainings'
        },
        {
            img: LockSVG,
            title: 'Change Password'
        },
        {
            img: ShareSVG,
            title: 'Share App'
        },
        {
            img: USerDelSvg,
            title: 'Delete Account'
        },
        {
            img: LogOutSvg,
            title: 'Logout'
        },
    ]
    return (
        <View style={commonStyles.flexOne}>
            <View style={[commonStyles.RowJFSAC, { marginTop: moderateScale(10), padding: moderateScale(10) }]}>
                <HeaderTitle
                    categoryWord='My Profile'
                />
            </View>
            <FastImage
                source={require('../../assets/images/profilePic.png')}
                style={[{
                    width: SCREEN_WIDTH,
                    height: 140,
                    zIndex: -1,
                }]}
                resizeMode='stretch'
            />
            <View style={[commonStyles.alignSelfCenter, { position: 'absolute', top: 100, zIndex: 10 }]}>
                <FastImage
                    source={require('../../assets/images/displayPicture.png')}
                    style={[styles.profileImg, { zIndex: 1, marginTop: moderateScale(20) }]}
                    resizeMode='stretch'
                />
            </View>
            <TakeSpace space={moderateScale(10)} />
            <View style={[styles.profileCont, commonStyles.commonShadow,]}>
                <View style={[commonStyles.centerJCAC,]}>
                    <View style={[commonStyles.flexColumnJACA, { rowGap: moderateScale(5), }]}>
                        <TakeSpace space={moderateScale(30)} />
                        <Text style={fontStyles.InterSemiBold18}>
                            Max Philips
                        </Text>
                        <Text style={fontStyles.InterRegular14}>
                            +91 2583848583
                        </Text>
                        <TouchableOpacity style={[
                            commonStyles.centerJCAC,
                            styles.editBtn
                        ]}>
                            <Text style={[fontStyles.InterSemiBold12, { color: Colors.primaryColor }]}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TakeSpace space={moderateScale(5)} />
                <View style={{ padding: moderateScale(15) }}>
                    <FlatList
                        data={userDetails}
                        ItemSeparatorComponent={() => (
                            <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderColor: Colors.grey }} />
                        )}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[commonStyles.RowJSBAC, { padding: moderateScale(15) }]}>
                                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(15) }]}>
                                        {React.createElement(item.img)}
                                        <Text style={[fontStyles.InterRegular14, { color: item.title === 'Delete Account' ? Colors.dangerRed : Colors.black }]}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View>
                                        {item.title === 'Delete Account' ?
                                            <ForwarRedArrow /> : <ForwarBlackArrow />
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
            <View style={[commonStyles.centerJCAC, { marginTop: moderateScale(50) }]}>
                <Text style={[fontStyles.InterLight12, { color: Colors.grey }]}>
                    App V 0.1
                </Text>
            </View>
        </View >
    )
}

export default Profile

const styles = StyleSheet.create({
    profileImg: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(100 / 2),
    },
    profileCont: {
        backgroundColor: Colors.lightWhite,
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(-70),
        borderRadius: moderateScale(5)
    },
    editBtn: {
        padding: moderateScale(12),
        borderWidth: moderateScale(0.6),
        borderRadius: moderateScale(5),
        borderColor: Colors.primaryColor,
    },
})