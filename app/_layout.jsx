import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {Provider as AuthProvider} from '../context/AuthContext';
import {Provider as TrackProvider} from '../context/TrackContext';
import {Provider as LocationProvider} from '../context/LocationContext';

export default function RootLayout() {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <StatusBar style="auto" />
                    <Stack>
                        {/* Groups */}
                        <Stack.Screen
                            name="(tracks)"
                            options={{headerShown: false}}
                        />
                        {/* Individual */}

                        <Stack.Screen
                            name="index"
                            options={{
                                animation: 'none',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="signin"
                            options={{
                                animation: 'none',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="signup"
                            options={{
                                animation: 'none',
                                headerShown: false,
                            }}
                        />
                    </Stack>
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    );
}
