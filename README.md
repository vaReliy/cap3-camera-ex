# Cap3CameraEx

### This project was created for demonstrate Capasitor (3.0.0-beta.6) Camera plugin issue.

## Package versions:
```
"@capacitor/android": "^3.0.0-beta.6",
"@capacitor/camera": "^0.4.2",
"@capacitor/cli": "^3.0.0-beta.6",
"@capacitor/core": "^3.0.0-beta.6",
```

## Requirements:
- NodeJS 12+
- Android Studio 4+

## How to run:
```
npm install
npm run build
npx cap sync

#To run in web:
npm start

# To run mobile app:
npx cap open android
```


# Issue problem:  
While using @capacitor/camera plugin for loading photo/images the app has been crashing.  
App crashing accures if used parameter "allowEditing: true", after click to "Done" button in android app.  
The web app works fine.  
I don't have the opportunity to test iOS app 


<h2>Steps to reproduce (web, android):</h2>
<p>1. Click to "tackePhoto" button</p>
<p>2. Load local or take photo from webcam</p>
<p>3. Click "Ok" buton</p>
<p>4*. (Android) Try to edit and save photo</p>
<br>
<h2>Expected result</h2>
<p>The image has been load (and appear on page) successefull</p>
<br>
<h2>Actual result</h2>
<p>The application has been crashed</p>
