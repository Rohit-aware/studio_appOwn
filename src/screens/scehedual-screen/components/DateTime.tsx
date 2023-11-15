import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const DateTimeList = () => {
    const [focusedDate, setFocusedDate] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const generateDates = () => {
            const currentDate = new Date();
            const days = Array.from({ length: 7 }, (_, index) => {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() + index);
                return {
                    day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                    date: date.getDate(),
                };
            });
            setData(days);
        };

        generateDates();
    }, []);

    const handlePress = (item: any) => {
        setFocusedDate(item.date);
    };

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                style={[
                    styles.dateContainer,
                    focusedDate === item.date && styles.focusedDateContainer,
                ]}
                onPress={() => handlePress(item)}
            >
                <Text style={[styles.dateText, focusedDate === item.date && styles.focusedText]}>
                    {/* <Text style={[styles.dateText, focusedDate === item.date && styles.focusedText]}> */}
                    {item.day}
                </Text>
                {item.date !== undefined && (
                    <Text style={[styles.dateText, focusedDate === item.date && styles.focusedText]}>
                        {item.date}
                    </Text>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => (item.date !== undefined ? item.date.toString() : null)}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: 'black',
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    focusedDateContainer: {
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    dateText: {
        textAlign: 'center',
        color: 'black',
    },
    focusedText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default DateTimeList;