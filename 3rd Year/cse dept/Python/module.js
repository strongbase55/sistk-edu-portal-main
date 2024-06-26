import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyCv5uOd8BW84xRlyExp1gcQd67hgZm8A88",
    authDomain: "cse-dept-project.firebaseapp.com",
    projectId: "cse-dept-project",
    storageBucket: "cse-dept-project.appspot.com",
    messagingSenderId: "940900727639",
    appId: "1:940900727639:web:bcb17bf6859f075a8fdc12",
    measurementId: "G-SDMJT6QKHH",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = "it";
console.log(app);
//----- New Registration code start
document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var con = document.getElementById("quiz-container");
    var log = document.getElementById("login-container");
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            const a = true;
            if (a == false) {
                con.style.display = "none";
                log.style.display = "flex";
            } else {
                con.style.display = "block";
                log.style.display = "none";
            }

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            //     console.log(errorMessage);
            alert('Sorry You Cant Write The Test Again');


        });
});
//----- End

//----- Login code start
document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            window.location.href = "start.html";
            //		    document.getElementById('logout').style.display = 'block';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
            if (errorCode === 'auth/invalid-email') {
                showErrorMessage('The email address you entered is invalid.');
            } else if (errorCode === 'auth/wrong-password') {
                showErrorMessage('The password you entered is incorrect.');
            } else {
                showErrorMessage('An error occurred while signing in.');
            }
        });
});
//----- End

//----- Logout code start
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
            alert("Sign-out successful.");
            window.location.href = "login-2.html";
            document.getElementById("logout").style.display = "none";
        })
        .catch((error) => {
            // An error happened.
            console.log("An error happened.");
        });
});
//----- End

// Google Sign-In Function
document
    .getElementById("google-signin")
    .addEventListener("click", function () {
        signInWithPopup(auth, GoogleAuthProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                if (errorCode === 'auth/invalid-email') {
                    showErrorMessage('The email address you entered is invalid.');
                } else if (errorCode === 'auth/wrong-password') {
                    showErrorMessage('The password you entered is incorrect.');
                } else {
                    showErrorMessage('An error occurred while signing in.');
                }
            });
    });
// Assuming you have already initialized Firebase in your project



function showErrorMessage(message) {
    // Implement your own logic to display error messages
    console.error('Error:', message);
