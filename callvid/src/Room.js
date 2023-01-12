import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const Room = () => {
  
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 2125473999;
    const serverSecret = "b1df155ad937f9a18a0737772ea243a1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "An"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom(
      { 
   
      onJoinRoom: (users) => {
        // Add your custom logic
     },
     onLeaveRoom: (users) => {
       // Add your custom logic
     },
      sharedLinks:[
        {
          name: 'Copy link room',
            url:
             window.location.protocol + '//' +
             window.location.host + window.location.pathname 
             
        }
      ],
        
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;
