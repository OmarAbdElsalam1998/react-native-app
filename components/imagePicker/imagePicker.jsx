import React, { useState, useEffect } from 'react';
import { Button,Text,Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ImagePickerE() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{alignItems:'center',padding:20,width:200 ,backgroundColor:'#4760b3'}} onPress={pickImage}>
        <Ionicons name="location" size={22} color={'#FFF'} />
        <Text style={{color:"#FFF"}}>Pick An Image</Text>
        </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
    </View>
  );
}
