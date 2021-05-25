import React, { Component } from "react";
import {
  Linking,
  Text as RText,
  TouchableOpacity,
} from "react-native";


export class Text extends Component {
  styleValidator(props) {
    let style = { fontFamily: "content" };

    if (props.bold) {
      style = { fontFamily: "bold" };
    }

    if (props.italic) {
        style.fontStyle = 'italic';
    }

    if (props.sup) {
      style = {
        ...style,
        fontSize: "65%",
        textAlignVertical: "top",
        height: "100%",
        textAlign: "left",
      };
    }

    if (props.sub) {
      style = {
        ...style,
        fontSize: "65%",
        textAlignVertical: "bottom",
        height: "100%",
        textAlign: "left",
      };
    }

    if (props.style !== undefined) {
      for (const [key, value] of Object.entries(props.style)) {
        switch (key) {
          case "children":
            break;
          default:
            style[key] = value;
            break;
        }
      }
    }

    return style;
  }

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { style: this.styleValidator(props) };
  }

  render() {
    return <RText style={this.state.style}>{this.props.children}</RText>;
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);

    let style = {};

    if (props.style !== undefined) {
      style = props.style;
    }

    this.state = { style: { ...style, textDecorationLine: "underline" } };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(this.props.href)}>
        <Text style={this.state.style}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
