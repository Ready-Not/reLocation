/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Map from './components/Map';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'XXXXXXXXXXXXXX',
      authDomain: 'relocation-1ac3d.firebaseapp.com',
      databaseURL: 'https://relocation-1ac3d.firebaseio.com',
      projectId: 'relocation-1ac3d',
      storageBucket: 'relocation-1ac3d.appspot.com',
      messagingSenderId: '658430192184',
      appId: '1:658430192184:web:c6107a992d238aba7e14cd',
      measurementId: 'G-7HQ5Q3MTH5',
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      // <>
      <SafeAreaView>
        <Map />
      </SafeAreaView>
      // </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
