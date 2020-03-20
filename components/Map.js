import React, {Component} from 'react';

import {View, StyleSheet, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import Geocoder from 'react-native-geocoding';

Geocoder.init("xxxxxxxxxxxxx");

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
        <View>
          <Text style={styles.textField}>My current location:</Text>
          <Text style={styles.textField}> {this.state.latitude} </Text>
          <Text style={styles.textField}> {this.state.longitude} </Text>
          <Text> {this.state.error} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textField: {
    backgroundColor: 'pink',
    alignItems: 'center',
    fontSize: 20,
  },
});

export default Map;
