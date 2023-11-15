import { View, Text } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';


type spaceProps = {
    space: number
}


const TakeSpace = (props: spaceProps) => {
    const { space = 20 } = props;
    return <View style={{ padding: moderateScale(space) }} />;
};

export default TakeSpace;
