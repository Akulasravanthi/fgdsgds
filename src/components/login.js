
import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../style'
import { Alert } from "react-native";
import fire from '../config/fire';
import Dashboard from './dashboard'

class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        // Create notification channel required for Android devices
        this.createNotificationChannel();

        // Ask notification permission and add notification listener
        this.checkPermission();
    }
    createNotificationChannel = () => {
        // Build a android notification channel
        const channel = new fire.notifications.Android.Channel(
            "reminder", // channelId
            "Reminders Channel", // channel name
            fire.notifications.Android.Importance.High // channel importance
        ).setDescription("Used for getting reminder notification"); // channel description
        // Create the android notification channel
        fire.notifications().android.createChannel(channel);
    };

    checkPermission = async () => {
        const enabled = await fire.messaging().hasPermission();
        if (enabled) {
            // We've the permission
            this.notificationListener = fire
                .notifications()
                .onNotification(async notification => {
                    // Display your notification
                    await fire.notifications().displayNotification(notification);
                });
        } else {
            // user doesn't have permission
            try {
                await fire.messaging().requestPermission();
            } catch (error) {
                Alert.alert("Unable to access the Notification permission. Please enable the Notification Permission from the settings");
            }
        }
    };

    render() {
        return (
            <Dashboard />
        )
    }
}

export default Login