import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function WebBrowserApp() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.dev');
    setResult(result);
  };
  return (
    <View style={styles.container}>
       <TouchableOpacity style={{alignItems:'center',padding:20,width:200 ,backgroundColor:'#4760b3'}} onPress={_handlePressButtonAsync}>
          webBrowser
        </TouchableOpacity>
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});