import React, {useCallback, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {useFocusEffect} from 'expo-router';

export default function Signin() {
    const {state, signin, clearErrorMessage} = useContext(Context);

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage();
        }, [])
    );

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Dont have an account? Sign up instead"
                routeName="/signup"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});
