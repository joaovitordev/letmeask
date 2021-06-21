import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDdPhu5JMcwwof9dUFFV9nl1TNpxjGXtu8",
    authDomain: "letmeask-fe56d.firebaseapp.com",
    databaseURL: "https://letmeask-fe56d-default-rtdb.firebaseio.com",
    projectId: "letmeask-fe56d",
    storageBucket: "letmeask-fe56d.appspot.com",
    messagingSenderId: "123762722266",
    appId: "1:123762722266:web:9c14e11343b412668aece3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
