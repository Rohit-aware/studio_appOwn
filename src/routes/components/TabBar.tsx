import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import Colors from '../../constants/colors';
import fontStyles from '../../styles/font-styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { useEffect, useState } from 'react';
import { SCREEN_HEIGHT } from '../../constants/responsive';
import ActiveHomeIcon from '../../assets/svg/Bottom-Tab/ActiveHomeIcon';
import ActiveSchedualIcon from '../../assets/svg/Bottom-Tab/ActiveSchedualIcon';
import SchedualIcon from '../../assets/svg/Bottom-Tab/SchedualIcon';
import HomeIcon from '../../assets/svg/Bottom-Tab/HomeIcon';
import ActiveProfileIcon from '../../assets/svg/Bottom-Tab/ActiveProfileIcon';
import ProfileIcon from '../../assets/svg/Bottom-Tab/ProfileIcon';
import { moderateScale } from 'react-native-size-matters';

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [showBottomTab, setShowBottomTab] = useState(true);

    const renderIcon = (
        isFoucs: boolean,
        lable:
            | string
            | ((props: { focused: boolean; color: string; position: LabelPosition; children: string }) => React.ReactNode),
    ) => {
        switch (lable) {
            case 'Home':
                return isFoucs ? <ActiveHomeIcon /> : <HomeIcon />;

            case 'Schedual':
                return isFoucs ? <ActiveSchedualIcon /> : <SchedualIcon />;

            case 'Profile':
                return isFoucs ? <ActiveProfileIcon /> : <ProfileIcon />;

            default:
                return null;
        }
    };

    // useEffect(() => {
    //     const keyDidShow = Keyboard.addListener('keyboardDidShow', () => {
    //         setShowBottomTab(false);
    //     });

    //     const keyDidHide = Keyboard.addListener('keyboardDidHide', () => {
    //         setShowBottomTab(true);
    //     });

    //     return () => {
    //         keyDidHide.remove();
    //         keyDidShow.remove();
    //     };
    // }, []);

    return (
        showBottomTab && (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: (SCREEN_HEIGHT * 9.1) / 100,
                    backgroundColor: Colors.white,
                }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={{ flex: 1 }}
                        >
                            <View style={{ alignItems: 'center', paddingVertical: moderateScale(10) }}>
                                {renderIcon(isFocused, label)}

                                <Text
                                    style={[
                                        isFocused ? fontStyles.InterBold12 : fontStyles.InterRegular12,
                                        ,
                                        { color: isFocused ? Colors.primaryColor : '#222', textAlign: 'center', paddingTop: moderateScale(5) },
                                    ]}>
                                    {label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    );
}

export default TabBar;
