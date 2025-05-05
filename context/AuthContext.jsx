import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {router} from 'expo-router';
import {Platform} from 'react-native';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    let token;
    if (Platform.OS === 'web') {
        token = localStorage.getItem('token');
    } else {
        token = await AsyncStorage.getItem('token');
    }
    if (token) {
        dispatch({type: 'signin', payload: token});
        router.replace('(tracks)/trackList');
    } else {
        router.replace('/signin');
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({type: 'clear_error_message'});
};

const signup =
    (dispatch) =>
    async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {
                email,
                password,
            });
            if (Platform.OS === 'web') {
                localStorage.setItem('token', response.data.token);
            }
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});

            router.replace('(tracks)/trackList'); // or router.push('/tracklist');
        } catch (err) {
            console.log(response.data);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign up',
            });
        }
    };

const signin =
    (dispatch) =>
    async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {
                email,
                password,
            });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            router.replace('(tracks)/trackList');
        } catch (err) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in',
            });
        }
    };

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    router.replace('/');
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);
