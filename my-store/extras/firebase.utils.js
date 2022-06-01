


// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use


import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzV-lBj_aPjeNKDnBc8drM1XvXdiIj0_k",
  authDomain: "my-shop-db-1d5ca.firebaseapp.com",
  projectId: "my-shop-db-1d5ca",
  storageBucket: "my-shop-db-1d5ca.appspot.com",
  messagingSenderId: "993855939889",
  appId: "1:993855939889:web:53dc3285edf9dae9203c10"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//initialize googleauth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithGoogleRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation ={}) => {
	if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
}

export const  createAuthUserWithEmailAndPassword = async(email,password) =>{
	if (!email  || !password ) return;

	return await createUserWithEmailAndPassword(auth, email,password)

}