
import React, { Component } from "react";
import { Platform, SafeAreaView, StyleSheet, View as OView } from "react-native";

import { propDrill } from "./AssetProvider";
import { brandColors } from "./colors";
import PropTypes from 'prop-types';
import { StatusBar } from "expo-status-bar";


const lightModeStyleGuide = StyleSheet.create({
    container: {
        backgroundColor: brandColors['100']
    }
});

const darkModeStyleGuide = StyleSheet.create({
    container: {
        backgroundColor: brandColors['900']
    }
});

export default class View extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let style = this.props.isDarkMode ? darkModeStyleGuide['container'] : lightModeStyleGuide['container'];
    let children = propDrill(this.props.children, {isDarkMode: this.props.isDarkMode});
    return (
      
        <OView style={[style,this.props.style]}>
        {children}
        </OView>
    );
  }
}

View.propTypes = {
  style: PropTypes.object,
}
