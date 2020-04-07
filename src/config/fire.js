/******************************************************************************
* Execution : 1. default node cmd> node fire.js
* 2. if nodemon installed cmd> nodemodule fire.js
* 
* Purpose : create fire page.
* @description 
* 
* @file :fire.js
* @overview :fire form problem.
* @module :fire - This is optional if expeclictly its an npm or local package
* @author :sravanthi<sravanthiakula15@gmail.com>
* @version :1.0
* @since :-4-04-2020
******************************************************************************/

import firebase from 'expo-firebase-app';
import 'expo-firebase-database';
const firebaseConfig = {
  apiKey: "AIzaSyC9zIhK6amfD_RKJhwujccDwdlU9oyCejg",
  authDomain: "fundoo-c8fca.firebaseapp.com",
  databaseURL: "https://fundoo-c8fca.firebaseio.com",
  projectId: "fundoo-c8fca",
  storageBucket: "fundoo-c8fca.appspot.com",
  messagingSenderId: "502752687679",
  appId: "1:502752687679:web:75c727c883a6c4cc572a8a",
  measurementId: "G-X1L51D9K2F"
};
  let fire=firebase.initializeApp(firebaseConfig);
  export default fire;