import {Tabs} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TracksLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Tabs
                screenOptions={{
                    animation: 'none',
                    headerShown: false,
                }}>
                <Tabs.Screen
                    name="trackList"
                    options={{
                        title: 'Tracks',
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <MaterialIcons
                                size={28}
                                name="house"
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="trackCreate"
                    options={{
                        headerShown: false,
                        title: 'Track Create',
                        tabBarIcon: ({color}) => (
                            <MaterialIcons
                                size={28}
                                name="house"
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        headerShown: false,
                        title: 'Account',
                        tabBarIcon: ({color}) => (
                            <MaterialIcons
                                size={28}
                                name="house"
                                color={color}
                            />
                        ),
                    }}
                />
                {/* <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons
                            size={28}
                            name="house.fill"
                            color={color}
                        />
                    ),
                }}
            /> */}
            </Tabs>
        </>
    );
}
