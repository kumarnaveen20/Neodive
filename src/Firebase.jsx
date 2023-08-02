import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBa2x9d_znlpag2bLAnrp34rm0E_UdxK1c",
  authDomain: "fir-e9f61.firebaseapp.com",
  projectId: "fir-e9f61",
  storageBucket: "fir-e9f61.appspot.com",
  messagingSenderId: "568576405764",
  appId: "1:568576405764:web:8ebfd504e536a3a0c1e051",
  measurementId: "G-MWD3VXL16C"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {auth,app};