import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common-styles';
import fontStyles from '../../styles/font-styles';
import Colors from '../../constants/colors';


interface headerTitle {
    categoryWord: string;
    bodyText: string | null;
}

const HeaderTitle: React.FC<headerTitle> = ({ categoryWord, bodyText }) => {
    const [firstWord, secondWord] = categoryWord && categoryWord.split(' ');
    const isMorningFirst: boolean = firstWord.toLowerCase() === 'morning';
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={commonStyles.flexRow}>
                <Text style={[fontStyles.InterBold20, { color: isMorningFirst ? Colors.lightPrimaryColor : undefined }]}>
                    {firstWord}{' '}
                </Text>
                <Text style={[fontStyles.InterBold20, { color: isMorningFirst ? undefined : Colors.lightPrimaryColor }]}>
                    {secondWord}
                </Text>
            </View>
            <Text style={[fontStyles.InterLight14,]}>
                {bodyText && bodyText}
            </Text>
        </View>
    );
}

export default HeaderTitle

const styles = StyleSheet.create({})