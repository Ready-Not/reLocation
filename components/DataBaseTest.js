import {firestore} from '../src/config';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DataBaseTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    firestore
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let userFirst = doc.dm.proto.fields.First.stringValue;
          console.log(userFirst, typeof userFirst);
          this.setState({users: [...this.state.users, userFirst]});
          console.log(this.state.users)
        });
      });
  }

  render() {
    return (
      <View>
        {this.state.users.map(user => {
          return <Text>{user}</Text>
        })}
      </View>
    );
  }
}
