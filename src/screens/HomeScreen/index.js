/* eslint-disable no-lone-blocks */
/* eslint-disable no-shadow */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, Pressable } from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewOrderPopUp from '../../components/NewOrderPopUp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [myPosition, setMyPosition] = useState(null);
    const [order, setOrder] = useState(null);
    const [newOrder, setNewOrder] = useState({
        id: '1',
        type: 'UberX',
        originLatitude:28.450027,
        originLongitude:-16.263845,

        destinationLatitude:28.452927,
        destinationLongitude:-16.260845,

        user:{
            rating: 4.8,
            name:'Nastyushka',
        },
    });

    
    const onDecline = () => {
        setNewOrder(null);
    };
    const onAccept = (newOrder) => {
        setOrder(newOrder);
        setNewOrder(null);
    };


    const onGo = () => {
        setIsOnline(!isOnline);
    };

    const onUserLocationChange = (event) =>{
        setMyPosition(event.nativeEvent.coordinate);
        
    };

    const onDirectionFound = (event) => {
        console.log("Direction found: ", event );
        if (order) {
            setOrder({
                ...order,
                distance: event.distance,
                duration: event.duration,
                pickedUp: order.pickedUp || event.distance < 0.2,
                isFinished: order.pickedUp && event.distance < 0.2,
            });
        }
    };
    const getDestination = () => {
        if (order && order.pickedUp) {
            return {
                latitude: order.destLatitude,
                longitude: order.destLongitude,
            };
        }
        return {
            latitude: order.originLatitude,
            longitude: order.originLongitude,
        };
    };



    const renderBottomTitle = () => {

         if (order && order.isFinished) { 
             
            return (
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#ff0000', width:200, padding:10, }}>    
                    </View>
                        <Text style={{color:'#ffffff',fontWeight:'bold',}}>  Complete {order.type}  </Text>
                    <Text style={styles.bottomText}>{order.user.name}</Text>
                </View>
            
            )
        }



        if (order && order.pickedUp) {
            return (
                <View style={{alignItems:'center',justifyContent:'center',}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text> {order.duration ? order.duration.toFixed(1) : '?'} min </Text>
                        <View style={{marginHorizontal:5,backgroundColor:'#ff0000',width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                        <FontAwesome5 name="user-ninja" size={25} color="#ffffff"/>
                    </View>
                        <Text> {order.distance} km </Text>
                    </View>
                    <Text style={styles.bottomText}>Dropping off {order.user.name}</Text>
                </View>
            
            );
        }



        if (order) {
            return (
                <View style={{alignItems:'center',justifyContent:'center',}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text> {order.duration ? order.duration.toFixed(1) : '?'} min </Text>
                        <View style={{marginHorizontal:5,backgroundColor:'#18c92f',width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                        <FontAwesome5 name="user-ninja" size={25} color="#ffffff"/>
                    </View>
                        <Text> { order.distance } km </Text>
                    </View>
                    <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
                </View>
            
            );
        }
        
        
        if (isOnline) {
            return (
                <Text style={styles.bottomText}>You are offline</Text>
            );
        }
        return (
               <Text style={styles.bottomText}>You are online</Text>
        );
               
    };

    
    const GOOGLE_MAPS_APIKEY = 'AIzaSyD7tN5XgP0qpd3-iD8Nwaa7XaMtG8XUe5E';
    return (
        <SafeAreaView >
            <MapView
                showsPointsOfInterest={true}
                onUserLocationChange={onUserLocationChange}
                showsUserLocation={true}
                showsMyLocationButton={false}
                style={{height:Dimensions.get('window').height - 70,width:'100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}
            >
                {order && (
                     <MapViewDirections
                        onReady={onDirectionFound}
                        origin={myPosition}
                        destination={getDestination()}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={5}
                        strokeColor="#458cff"
                    />
                )}
                 
            </MapView>
            <Pressable onPress={() => console.warn('menu')} style={[styles.roundButton, {top:10,left:10}]}>
                <Ionicons name="menu-outline" size={30} color="#4a4a4a"/>   
            </Pressable>
            <Pressable onPress={() => console.warn('search')} style={[styles.roundButton, {top:10,right:10}]}>
                <Ionicons name="ios-search" size={30} color="#4a4a4a"/>   
            </Pressable>
            <Pressable onPress={() => console.warn('pressed')} style={[styles.roundButton, {bottom:100,left:10}]}>
                <Ionicons name="ios-shield-checkmark-outline" size={30} color="#4a4a4a"/>   
            </Pressable>
            <Pressable onPress={() => console.warn('pressed')} style={[styles.roundButton, {bottom:100,right:10}]}>
                <Ionicons name="flag-outline" size={30} color="#4a4a4a" />   
            </Pressable>
            <Pressable onPress={onGo} style={styles.goButton}>
                <Text style={styles.goText}>
                    {isOnline ? 'GO' : 'End'}
                </Text>  
            </Pressable>
            <Pressable onPress={() => console.warn('Balance')} style={styles.balanceButton}>
                <Text style={styles.balanceText}>
                    <Text style={{color:'green'}}>$</Text>
                    {' '}
                    0.00
                </Text> 
                
            </Pressable>
            <View style={styles.bottomContainer}>
                <Octicons name="settings" size={24} color="#4a4a4a" style={{transform:[{rotate:'90deg'}]}}/>
                 {renderBottomTitle()}
                <Ionicons name="menu-outline" size={30} color="#4a4a4a"/>
            </View>  
            {newOrder && <NewOrderPopUp
             newOrder={newOrder}
             duration= {3}
             distance={0.6}
             onDecline={onDecline}
             onAccept={() => onAccept(newOrder)}
            />} 
        </SafeAreaView>
    );
};

export default HomeScreen;
