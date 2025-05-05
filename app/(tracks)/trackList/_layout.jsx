import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

export default function TrackListLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Stack>
                {/* Individual */}
                <Stack.Screen
                    name="index"
                    options={{
                        animation: 'none',
                        title: 'Tracks',
                    }}
                />
                <Stack.Screen
                    name="[trackDetailId]"
                    options={{
                        title: 'Track Details',
                    }}
                />
            </Stack>
        </>
    );
}
