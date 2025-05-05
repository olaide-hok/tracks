import React, {useCallback, useContext} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
import {Context as TrackContext} from '../../../context/TrackContext';
import {useFocusEffect, useRouter} from 'expo-router';

const TrackListScreen = () => {
    const {state, fetchTracks} = useContext(TrackContext);
    const router = useRouter();

    useFocusEffect(
        useCallback(() => {
            fetchTracks();
        }, [])
    );

    return (
        <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.listContainer}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => router.push(`/trackList/${item._id}`)}
                    style={styles.listItem}>
                    <View style={styles.itemContent}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.chevron}>›</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 16,
    },
    listItem: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    chevron: {
        fontSize: 24,
        color: '#999',
    },
});

export default TrackListScreen;
