import React, { Component } from "react";
import { Button } from "react-native";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignup = this.onSignup.bind(this);
  }

  onSignup() {}

  render() {
    return (
      <View>
        <TextInput
          placeHolder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeHolder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeHolder="password"
          secureEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button title="Sign Up" onPress={() => this.onSignup()} />
      </View>
    );
  }
}
