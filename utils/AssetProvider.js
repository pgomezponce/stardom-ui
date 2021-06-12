import React, { Component } from "react";
import * as Font from "expo-font";
import { Appearance, SafeAreaView, StatusBar, Text, View } from "react-native";
import { brandColors } from "./colors";

export const contentFonts = {
  content: require("../assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
  bold: require("../assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
  title: require("../assets/fonts/Montserrat/Montserrat-Black.ttf"),
  heading: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  lightTitle: require("../assets/fonts/Montserrat/Montserrat-Light.ttf"),
};

export function propDrill(children, prop) {
  const childrenWithProps = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...prop });
    }
    return child;
  });

  return childrenWithProps;
}

export default class AssetProvider extends Component {
  setDarkModeState = function (obj) {
    console.log(obj);
    return obj === "dark" ? true : false;
  };
  onModeChange = function (obj) {
    this.setState({ isDarkMode: this.setDarkModeState(obj) });
  };

  constructor(props) {
    super(props);

    Appearance.addChangeListener((obj) => {
      this.onModeChange(obj.colorScheme);
    });
    let tmp = this.setDarkModeState(Appearance.getColorScheme());
    this.state = {
      fontsLoaded: false,
      isDarkMode: tmp,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(contentFonts);
    this.setState({ fontsLoaded: true });
    this.setState({ ...this.state, fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    let children = propDrill(this.props.children, {
      isDarkMode: this.state.isDarkMode,
    });
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView
        forceInset={{bottom:'never'}}
          style={{
            flex: 1,
            backgroundColor: this.state.isDarkMode
              ? brandColors["900"]
              : brandColors["100"],
          }}
        >
          {children}
        </SafeAreaView>
      );
    } else {
      return <Text>Loading</Text>;
    }
  }
}
