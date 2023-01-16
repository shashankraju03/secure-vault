
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDOmg8_Qkgq-3gXylKuiPOWI5gmWLEJENg",
  authDomain: "vault-4a1f3.firebaseapp.com",
  projectId: "vault-4a1f3",
  databaseURL:"https://vault-4a1f3-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "vault-4a1f3.appspot.com",
  messagingSenderId: "234095884708",
  appId: "1:234095884708:web:1278948657bbc04621e931",
  measurementId: "G-QVDMQ1Z1L3"
};

const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);

export default fire;