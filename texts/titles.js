import React, { Component } from "react";
import {
  Text as RText, View
} from "react-native";
import {brandColors, infoColors, alertColors, dangerColors, successColors} from '../utils/colors';



class Intern_Title extends Component {
    styleValidator(props) {
        let style = { fontFamily: "title", fontSize: '300%', color: brandColors['500']};
        console.log(props);
        if (props.bold) {
          style = { fontFamily: "bold" };
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


export class Title extends Component {
    render() {
        return (
            <View style={{borderBottomWidth:2, borderBottomColor: brandColors['500']}}>
                <Intern_Title>{this.props.children}</Intern_Title>
            </View>
        )
    }
}

export class Heading extends Component{
    constructor(props){
        super(props);

        let style = {
            color: brandColors['500'],

            fontFamily:'heading',
            fontSize:'200%',
            paddingLeft:16
        }

        if (props.h6 !== undefined) {
            style.fontSize = '130%'
        }

        if (props.h5 !== undefined) {
            style.fontSize = '160%'
        }

        if (props.h4 !== undefined) {
            style.fontSize = '190%'
        }

        if (props.h3 !== undefined) {
            style.fontSize = '210%'
        }

        if (props.h2 !== undefined) {
            style.fontSize = '240%'
        }

        if (props.h1 !== undefined) {
            style.fontSize = '270%'
        }

        this.state = {style: style}
    }

    render(){
        console.log(this.state.style);
        return <RText style={[this.state.style, this.props.style]}>{this.props.children}</RText>;
    }
}
