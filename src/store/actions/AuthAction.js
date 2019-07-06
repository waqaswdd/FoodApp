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
            age: userdetails.age,
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

function SignUpResturant(resturantDetails){
    console.log(resturantDetails)
    firebase.auth().createUserWithEmailAndPassword(resturantDetails.Resturantemail, resturantDetails.Resturantpassword).then((success) => {
        console.log(success);
        var rest = firebase.auth().currentUser;
        var uid;
        if (rest !== null) {
            uid = rest.uid;
        }
        var firebaseRef = firebase.database().ref('resturant');
        var resturantData = {
            resName: resturantDetails.ResturantName,
            resemail: resturantDetails.Resturantemail,
            rescity: resturantDetails.Resturantcity,
            respassword: resturantDetails.Resturantpassword,
        }
        resturantDetails.router.push('./login');
        firebaseRef.child(uid).set(resturantData);
    }).catch((error) => {
        var errorMessage = error.message;

        console.log('Error in Signing up', errorMessage);
        // console.log('Error in Signing up', resid);
    })
}


function Addfod(addFoodDetails){
    console.log(addFoodDetails)
    firebase.auth().createUserWithEmailAndPassword(addFoodDetails.FoodName, addFoodDetails.FoodPrice).then((success) => {
        console.log(success);
        var food = firebase.auth().currentUser;
        var uid;
        if (food !== null) {
            uid = food.uid;
        }
        var firebaseRef = firebase.database().ref('Foods');
        var foodData = {
            foodName: addFoodDetails.FoodName,
            foodPrice: addFoodDetails.FoodPrice,
        }
        addFoodDetails.router.push('./RestDashboard');
        firebaseRef.child(uid).set(foodData);
    }).catch((error) => {
        var errorMessage = error.message;

        console.log('Error in Signing up', errorMessage);
        // console.log('Error in Signing up', resid);
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
            // console.log('Error resid', resid);
        })
    })
}
export {
    SignupUser,
    loginUser,
    SignUpResturant,
    Addfod,
}