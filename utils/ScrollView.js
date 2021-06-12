import React, { Component } from 'react'
import { KeyboardAwareScrollView as RSV } from 'react-native-keyboard-aware-scroll-view'
import { propDrill } from './AssetProvider';

export default class ScrollView extends Component {

    render() {
        let children = propDrill(this.props.children, {
            isDarkMode: this.props.isDarkMode,
          });      
        return (
            <RSV style={this.props.style}>
            {children}            
            </RSV>
        )
    }
}
