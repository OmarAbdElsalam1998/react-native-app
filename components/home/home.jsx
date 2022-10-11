import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import { styles } from '../../style';


 function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.header} >Welcome To Home Page</Text>
      </View>
  )
}


export default Home;
