import React from "react";
import { Link, Quote, Text } from "./texts/content";
import { Heading, Title } from "./texts/titles";
import AssetProvider from "./utils/AssetProvider";
import ScrollView from "./utils/ScrollView";
import View from "./utils/View";

import Button from "./inputs/button";
import { KeyboardAvoidingView, LogBox, Platform, StatusBar,SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { brandColors } from "./utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "./inputs/inputs";

let width = Dimensions.get('window').width;

Dimensions.addEventListener("change", (window, screen => {
  width = window.innerWidth;
}));

let leftIcon = (
  <MaterialCommunityIcons name="alien" size={24} color={brandColors["500"]} />
);

export default function App() {
  return (
    <AssetProvider>
      <View style={[styles.container]}>
        <ScrollView style={{ paddingHorizontal:16, alignSelf: "center", width:'100%' }}>
          <Title style={{ marginBottom: 20 }}>
            Stardom UI{" "}
            <Title sup light>
              by Pablo Gómez
            </Title>
          </Title>
          <Text>
            Stardom UI is front-end framework which customizes the base React
            Native For Web components to offer a new set of components easy to
            use. The following sections will demonstrate the base components
            defined by their <Text bold>category</Text>.
          </Text>
          <Text>
            If you would like to discover some solutions which integrate Stardom
            UI, you can visit the main repository on{" "}
            <Link href="https://github.com/pgomezponce/stardom-ui">GitHub</Link>
            .
          </Text>
          <Heading
            h1
            style={{ marginTop: 20 }}
            containerStyle={{ marginBottom: 10 }}
          >
            Text
          </Heading>

          <Text>
            This is is standard text with multiple lines, within the range of 3
            - 5 lines. This is a hard case where you find the maximum amount of
            lines.
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: "1%",
              width:'auto',
              flexWrap:'wrap',
              flexShrink:1,
              alignItems: 'flex-start'
            }}
          >
            <Text style={{width:'33%'}}>
              If you want to{" "}
              <Link href="https://www.google.es">link something</Link>, you
              should make it inline and provide visual details to it.
            </Text>

            <Text style={{width:'33%'}}>
              To use <Text bold>bold</Text> text means to allow a quick reading
              of a text. Provide enough content in bold to make a quick read.
            </Text>


            <Text style={{width:'33%'}}>
              A word in an italic style means it is written in another language,{" "}
              <Text italic>¿de acuerdo?</Text>{" "}
            </Text>

          </View>
          <Text>
            Titles must be 1-liners, with space enough to understand its
            concepts.
          </Text>
          <Title>Title</Title>

          <Text>
            Quotes can be inline inside a standard text (Author, 2020).
          </Text>
          <Text>Quotes can be taken apart also if require space.</Text>

          <Quote author="Kingdom Hearts 2">
            A Scattered dream is like a far-off memory
          </Quote>

          <Heading h1>Buttons</Heading>
          <Text>Buttons must contain all information within the box.</Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Button
              leftIcon={leftIcon}
              secondary
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Sample text
            </Button>
          </View>
          <Text>
            If there are actions, buttons must be stacked vertically with a
            minimal distance to differentiate clearly and suggestions.
          </Text>
          <View style={{ alignItems: "flex-start", marginLeft: 20 }}>
            <Button
              leftIcon={leftIcon}
              secondary
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Sample Text
            </Button>
            <Button
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Hello
            </Button>
          </View>
          <Text>
            There must be a clear way to stop the process always. For instance:
          </Text>
          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <Button
              secondary
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Keep with action
            </Button>
          </View>
          <Text>
            If possible, place also a cancel button at the header if it is
            shown.
          </Text>
          <Text>
            If the button contains lots of text, buttons can be divided like
            this:
          </Text>
          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <Text>
              <Link style={{ alignSelf: "center" }}>
                Extended button, ¿want to click on it?
              </Link>
            </Text>
            <Button
              onPress={() => {
                console.log("JAJA");
              }}
            >
              Keep with action
            </Button>
          </View>

          <Heading h1>
            Input
          </Heading>
          <Text>
            LAlala
          </Text>
          <Input style={{fontSize:72}} errorStyle={{fontSize:16}} error='This is really a loooooooong error message, as a maximum exercisedadada' centerAlign></Input>
        </ScrollView>
      </View>
      <StatusBar/>
    </AssetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf:'stretch',
    paddingBottom: 16,
    alignItems:'flex-start',
  },
});
