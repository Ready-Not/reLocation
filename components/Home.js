import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../store/user';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import Map from './Map';

const Home = () => {
  return (
    <>
      <Map />
      <View nativeID="logout-section">
        <Image source={'../Public/Power.png'} />
        <Text onPress={this.props.logout}>Logout</Text>
      </View>
    </>
  );
};
const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapState,
  mapDispatch,
)(Home);
