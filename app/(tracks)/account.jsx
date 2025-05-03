import React, {useContext} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import Spacer from '../../components/Spacer';
import {Context as AuthContext} from '../../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <FontAwesome name="gear" size={20} />
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;
