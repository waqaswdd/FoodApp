import firebase from '../../config/firebase'



function SignupUser(userdetails){
    console.log(userdetails)
    firebase.auth().createUserWithEmailAndPassword(userdetails.email, userdetails.password).then((success) => {
        console.log(success);
        var user = firebase.auth().currentUser;
        var uid;
        if (user !== null) {
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref('users');
        var userData = {
            fullName: userdetails.firstName,
            email: userdetails.email,
            // gender: userdetails.gender,
            age: userdetails.age,
            // country: userdetails.country,
            city: userdetails.city,
            password: userdetails.password,
        }
        userdetails.router.push('./login');
        firebaseRef.child(uid).set(userData);
    }).catch((error) => {
        var errorMessage = error.message;

        console.log('Error in Signing up', errorMessage);
    })
}

function loginUser(userdetails) {
    console.log(userdetails);
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(userdetails.email, userdetails.password).then((success) => {
            console.log(success);
            resolve(success);
        }).catch((error) => {
            var errorMessage = error.message;
            reject(errorMessage);
            console.log('Error in Signing in', errorMessage);
        })
    })
}
export {
    SignupUser,
    loginUser,
}