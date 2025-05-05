import {Tabs} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TracksLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Tabs
                screenOptions={{
                    animation: 'none',
                }}>
                <Tabs.Screen
                    name="trackList"
                    options={{
                        title: 'Tracks',
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <FontAwesome
                                size={28}
                                name="th-list"
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="trackCreate"
                    options={{
                        title: 'Add Track',
                        tabBarIcon: ({color}) => (
                            <FontAwesome size={28} name="plus" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        title: 'Account',
                        headerShown: true,
                        tabBarIcon: ({color}) => (
                            <FontAwesome size={28} name="gear" color={color} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
