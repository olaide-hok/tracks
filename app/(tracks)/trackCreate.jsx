import '../../_mockLocation.js';
import React, {useContext, useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Map from '../../components/Map.jsx';
import {Context as LocationContext} from '../../context/LocationContext.jsx';
import useLocation from '../../hooks/useLocation.js';
import TrackForm from '../../components/TrackForm.jsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from 'expo-router';

const TrackCreateScreen = ({isFocused}) => {
    const {
        state: {recording},
        addLocation,
    } = useContext(LocationContext);
    const callback = useCallback(
        (location) => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    errorText: {
        color: 'red',
        marginVertical: 8,
    },
});

export default TrackCreateScreen;
