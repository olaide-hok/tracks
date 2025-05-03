import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{headerText}</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />

            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <View style={styles.buttonWrapper}>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({email, password})}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        height: 40,
        borderColor: '#999',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    errorMessage: {
        fontSize: 14,
        color: 'red',
        marginTop: 10,
    },
    buttonWrapper: {
        marginTop: 30,
    },
});

export default AuthForm;
