// App.js (Exercise 4 – Travel Destinations List)

import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    SectionList,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';

// ---- DATA ----
const TRAVEL_SECTIONS = [
    {
        category: 'City',
        icon: '🏙️',
        bgColor: '#BBDEFB',
        data: [
            {
                id: 'tokyo',
                name: 'Tokyo',
                description: 'Neon lights, anime & sushi.',
                imageUrl:
                    'https://thumbs.dreamstime.com/b/japanese-street-night-neon-lights-sushi-restaurant-304851293.jpg',
            },
            {
                id: 'singapore',
                name: 'Singapore',
                description: 'Gardens by the Bay & Marina Bay Sands.',
                imageUrl:
                    'https://i.pinimg.com/originals/4d/2c/2e/4d2c2eb33c2c68bd45b8f643f4f4224c.jpg',
            },
        ],
    },
    {
        category: 'Beach',
        icon: '🏝️',
        bgColor: '#B2EBF2',
        data: [
            {
                id: 'bali',
                name: 'Bali',
                description: 'Beaches, surfing & temples.',
                imageUrl:
                    'https://tse4.mm.bing.net/th/id/OIP.kz5XURqMjvc31LUsOkDT9AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
            {
                id: 'phuket',
                name: 'Phuket',
                description: 'Tropical island in Thailand.',
                imageUrl:
                    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
            },
        ],
    },
];

export default function App() {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Image source={{ uri: item.imageUrl }} style={styles.rowImage} />
            <View style={styles.rowTextContainer}>
                <Text style={styles.rowTitle}>{item.name}</Text>
                <Text style={styles.rowDescription}>{item.description}</Text>
            </View>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View
            style={[
                styles.sectionHeader,
                { backgroundColor: section.bgColor || '#EEE' },
            ]}
        >
            <Text style={styles.sectionHeaderText}>
                {section.icon} {section.category.toUpperCase()}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.appTitle}>Travel Destinations</Text>
            <SectionList
                sections={TRAVEL_SECTIONS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                SectionSeparatorComponent={() => (
                    <View style={styles.sectionSeparator} />
                )}
            />
        </SafeAreaView>
    );
}

// ---- STYLES ----
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    appTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
    listContent: {
        paddingHorizontal: 10,
        paddingBottom: 16,
    },
    sectionHeader: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    sectionHeaderText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
        alignItems: 'center',
    },
    rowImage: {
        width: 90,
        height: 90,
        borderRadius: 6,
        marginRight: 10,
    },
    rowTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    rowDescription: {
        fontSize: 13,
        color: '#555',
    },
    itemSeparator: {
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    sectionSeparator: {
        height: 8,
    },
});

