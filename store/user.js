import firebase from 'firebase';
import Config from 'react-native-config';
firebase.initializeApp(Config.FIREBASE_CONFIG);
const auth = firebase.auth();
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
import AsyncStorage from '@react-native-community/async-storage';
// auth.onAuthStateChanged(user => {
//   //this will tell us if a user is logged in
// });

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const initialState = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user});
const removeUser = () => ({type: REMOVE_USER});

/**
 * THUNK CREATORS
 */
export const gotUser = () => async dispatch => {
  try {
    const user = await AsyncStorage.getItem('user');
    dispatch(getUser(user));
  } catch (err) {
    console.error(err);
  }
};

export const login = (email, password) => async dispatch => {
  try {
    const {user} = await auth.signInWithEmailAndPasswordd(email, password);
    if (user) {
      await AsyncStorage.setItem('user', user);
      gotUser();
      //figure out way to get them back to welcome page
    }
  } catch (err) {
    console.error(err);
  }
};

export const signUp = signupDetails => async dispatch => {
  try {
    const {first, last, email, password} = signupDetails;
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    user.First = first;
    user.Last = last;
    await AsyncStorage.setItem('user', user);
    gotUser();
    //figure out way to get them back to welcome page
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async dispatch => {
  try {
    await auth.signout();
    await AsyncStorage.removeUser('user');
    dispatch(removeUser());
    // history.push('/login') figure out Navigation equivalent to this
  } catch (err) {
    console.error(err);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
}
