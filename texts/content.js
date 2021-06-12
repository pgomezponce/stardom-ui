import React, { Component } from "react";
import {
  Linking,
  StyleSheet,
  Text as RText,
  TouchableOpacity,
  View,
} from "react-native";
import { propDrill } from "../utils/AssetProvider";
import { brandColors, infoColors } from "../utils/colors";

const lightModeStyle = {
  text: {
    color: "#000000",
  },
  quoteText: {
    color: brandColors['600']
  }
};

const darkModeStyle = {
  text: {
    color: "#ffffff",
  },
  quoteText: {
    color: brandColors['400']
  }
};

export class Text extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    let styleMode = {};
    if (this.props.bold) {
      styleMode = { fontFamily: "bold", color: brandColors["500"], flex:1, justifyContent:'flex-start', flexDirection:'row', flexWrap:'wrap' };
    }

    if (this.props.italic) {
      styleMode.fontStyle = "italic";
      styleMode.color = brandColors["500"];
    }

    if (this.props.sup) {
      styleMode = {
        ...styleMode,
        fontSize: 12,
        textAlignVertical: "top",
        height: "100%",
        textAlign: "left",
      };
    }

    if (this.props.sub) {
      styleMode = {
        ...styleMode,
        fontSize: 12,
        textAlignVertical: "bottom",
        height: "100%",
        textAlign: "left",
      };
    }

    if (this.props.isDarkMode === true) {
      styleMode = {...darkModeStyle.text,...styleMode};
    } else {
      styleMode = {...lightModeStyle.text,...styleMode};
    }
    let children = propDrill(this.props.children, {
      isDarkMode: this.props.isDarkMode,
    });

    return (
      <RText style={[styleMode, this.props.style]}>
        {children}
      </RText>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);

    let style = {};

    if (props.style !== undefined) {
      style = props.style;
    }

    this.state = {
      style: {
        ...style,
        textDecorationLine: "underline",
        color: infoColors["500"],
      },
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(this.props.href)}
        style={{ margin: 0, padding:0, justifyContent:'flex-start', alignSelf:'stretch'}}
      >
        <Text style={this.state.style}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

/* export class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children  = propDrill(this.props.children, {isDarkMode: this.props.isDarkMode});
    let styleMode = this.props.isDarkMode ? darkModeStyle.text : lightModeStyle.text;

    return (
      <View style={{flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end'}}>
        <Text bold style={[{color: brandColors['500'], fontSize:'130%',fontFamily:'content'}]}>{children}</Text>
        <Text bold italic style={[ {color: brandColors['600'], fontSize:'115%',fontFamily:'content'}]}>{this.props.author}</Text>
      </View>
    );
  }
} */

export class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styleMode = this.props.isDarkMode
      ? darkModeStyle.quoteText
      : lightModeStyle.quoteText;
    let children = propDrill(this.props.children, {
      isDarkMode: this.props.isDarkMode,
    });

    let secondStyle = StyleSheet.create({
      sec: { fontSize: 24, fontFamily: "title",alignSelf:'center' },
    });
    return (
      <View
        style={[
          {
            alignSelf:'stretch',
            paddingHorizontal: "15%",
            justifyContent: "space-around",
            alignItems: "flex-end",
          },
          this.props.containerStyle,
        ]}
      >
        <RText style={[styleMode, secondStyle.sec, this.props.style]}>
          "{children}"
        </RText>
        <RText style={[styleMode, this.props.authorStyle]}>
          {this.props.author}
        </RText>
      </View>
    );
  }
}
