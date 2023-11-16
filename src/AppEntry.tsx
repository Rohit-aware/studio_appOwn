import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './constants/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MainStack from './routes/MainStack'

const AppEntry = () => {
    return (
        <SafeAreaView style={[styles.rootStyle]}>
            <GestureHandlerRootView style={[styles.rootStyle]}>
                <StatusBar backgroundColor={'#888B0008'} barStyle={'dark-content'} />
                <MainStack />
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}

export default AppEntry

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});