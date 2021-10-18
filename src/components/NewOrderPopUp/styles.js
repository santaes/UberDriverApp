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
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        width:'100%',
        bottom: 0,
        padding:20,
        height: '100%',
        justifyContent:'space-between',
        backgroundColor:'#00000099',
    },
    popupContainer:{
        backgroundColor:'#1d1d1d',
        
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-around',
        height: 250,
    },
    minutes:{
        color:'#d1d1d1',
        fontSize: 35,
    },
    distance:{
        color:'#d1d1d1',
        fontSize:25,
    },
    uberType:{
        color:'#d1d1d1',
        fontSize:20,
        marginHorizontal:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    userBg:{
        backgroundColor:'#254afa',
        width:60,
        height:60,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
    },
    declineButton:{
        backgroundColor:'#1d1d1d',
        padding:3,
        borderRadius:50,
        width:100,
        alignItems:'center',
        flexDirection:'row',
    },
    declineText:{
        color: '#ffffff',
        
    },
    uberRating:{
        color:'#d1d1d1',
        fontSize:20,
        marginHorizontal:10,
    },
});
export default styles;
