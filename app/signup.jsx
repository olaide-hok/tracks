import React, {useCallback, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {useFocusEffect} from 'expo-router';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage();
        }, [])
    );

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="/"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SignupScreen;
