/* eslint-disable no-extra-boolean-cast */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';


import {
  SafeAreaView,

} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {PermissionsAndroid, Platform, Geolocation, } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify,{Auth, API, graphqlOperation} from 'aws-amplify';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';



import config from './src/aws-exports';
Amplify.configure(config);




const App = () => {

  useEffect(() => {
    const updateUserCar = async () => {
      // Get auth user
      const authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache:true});
      if (!authenticatedUser) {
        return;
      }
      // check if already car

      const carData = await API.graphql(graphqlOperation(
        getCarId,
        {id: authenticatedUser.attributes.sub}
      ));
      if (!!carData.data.getCar) {
        console.log("user already has a car assigned");
        return;
      }
      // if not , create a new car

      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'UberX',
        userId: authenticatedUser.attributes.sub,
      };
      await API.graphql(graphqlOperation(createCar,{input: newCar}));


    };
    updateUserCar(); 
  }, []);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber  App Location Permission",
          message:
            "Uber App needs access to your location  ",
            
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
    
  }, []);
 

  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};


export default withAuthenticator(App);
