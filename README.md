# React Firebase Starter Kit
Starter kit is just an extension of the create react app project [Create React App](https://github.com/facebook/create-react-app).

##  Includes The Following Modules
styled-components
svgo
@svgr/cli
node-sass
firebase
react-router-dom


##  Available Scripts

In the project directory, you can run: `npm start` to test project in dev environment.

To create a production bundle of your app run: `npm run build`

 

 


## Pre flight checklist.

1. Check You Have Firebase Toos Installed Globaly  
To check to see if the firebase-tools package is installed run  ```npm list -g```. If you do not see firebase-tool in the list the you will need to install them before proceding. Install the firebase-tools using ```npm install -g firebase-tools```  

1. Make Sure Your Logged Into Firebase  
This is an easy step to skip but check your logged into the firebase console. To check that your logged in run ```firebase login```


 


## Initalize React to use a Firebase Project 
To setup your project folder to use Firebase run```firebase init```. You will be asked serveral questions during the init process. Depending on the serives that you want to use the init command will take you through setting up the config files required for each service. The questions will pertain to:
- What Services Will Your Project Use?
- What Firebase Project Should Your App Use To Access Services?
- Service Setup (depends on the services you setup firestore, hosting and storage)
- Firestore config options
- Hosting config options



#### Select Project Firebase Features   
Use the ```up``` and ```down``` arrows to move between the options and press the ```Space Bar``` to select features, then Enter to confirm your choices.  

    ❯ ◯ Database: Configure Firebase Realtime Database and deploy rules  
      ◯ Firestore: Deploy rules and create indexes for Firestore  
      ◯ Functions: Configure and deploy Cloud Functions  
      ◯ Hosting: Configure and deploy Firebase Hosting sites  
      ◯ Storage: Deploy Cloud Storage security rules  
      ◯ Emulators: Set up local emulators for Firebase features  
      ◯ Remote Config: Get, deploy, and rollback configurations for Remote Config  
 


#### Project Setup
You need to associate your react project with a Firebase project. You will be presented with the following options. Select use an existing project and select the project you created from the list. 

        ? Please select an option: (Use arrow keys)  
        ❯ Use an existing project (select your project from the list)
      

#### Firestore Setup
Next you will be asked to setup the ```Firestore Security Rules``` allow you to define how and when to allow
requests. You can keep these rules in your project directory and publish them with firebase deploy. For now except the default by pressing return  
  
#### Firestore Rules 
Firestore indexes allow you to perform complex queries while maintaining performance that scales with the size of the result set. You can keep index definitions in your project directory and publish them with firebase deploy. Except the default file ```firestore.indexes.json``` by hitting enter.

    ? What file should be used for Firestore indexes? firestore.indexes.json 

#### Hosting Setup
Your public directory is the folder that contains the app you wish to deploy to firebase. This folder will be uploaded when you use the ```firebase deploy``` command. Since we are using CRA (create react app) you will  use the build folder. Make sure to enter build after the word (public)

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? Set up automatic builds and deploys with GitHub? No
    ✔  Wrote build/index.html

#### Storage Setup
The last config file is your ```Firebase Storage Security Rules```. This file allows you to define how and when users can upload  and download files. You can keep these rules in your project directory and publish them with ```firebase deploy```. Accept the default by pressing the Return key.

? What file should be used for Storage Rules? storage.rules






## Create an instance of Firebase for your project.

#### Create a firebase folder.
In the src directory create a firebase folder. Your folder structure should be similar to:
```
src
├── App.jsx
├── assets
├── components
├── css
├── firebase
└── index.js
```  
  
#### Copy your firebaseConfig settings 
1. Get your project config settings from the Firebase Console.
1. Config snippet is located in your project overview.
1. In the firebase console click on the gear icon in the upper left hand side of the dashboard.
1. Select the ```Project settings``` option.
1. Now scroll down in the console panel till you see the ```Your apps``` panel.
1. Locate the firebase app you are going to use
1. Find the ```Firebase SDK snippets``` options.
1. Select the radio button called Config  
1. Copy the firebaseConfig settings
  
#### Create a firebaseConfig.js file
Inside your firebase folder create a file and name it firebaseConfig.js. This file is used to create a firebase instance and connect to the firebase app where you have all of the services your react app will use.
```
src
├── App.jsx
├── assets
├── components
├── css
├── firebase
├      └── firebaseConfig.js
└── index.js
```
  
Inside the firebaseConfig.js copy and paste the following code. You will have to replace firebaseConfig object with the one you copyed from the console. 
```js
import firebase from 'firebase' 

// firebase dashboard project settings for the app....
const firebaseConfig = {
      const firebaseConfig = {
                apiKey: "YOUR KEY",
                authDomain: "YOUR DOMAIN",
                projectId: "YOUR PROJECT ID",
                storageBucket: "YOUR STORAGE BUCKET",
                messagingSenderId: "YOUR MESSAGIN ID",
                appId: "Your App Id",
                measurementId: "Your Measurement Id"
            };
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  export default firebaseApp

```

## Testing Firebase Connection
Open the file called App.jsx and copy and paste the following component code. Here you import the firebase instance that you created. 
```js
  import firebaseApp from './firebase/firebaseConfig'


function App() {

   console.log(firebaseApp)

  return (
    <>
     <header>
       <h1>React Firebase Starter Kit</h1>
       <p>now deployed on firebase</p>
     </header>
    </>
  );
}

export default App;

```  
Now run your app in dev mode ```npm start``` go to the developer console and check to see if you have an instance of firebase logged out to the console.  

```
FirebaseAppImpl {firebase_: {…}, isDeleted_: false, name_: "[DEFAULT]", automaticDataCollectionEnabled_: false, options_: {…}, …}
```  

 You should see an object in the console called FirebaseAppImpl and if you do your ready to start using firebase services with react.


## Deploying Your App
The next step requires you to build your app and deploy it to firebase hosting. First build a production bundle of your app. With CRA run ```npm run build``` to create an optimized bundle.  
Once the build process is completed you can now deploy your app to firebase hosting. To do this you run the command ```firebase deploy``` this will upload your ```build``` folder and deploy at the end of the build process firebase will provide a URL to your project click the link and make sure your app is deployed.
 




 



