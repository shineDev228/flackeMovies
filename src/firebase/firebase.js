import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKegvRQPQt_RNstCCAXDLWC49dvYWMBQw",
    authDomain: "flackemovie.firebaseapp.com",
    projectId: "flackemovie",
    storageBucket: "flackemovie.appspot.com",
    messagingSenderId: "315215565916",
    appId: "1:315215565916:web:5c316b17d4098e87a6c299"
  };


 export class Firebase {
    constructor(firebaseConfig) {
        this.app = initializeApp(firebaseConfig);
    }
}




