import React, { useState, useEffect } from 'react';
import { Platform, Text,Dimensions, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function MyLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
   text = JSON.stringify(location);
    
    var locationData=JSON.parse(text).coords;
    console.log(locationData.latitude)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text >{text}</Text>
      {/* <MapView style={styles.map} 
      initialRegion={{
        latitude:2.22,
        longitude:2
        
      }}/> */}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
