# Firebase Setup

This project uses Firebase for authentication. To get it running locally, follow these steps:

## Create a Firebase Project

1. Go to Firebase Console
2. Click Add project and follow the steps.
3. In your project, go to Project Settings → Your Apps → Add App → Web (</> icon).
4. Copy the Firebase config object values, which looks like this:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID",
measurementId: "YOUR_MEASUREMENT_ID"
};

5. After that generate new private key for Firebase Admin SDK and download json file, copy private_key and client_email from json file

## Add Environment Variables

In the project root, create a file named .env.local.
Add the Firebase values using this pattern:

NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
NEXT_FIREBASE_PRIVATE_KEY=YOUR_PRIVATE_KEY
NEXT_FIREBASE_CLIENT_EMAIL=YOUR_CLIENT_EMAIL

Replace `YOUR_*` with the corresponding values from your Firebase project settings and json file.

## Install dependencies

Use `npm install`

## Run project

Use `npm run dev`
