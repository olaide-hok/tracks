import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {useRouter} from 'expo-router';

const NavLink = ({text, routeName}) => {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push(routeName)}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
});

export default NavLink;
