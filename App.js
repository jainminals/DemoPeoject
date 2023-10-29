

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/store';
import Home from "./src/Home/Home"
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/MainTab/HomeNavigation"

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
)

const App = () => {
  
  return (
    <NavigationContainer>
      <HomeNavigation />    
    </NavigationContainer>
  );
};
export default AppWrapper;

// import { View, Text, TouchableOpacity, TextInput } from 'react-native'
// import React,{useState,useEffect} from 'react'
// import AgoraUIKit from "agora-rn-uikit";
// import axios from "axios";

// export default function App({props}) {
//   const appId = "325c80daf0d4403ba3aba9dfce5b5bec";
//   const [videoCall, setVideoCall] = useState(true);
//   const [connectionData, setConnectionData] = useState(null);
//   const [channelname, setchannelname] = useState("Minal12345")
//   const [tokenid, settokenid] = useState("")

//   const getRtmAccessToken = async (data) => {
//     return axios("http://134.209.115.63:4001/getAgoraToken", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data,
//     })
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         console.log("errorororo", error);
//         throw error;
//       });
//   };
//   useEffect(() => {
//     if (props && props.route.params?.channelName != undefined) {
//       setConnectionData({
//         appId: appId,
//         channel: props.route.params.channelName,
//         token: props.route.params.rtmToken,
//       });
//       setVideoCall(true);
//     } else {
//       videoCall && generateChannelName();
//     }
//   }, [videoCall]);
//   function generateChannelName() {
//     const channelName =  "Minal12345";
//    apiAccessToken(channelName);
//   }
//   async function apiAccessToken(channelName) {
//     console.log("channelName",channelName)
//     const obj = {
//       channelName: channelName,
//     };
//     await getRtmAccessToken(obj).then((res) => {
//       try {

//         if (res.status == true) {
//           console.log("res==>",res)
//           setConnectionData({
//             appId: appId,
//             channel: channelName,
//             token: res.token,
//           });
//         }
//       } catch (error) {}
//     });
//   }

//   const callbacks = {
//     EndCall: () => {
//       setVideoCall(false);
//     },
//     // JoinChannelSuccess: (ConnectionData) => {
//     //   console.log("join channel sucesssggggg", ConnectionData)
//     // }
//   };
//   const JoinCall =() =>{
// setVideoCall(true)
//     setConnectionData({
//       appId: appId,
//       channel: channelname,
//       token: tokenid,
//     });
//   }
//   console.log("ConnectionDat",connectionData)
//   return (
//     videoCall && connectionData != null ? (
//         <View style={{ height: "100%", width: "100%" }}>
//           <AgoraUIKit
//             connectionData={connectionData}
//             rtcCallbacks={callbacks}
//           />
//         </View>

//   ):(
//     <View style={{marginHorizontal:10}}>
//       <TextInput
//       style={{borderColor:"black",borderWidth:1,marginTop:10}}
//       placeholder='channel name'
//       onChangeText={(text)=>setchannelname(text)}
//       value={channelname}
//       />
//       <TextInput
//       style={{borderColor:"black",borderWidth:1,marginTop:10}}
//       placeholder='token'
//       onChangeText={(text)=>settokenid(text)}
//       value={tokenid}
//       />
//       <TouchableOpacity style={{width:"100%",height:50,backgroundColor:"rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",marginTop:10}} onPress={()=>JoinCall()}>
//         <Text>Join</Text>
//       </TouchableOpacity>
//     </View>
//   )

//   )
// }