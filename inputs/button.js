import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { brandColors } from "../utils/colors";

export default class Button extends Component {
  globalTextStyle = {};

  constructor(props) {
    super(props);

    if (props.secondary === undefined) {
      this.state = {
        style: {
          container: {
            backgroundColor: brandColors["500"],
            borderRadius: 30,
            paddingHorizontal: 24,
            paddingVertical: 12,
            alignItems:'center',
            alignSelf:'flex-start'
          },
          text: { fontFamily: "bold" },
        },
      };
    } else {
      this.state = {
        style: {
          container: {
              flexDirection:'row',
              alignItems:'center',
            borderColor: brandColors["500"],
            borderWidth: 2,
            borderRadius: 30,
            paddingHorizontal: 24,
            paddingVertical: 12,
            alignSelf:'flex-start'
          },
          text: { fontFamily: "bold" },
        },
      };
    }
  }
  pressedInFunction(pressedCustomContainerStyle) {
    if (this.props.secondary === undefined) {
      this.setState({
        style: {
          ...this.state.style,
          container: {
            ...this.state.style.container,
            backgroundColor: this.props.isDarkMode
              ? brandColors["300"]
              : brandColors["700"],
          },
        },
      });
    } else {
      this.setState({
        style: {
          ...this.state.style,
          container: {
            ...this.state.style.container,
            borderColor: this.props.isDarkMode
              ? brandColors["300"]
              : brandColors["700"],
              backgroundColor: this.props.isDarkMode
              ? brandColors["200"]
              : brandColors["800"],
          },
        },
      });
    }
  }
  pressedOutFunction(containerCustomStyle) {
    if (this.props.secondary === undefined) {
        this.setState({
            style: {
              ...this.state.style,
              container: {
                ...this.state.style.container,
                backgroundColor: brandColors["500"],
              },
            },
          });
      } else {
        this.setState({
          style: {
            ...this.state.style,
            container: {
              ...this.state.style.container,
              borderColor: brandColors['500'],
              backgroundColor: 'transparent'
            },
          },
        });
      }


  }
  render() {
    let containerStyle = {
      ...this.state.style.container,
      ...this.props.containerStyle,
    };

    let style = {
      ...this.state.style.text,
      color: this.props.isDarkMode ? "#fff" : "#000",
      ...this.props.style,
    };

    let callback;
    if (this.props.onPress === undefined) {
      callback = () => {
        console.log("add onPress function!");
      };
    } else {
      callback = this.props.onPress;
    }

    let leftIcon;
    if (this.props.leftIcon !== undefined) {
        leftIcon = this.props.leftIcon;
    } else {
        
    }

    return (
        <View style={{flex:1, alignItems:'center'}}>
      <Pressable
        onPressOut={() => this.pressedOutFunction()}
        onPressIn={() => this.pressedInFunction()}
        onPress={() => callback()}
        style={containerStyle}
      >
        {leftIcon}
        <Text style={style}> {this.props.children} </Text>
      </Pressable>
      </View>
    );
  }
}
