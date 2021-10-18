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
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


const NewOrderPopUp = ({
    newOrder,
    onAccept,
    onDecline,
    duration,
    distance,
}) => {


    return (
        
        <View style={styles.root}>
            <Pressable onPress={onDecline} style={styles.declineButton}>
                <Ionicons name="close" size={30} color="#ffffff" style={{right:3}} />
                <Text style={styles.declineText}>DECLINE</Text>
                
            </Pressable>
            <Pressable onPress={onAccept} style={styles.popupContainer}>
                <View style={styles.row}>
                    <Text style={styles.uberType}>{newOrder.type}</Text>
                    <View style={styles.userBg}>
                        <FontAwesome5 name="user-ninja" size={35} color="#d8d8d8"/>
                    </View>
                    <Text style={styles.uberRating}>
                    <FontAwesome name="star" size={18} color={"#ffffff"} />    
                       <Text> { newOrder.user.rating } </Text>
                        
                    </Text>
                </View>
                <Text style={styles.minutes}>{duration} min</Text>
                <Text style={styles.distance}>{distance} miles</Text>

            </Pressable>
            
        </View>
    );
};

export default NewOrderPopUp;
