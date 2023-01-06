import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

//All elements and native hooks have to imported from "react-native", no <div>, <img>, <p>, <li> etc.
import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from "react-native";


const App = () => {
  //useState, useRef, useEffect all work like React
  const [showImage, setShowImage] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  //React Native hook to help track screen orientation a useColorScheme() hook also exists
  const {height, width} = useWindowDimensions();

  //Decides flexDirection by asking if screen is landscape ? render elements left to right otherwise top to bottom
  let flexType = width > height ? "row" : "column";

  //changeColor === true ? make text red otherwise black
  let textColor = changeColor ? "#D30000" : "#212121";

  return (
    //Parent View element container with 4 child elements, flexDirection is defined inline so that the flexType variable is in scope
    <View style={[ styles.container, {flexDirection: flexType} ]}>

      {/* Child View element 1 */}
      <View style={styles.view1}>
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, color: textColor, padding: 5 }}>
          React Native & Expo Go
        </Text>
      </View>

      {/* Child View element 2 */}
      <View style={styles.view2}>
        <Button
          onPress={() => {
            setChangeColor(!changeColor);
            alert("Text color changed!");
          }}
          title="Press Me"
        />
      </View>

      {/* Child View element 3 */}
      <View style={styles.view3}>
        <Button
          onPress={() => {
            setShowImage(!showImage);
          }}
          title="Press Me"
          color="#841584"
        />
      </View>

      {/* Child View element 4 */}
      <View style={styles.view4}>
        { showImage &&
          <Image
          source={ require('./assets/dog.png') }
          style={styles.dog}
        /> }
      </View>

    </View>

    // Create an error
    //<Text></Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderWidth: 5,
    borderColor: "#3BB143",
    borderRadius: 7,
  },
  view1: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#212121",
    borderRadius: 5,
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#212121",
    borderRadius: 5,
    justifyContent: "center",
  },
  view3: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#212121",
    borderRadius: 5,
    justifyContent: "center",
  },
  view4: {
    flex: 3,
    borderWidth: 2,
    borderColor: "#212121",
    borderRadius: 5,
    justifyContent: "center",
  },
  dog: {
    backgroundColor: "#FFFFFF",
    width: 150,
    position: "relative",
  },
});

export default App;
