/******************************************************************************
* Execution : 1. default node cmd> node const.jsx 
* 2. if nodemon installed cmd> nodemodule const.jsx
* 
* Purpose : create const page.
* @description 
* 
* @file :const.js
* @overview :const form problem.
* @module :const - This is optional if expeclictly its an npm or local package
* @author :sravanthi<sravanthiakula15@gmail.com>
* @version :1.0
* @since :-04-04-2020
******************************************************************************/
import fire from './config/fire'
let serviceConstant={
    firebaseAuthorization:fire.auth(),
    firestore:fire.firestore()
}
export default serviceConstant;