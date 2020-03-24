/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import Config from 'react-native-config';
import Welcome from './components/Welcome';
import Map from './components/Map';
import {gotUser} from './store/user';
import 'react-native-gesture-handler';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

class App extends Component {
  constructor({navigation}) {
    super({navigation});
  }
  componentDidMount() {
    this.props.gotUser();
  }

  render() {
    const user = this.props.user;
    if (!user) {
      return (
        <NavigationNativeContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
            headerMode="float">
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationNativeContainer>
      );
    } else {
      return (
        <NavigationNativeContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
            headerMode="float">
            <Stack.Screen name="Map" component={Map} />
          </Stack.Navigator>
        </NavigationNativeContainer>
      );
    }
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

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    gotUser: () => dispatch(gotUser()),
  };
};

export default connect(
  mapState,
  mapDispatch,
)(App);
