# water-check-app

## Live URL

https://water-quality-check-ab451.web.app/

## Members

Azusa Watanabe
Didier van Os
Javier Gonzalez

## .env file

Create `.env` file in the _vite_ directory. The values for these variables can be found in the [firebase console](https://console.firebase.google.com/) (see Project Settings). They are formatted as follows (values have been modified/redacted):

```
VITE_FIREBASE_API_KEY=AIzaXXXXXXXXXXXXXXXXXXXXZ8Hyg
VITE_FIREBASE_AUTH_DOMAIN=water-quality-check-ab451.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=water-quality-check-ab451
VITE_FIREBASE_STORAGE_BUCKET=water-quality-check-ab451.appspot.com
VITE_FIREBASE_SENDER_ID=1052XXXXXX34
VITE_FIREBASE_APP_ID=1:105XXXXX934:web:6f9XXXXXXXXX36857
VITE_FIREBASE_MEASUREMENT_ID=G-7CXXXXXJ
```

## Start web app in local

```commandline
cd ./vite
npm install
npm run dev
```

## Deploy on firebase-hosting

```commandline
cd ./vite
npm run build
firebase deploy
```
