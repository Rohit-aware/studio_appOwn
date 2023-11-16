import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import commonStyles from '../../styles/common-styles'
import { MornignSessions, category } from '../../local-data/dummyData'
import { moderateScale } from 'react-native-size-matters'
import fontStyles from '../../styles/font-styles'
import Colors from '../../constants/colors'
import SessionCard from '../../components/Home/SessionCard'

const CategoryList = ({ route }: any) => {
    const { title: initialCategory } = route.params || {};
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedTitle, setSelectedTitle] = useState('');
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        if (initialCategory && flatListRef.current) {
            const index = category.findIndex(item => item.title === initialCategory);
            index !== -1 && flatListRef.current.scrollToIndex({ index, animated: true, viewPosition: 0.5 });
        }
    }, [initialCategory]);

    const handleCategoryPress = (item: any, index: number) => {
        setSelectedCategory(item.title);
        setSelectedTitle('');
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0,
            viewOffset: 0,
        });
    };

    const renderTopList = ({ item, index }: any) => (
        <TouchableOpacity
            onPress={() => handleCategoryPress(item, index)}
            style={[commonStyles.flexRowJCAC, styles.titleCont, { backgroundColor: selectedCategory === item.title ? Colors.lightPrimaryColor : Colors.lightWhite }]}
        >
            <Text style={[fontStyles.InterRegular12, { color: selectedCategory === item.title ? Colors.white : Colors.black }]}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );


    const getItemLayout = (_: any, index: number) => ({
        length: moderateScale(50),
        offset: moderateScale(50) * index,
        index,
    });

    return (
        <View style={[commonStyles.flexOne, { backgroundColor: '#888B0008' }]}>
            <View>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={category}
                    contentContainerStyle={{ columnGap: moderateScale(7, 0.3), padding: moderateScale(10, 0.4) }}
                    renderItem={renderTopList}
                    getItemLayout={getItemLayout}
                />
            </View>
            <View style={{ marginBottom: moderateScale(30) }}>
                <FlatList
                    data={MornignSessions.filter(session => (selectedCategory && session.title === selectedCategory) && (!selectedTitle || session.title === selectedTitle))}
                    renderItem={({ item, index }: any) => {
                        if (!selectedTitle || item.title === selectedTitle) {
                            return <SessionCard MornignSessions={[item]} fromCategoryList={true} />;
                        }
                        return null;
                    }}
                    keyExtractor={(_, index) => index.toString()}
                />

            </View>
        </View>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    titleCont: {
        padding: moderateScale(12, 0.4),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightGrey,
        borderRadius: moderateScale(5),
        backgroundColor: Colors.lightWhite
    }
});
