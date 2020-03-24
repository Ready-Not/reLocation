import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {signUp, login} from '../store/user';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  saveData = async () => {
    const {first, last, email, password} = this.state;
    const signupDetails = {
      first,
      last,
      email,
      password,
    };
    if (this.props.type !== 'Login') {
      this.props.signUp(signupDetails);
      Keyboard.dismiss();
      // eslint-disable-next-line no-alert
      alert(`Thank you for signing up, ${first}`);
      // this.textInput.clear()
    } else if (this.props.type === 'Login') {
      this.props.login(email, password);
      this.textInput.clear();
      if (!user) {
        // eslint-disable-next-line no-alert
        alert('Email or password does not exist!');
      }
    }
  };

  render() {
    if (this.props.type !== 'Login') {
      return (
        <View>
          <TextInput
            onChangeText={first => this.setState({first})}
            placeholder="First Name"
            onSubmitEditing={() => this.last.focus()}
          />
          <TextInput
            onChangeText={last => this.setState({last})}
            placeholder="Last Name"
            onSubmitEditing={() => this.email.focus()}
          />
          <TextInput
            onChangeText={email => this.setState({email})}
            placeholder="Email"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />

          <TextInput
            onChangeText={password => this.setState({password})}
            placeholder="Password"
            secureTextEntry={true}
            ref={input => (this.password = input)}
          />

          <TouchableOpacity>
            <Text onPress={this.saveData}>{this.props.type}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TextInput
            onChangeText={email => this.setState({email})}
            placeholder="Email"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            onChangeText={password => this.setState({password})}
            placeholder="Password"
            secureTextEntry={true}
            ref={input => (this.password = input)}
          />
          <TouchableOpacity>
            <Text onPress={this.saveData}>{this.props.type}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    signUp: signupDetails => dispatch(signUp(signupDetails)),
  };
};

export default connect(
  mapState,
  mapDispatch,
)(Form);
