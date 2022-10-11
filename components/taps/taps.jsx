
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from '../home/home';
import MyLocation from '../location/location';
import MyCamera from '../camera/camera';
import ImagePickerE from '../imagePicker/imagePicker';
import WebBrowserApp from '../webbrowser/webBrowser';

//Screen names
const homeName = "Home";
const cameraName = "MyCamera";
const locationName = "MyLocation";
const imagePikerName = "ImagePicker";
const WebBrowserName="web Browser";
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
        
      <Tab.Navigator
        initialRouteName={homeName}
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === cameraName) {
              iconName = focused ? 'videocam' : 'videocam-outline';

            } else if (rn === locationName) {
              iconName = focused ? 'location' : 'location-outline';
            }
            else if (rn === imagePikerName) {
                iconName = focused ? 'image' : 'image-outline';
              }
              else if (rn === WebBrowserName) {
                iconName = focused ? 'globe' : 'globe-outline';
              }
            // You can return any component that you like here!
            return <Ionicons style={{display:'block '}} name={iconName} size={size} color={color} />;
          },
        })}
      >

        <Tab.Screen options={{backgroundColor:'red',color:'red'}} name={homeName} component={Home} />
        <Tab.Screen name={cameraName} component={MyCamera} />
        <Tab.Screen name={locationName} component={MyLocation} />
        <Tab.Screen name={imagePikerName} component={ImagePickerE} />
        <Tab.Screen name={WebBrowserName} component={WebBrowserApp} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;