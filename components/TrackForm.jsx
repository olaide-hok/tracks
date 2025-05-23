import React, {useContext} from 'react';
import {TextInput, Button} from 'react-native';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <TextInput
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter name"
                />
            </Spacer>
            <Spacer>
                {recording ? (
                    <Button title="Stop" onPress={stopRecording} />
                ) : (
                    <Button title="Start Recording" onPress={startRecording} />
                )}
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (
                    <Button title="Save Recording" onPress={saveTrack} />
                ) : null}
            </Spacer>
        </>
    );
};

export default TrackForm;
