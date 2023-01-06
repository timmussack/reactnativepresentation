import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

//All elements have to imported from react-native, no <div>, <img>, etc.
import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from "react-native";


const App = () => {
  const [showImage, setShowImage] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  //React Native Hook to help track screen orientation
  const {height, width} = useWindowDimensions();

  //Screen is landscape ? elements left to right otherwise top to bottom
  let flexType = width > height ? "row" : "column";

  //changeColor === true ? make text red otherwise black
  let textColor = changeColor ? "#D30000" : "#212121";

  return (
    //Parent View container
    <View style={[ styles.container, {flexDirection: flexType} ]}>

      {/* Child View container 1 */}
      <View style={{ flex: 1, justifyContent: "center", borderWidth: 2, borderColor: "#212121", borderRadius: 10 }}>
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, color: textColor, padding: 5 }}>
          React Native & Expo Go
        </Text>
      </View>

      {/* Child View container 2 */}
      <View style={{ flex: 1, borderWidth: 2, borderColor: "#212121", borderRadius: 10, justifyContent: "center" }}>
        <Button
          onPress={() => {
            setChangeColor(!changeColor);
            alert("Text color changed!");
          }}
          title="Press Me"
        />
      </View>

      {/* Child View container 3 */}
      <View style={{ flex: 1, borderWidth: 2, borderColor: "#212121", borderRadius: 10, justifyContent: "center" }}>
        <Button
          onPress={() => {
            setShowImage(!showImage);
          }}
          title="Press Me"
          color="#841584"
        />
      </View>

      {/* Child View container 4 */}
      <View style={{ flex: 3, borderWidth: 2, borderColor: "#212121", borderRadius: 10, justifyContent: "center" }}>
        { showImage &&
          <Image
          source={ require('./assets/dog.png') }
          style={{ backgroundColor: "#FFFFFF", width: 150, position: "relative" }}
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
    padding: 20,
    borderWidth: 4,
    borderColor: "#3BB143",
    borderRadius: 7,
  },
});

export default App;
