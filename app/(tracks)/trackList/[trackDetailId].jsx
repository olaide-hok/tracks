import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context as TrackContext} from '../../../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';
import {useLocalSearchParams} from 'expo-router';

const TrackDetailScreen = () => {
    const {state} = useContext(TrackContext);

    const {trackDetailId: _id} = useLocalSearchParams();

    const track = state.find((t) => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style={{fontSize: 48}}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords,
                }}
                style={styles.map}>
                <Polyline
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default TrackDetailScreen;
