import firebase from 'firebase';
import 'firebase/firestore';

import Config from 'react-native-config';

const FIREBASE_CONFIG = {
  apiKey: Config.FIREBASE_CONFIG_apiKey,
  authDomain: Config.FIREBASE_CONFIG_authDomain,
  databaseURL: Config.FIREBASE_CONFIG_databaseURL,
  projectId: Config.FIREBASE_CONFIG_projectId,
  storageBucket: Config.FIREBASE_CONFIG_storageBucket,
  messagingSenderId: Config.FIREBASE_CONFIG_messagingSenderId,
  appId: Config.FIREBASE_CONFIG_appId,
  measurementId: Config.FIREBASE_CONFIG_measurementId,
};

firebase.initializeApp(FIREBASE_CONFIG);

export const firestore = firebase.firestore();
export default firebase;
