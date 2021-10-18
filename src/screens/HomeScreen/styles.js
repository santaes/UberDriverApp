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
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer:{
        height:80,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
    },
    bottomText:{
        fontSize:22,
        color:'#4a4a4a',
        top:-5,

        
    },
    roundButton:{
        position:'absolute',
        backgroundColor:'white',
        padding:10,
        borderRadius:50,
    },
    goButton:{
        position:'absolute',
        backgroundColor:'#1495ff',
        width:75,
        height:75,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        bottom:100,
        left: Dimensions.get('window').width / 2 - 37,
        
    },
    goText:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:'bold',
    },
    balanceText:{
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',

    },
    balanceButton:{
        position:'absolute',
        backgroundColor:'#1c1c1c',
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        top:10,
        left: Dimensions.get('window').width / 2 - 50,
    },
});

export default styles;