# water-check-app

## URL
https://water-quality-check-ab451.web.app/

## Member
Azusa Watanabe

## .env file
Create `.env` file in your root directory. Please check each value of project in firebase.
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

## Start Firebase server in local
```commandline
cd ./firebase
firebase login
firebase use --add water-quality-check-ab451

cd ./function
npm run serve
```

## Start web app in local
```commandline
cd ./vite
npm install
npm run server
```

## Deploy on firebase-hosting
```
cd ./vite
npm run build
firebase deploy
```
