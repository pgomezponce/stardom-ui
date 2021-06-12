import React, { Component } from "react";
import {
  View,
  TextInput as RInput,
  TextPropTypes,
  StyleSheet,
} from "react-native";
import { brandColors } from "../utils/colors";
import { Text } from "../texts/content";
import PropTypes from "prop-types";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.onChangeText =
      this.props.onChangeText === undefined
        ? this.defaultOnChangeText
        : this.props.onChangeText;
  }

  defaultOnChangeText = (text) => {
    this.setState({
      value: text,
    });
  };

  render() {
    let containerStyle = {
      borderBottomColor: this.props.isDarkMode
        ? brandColors["100"]
        : brandColors["900"],
      borderBottomWidth: 2,
      borderBottomStyle: "line",
      flex: 1,
    };

    if (this.props.centerAlign) {
      containerStyle.paddingLeft = 4;
      containerStyle.paddingRight = 4;
    } else if (this.props.leftAlign) {
      containerStyle.paddingRight = 8;
    } else {
      containerStyle.paddingLeft = 8;
    }
    let inputStyle = {
      backgroundColor: this.props.isDarkMode
        ? brandColors["100"]
        : brandColors["900"],
      color: this.props.isDarkMode ? "#000" : "#fff",
    };

    let error;
    let errorStyle = StyleSheet.create({
      text: {
        backgroundColor: this.props.isDarkMode
          ? brandColors["300"]
          : brandColors["700"],
          color: this.props.isDarkMode ? '#000' : '#fff'
      },
    });
    if (this.props.error !== undefined) {
      error = (
        <Text style={[errorStyle.text, this.props.errorStyle]}>
          {this.props.error}
        </Text>
      );
    }

    return (
      <View>
        <View style={[containerStyle, this.props.containerStyle]}>
          <RInput
            keyboardType={this.props.keyboardType}
            keyboardAppearance={this.props.keyboardAppearance}
            placeholder={this.props.placeholder}
            style={[inputStyle, this.props.style]}
            value={this.props.value}
            onChangeText={() => this.onChangeText()}
          ></RInput>
        </View>
        <View>{error}</View>
      </View>
    );
  }

  static propTypes = {
    centerAlign: PropTypes.boolean,
    rightAlign: PropTypes.boolean,
    leftAlign: PropTypes.boolean,
  };
}
