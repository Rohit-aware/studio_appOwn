import React, { lazy, Suspense } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './components/TabBar';
import EditProfile from '../screens/edit-profile/edit-profile.screen';
import Colors from '../constants/colors';
import CategoryList from '../screens/category-listing/category-list.screen';



type MainStackNavigatorProps = {
    Home: undefined;
    Schedual: undefined;
    Profile: undefined;
    CategoryList: undefined;
    Details: undefined;
    EditProfile: undefined;
    BottomTab: BottomStackNavigatorProps;
}
export type BottomStackNavigatorProps = {
    Home: undefined;
    Schedual: undefined;
    Profile: undefined;
};


//MainStack Stack
const MainStackNavigator = createNativeStackNavigator<MainStackNavigatorProps>();
//Bottom Stack
const BottomStackNavigator = createBottomTabNavigator<BottomStackNavigatorProps>();

const Home = lazy(() => import('../screens/home-screen/home-screen'));
const Schedual = lazy(() => import('../screens/scehedual-screen/schedual.screen'));
const Profile = lazy(() => import('../screens/profile-screen/profile.screen'));


// FAllback Component
const fallbackComponent = () => {
    return (
        <View>
            <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
    )
}

const BottomStack = ({ route }: any) => {
    return (
        <BottomStackNavigator.Navigator
            initialRouteName='Home'
            tabBar={props => <TabBar {...props} />}
            screenOptions={({ route }) => ({
                headerShown: false,
                unmountOnBlur: true,
            })}
        >
            <BottomStackNavigator.Screen
                name="Home"
                options={{ tabBarLabelStyle: { display: 'none' } }}
            >
                {() => (
                    <Suspense fallback={fallbackComponent()}>
                        <Home />
                    </Suspense>
                )}
            </BottomStackNavigator.Screen>
            <BottomStackNavigator.Screen
                name="Schedual"
                options={{ tabBarLabelStyle: { display: 'none' } }}
            >
                {() => (
                    <Suspense fallback={fallbackComponent()}>
                        <Schedual />
                    </Suspense>
                )}
            </BottomStackNavigator.Screen>
            <BottomStackNavigator.Screen
                name="Profile"
                options={{ tabBarLabelStyle: { display: 'none' } }}
            >
                {() => (
                    <Suspense fallback={fallbackComponent()}>
                        <Profile />
                    </Suspense>
                )}
            </BottomStackNavigator.Screen>
        </BottomStackNavigator.Navigator>
    );
};

const MainStack = () => {

    return (
        <NavigationContainer>
            <MainStackNavigator.Navigator initialRouteName='BottomTab'
                screenOptions={{ headerShown: false, animation: 'slide_from_left' }}
            >
                <MainStackNavigator.Screen name='BottomTab' component={BottomStack} />
                <MainStackNavigator.Screen name='Home' component={Home} />
                <MainStackNavigator.Screen name='Schedual' component={Schedual} />
                <MainStackNavigator.Screen name='Profile' component={Profile} />
                <MainStackNavigator.Screen name='EditProfile' component={EditProfile} />
                <MainStackNavigator.Screen name='CategoryList' component={CategoryList} />
            </MainStackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})