import React, { Component } from "react";
import {
  Text as RText, View
} from "react-native";
import {brandColors, infoColors, alertColors, dangerColors, successColors} from '../utils/colors';



class Intern_Title extends Component {
   
      constructor(props) {
        super(props);
      }
    
      render() {
        let style = { fontFamily: "title", fontSize: 48, color: brandColors['500'], alignSelf: 'center', textAlignVertical:'bottom'};
        
        if (this.props.args.light) {
          style = { ...style, fontFamily: "lightTitle" };
        }

        if (this.props.args.sup) {
          style = {
            ...style,
            fontSize: 12,
            lineHeight: 40,
            textAlignVertical: "top",
            height: "100%",
            textAlign: "left",
          };
        }
    
        if (this.props.args.sub) {
          style = {
            ...style,
            fontSize: 12,
            textAlignVertical: "bottom",
            height: "100%",
            textAlign: "left",
          };
        }    
        return <RText style={[style, this.props.style]}>{this.props.children}</RText>;
      }
}


export class Title extends Component {
  constructor(props){
    super(props);
  }

    render() {
      let args = {}
      args.sub = this.props.sub ? true : false;
      args.sup = this.props.sup ? true : false;
      args.light = this.props.light ? true : false;

  
        return (
                <Intern_Title style={this.props.style} args={args}>{this.props.children}</Intern_Title>
        )
    }
}

export class Heading extends Component{
    constructor(props){
        super(props);

        let style = {
            color: brandColors['500'],

            fontFamily:'heading',
            fontSize:36,
            paddingLeft:16
        }

        if (props.h6 !== undefined) {
            style.fontSize = 18
        }

        if (props.h5 !== undefined) {
            style.fontSize = 22
        }

        if (props.h4 !== undefined) {
            style.fontSize = 24
        }

        if (props.h3 !== undefined) {
            style.fontSize = 28
        }

        if (props.h2 !== undefined) {
            style.fontSize = 32
        }

        if (props.h1 !== undefined) {
            style.fontSize = 36
        }

        this.state = {style: style}
    }

    render(){
        return <View style={[{borderBottomWidth:2, borderBottomColor: brandColors['500']}, this.props.containerStyle]}>
        <RText style={[this.state.style, this.props.style]}>{this.props.children}</RText>
        </View>;
    }
}
