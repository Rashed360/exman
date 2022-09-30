import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
