import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

//All elements and native hooks must be imported from "react-native", no <div>, <img>, etc.
import { StyleSheet, Text, View, Button, Image, useWindowDimensions, TextInput, KeyboardAvoidingView } from "react-native";


const App = () => {
  //useState, useRef, useEffect all work like React
  const [showImage, setShowImage] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");

  //This is a React Native hook to help track screen orientation a useColorScheme() hook also exists
  const {height, width} = useWindowDimensions();

  //Decides flexDirection by asking if screen is landscape, renders elements left to right in landscape otherwise top to bottom
  let flexType = width > height ? "row" : "column";

  //Title text color variable
  let textColor = changeColor ? "#D30000" : "#000000";

  //Status bar and background color variables, both change with darkMode state
  let statusBar = darkMode ? "light" : "dark"
  let mode = darkMode ? "#363636" : "#FFFFFF"

  return (
    //Parent element container with 5 child elements, flexDirection is defined inline so that the flexType variable is in scope
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[ styles.container, {flexDirection: flexType, backgroundColor: mode} ]}
    >

      {/* Allows access to phones status bar */}
      <StatusBar style={statusBar} />

      {/* Child View element 1, text element with a press event that changes text color*/}
      <View style={styles.view1}>
        <Text
          style={[ styles.title, {color: textColor}]}
          onPress={() => {
            setChangeColor(!changeColor);
          }}>
          React Native & Expo Go
        </Text>
      </View>

      {/* Child View element 2, button element with press event that alerts and changes colors of background and status bar*/}
      <View style={styles.view2}>
        <Button
          onPress={() => {
            setDarkMode(!darkMode)
            alert("Theme changed!");
          }}
          title="Dark Mode"
        />
      </View>

      {/* Child View element 3, button element with press event that toggles a state*/}
      <View style={styles.view3}>
        <Button
          onPress={() => {
            setShowImage(!showImage);
          }}
          title="Press Me"
          color="#841584"
        />
      </View>

      {/* Child View element 4, image element that is conditionally rendered*/}
      <View style={styles.view4}>
        { showImage &&
          <Image
          source={ require('./assets/dog.png') }
          style={[ styles.dog, {backgroundColor: mode} ]}
        /> }
      </View>

      {/* Child TextInput element, wrapper KeyboardAvoidingView ensures the keyboard does not block the users view */}
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Input text"
      />

    </KeyboardAvoidingView>

    //<Text>Force an error</Text>
  );
};

//StyleSheet is an abstraction similar to CSS stylesheet syntax
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderWidth: 4,
    borderColor: "#3BB143",
    borderRadius: 7,
  },
  view1: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000000",
    borderRadius: 5,
    justifyContent: "center",
    margin: 1,
  },
  view2: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    justifyContent: "center",
    margin: 1,
  },
  view3: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 5,
    justifyContent: "center",
    margin: 1,
  },
  view4: {
    flex: 3,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 5,
    justifyContent: "center",
    margin: 1,
  },
  dog: {
    width: 150,
    position: "relative",
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  input: {
    height: 40,
    margin: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
