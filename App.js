import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Link, Text } from "./texts/content";
import {Heading, Title} from "./texts/titles";
import AssetProvider from "./utils/AssetProvider";

export default function App() {
  return (
    <AssetProvider>
      <View style={styles.container}>
        <Title>
          Hello <Text sup>world</Text> !
        </Title>
        <Heading>Demo header</Heading>
        <Text italic style={{ fontFamily: "bold" }}>
          Open up App.js to start working on your app!
          <Text sup bold>
            Demo
          </Text>
          <Link href="https://www.google.es">Hello</Link>
        </Text>

        <StatusBar style="auto" />
      </View>
    </AssetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
