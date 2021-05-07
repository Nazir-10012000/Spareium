import React, {Component, useEffect} from "react";
import PushNotification from "react-native-push-notification";
// var PushNotification = require("react-native-push-notification");
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const PushNote =() =>{
    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:");
            },
          
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);
          
              // process the notification here
          
              // required on iOS only 
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            // Android only
            // senderID: "1090501687137",
            senderId: '1001365048129',
            // iOS only
            permissions: {
              alert: true,
              badge: true,
              sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
          });
    }, []);

    
        return null;
    
}
export default PushNote;