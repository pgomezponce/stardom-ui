import React, { Component } from "react";
import * as Font from "expo-font";

export const contentFonts = {
  content: require("../assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
  bold: require("../assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
  title: require('../assets/fonts/Montserrat/Montserrat-Black.ttf'),
  heading: require('../assets/fonts/Montserrat/Montserrat-Bold.ttf')

};

export default class AssetProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(contentFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return this.props.children;
  }
}
