import { takeEvery } from 'redux-saga/effects';
import {
    ADD_USER,
    LOGOUT_USER,
    LOGIN_USER,
} from '../constants';

function* addUser({ email, password }) {
    const firebase = window._FIREBASE_;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    });
}

function* loginUser({ email, password }) {
    
    console.log('am going to log in this guy', email, password);
    
    const firebase = window._FIREBASE_;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    });
}

function* logoutUser() {
    const firebase = window._FIREBASE_;
    firebase.auth().signOut().catch(error => { console.log('signout Error', error) });
}

export default function* sagaRoot() {
    yield takeEvery(ADD_USER, addUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
    yield takeEvery(LOGIN_USER, loginUser);
}