import { useState, useContext } from "react";
import { userHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth } from '../Services/firebase';
import { db } from '../Services/firebase';
import { setDoc, doc} from 'firebase/firestore'
import '../Styles/Auth.css'
import UserContext from '../Components/Context/UserContext'

function Auth() {
    const [isRegistered, setIsRegistered] = useState('login');
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [registerAdress, setRegisterAdress] = useState();
    const [registerName, setRegisterName] = useState();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [currentUser, setCurrentUser] = useState();
    
    const registerForm = {
        email : registerEmail,
        name : registerName,
        adress : registerAdress
    }

/*     onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
        console.log(currentUser)
    }); */

    //Register Function
    const register = () =>{
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setDoc(doc(db, "users", user.uid), registerForm);
        setIsRegistered('loged')
        }).catch ((error) => {
            console.log(error)
        })
    }
    //Login Function
    const login = () =>{
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        setCurrentUser(user.email)
        setIsRegistered('loged')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    //Logout Function
    const logout = () => {
        signOut(auth).then(()=>{
            setCurrentUser({})
        })
    }


    return (
        <div>
            {isRegistered === 'loged' && (<div>HOLA</div>)}
            {isRegistered === 'login' && (
                <div>
                    <h1>Login</h1>
                    <p>Email</p>
                    <input type="text" onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} />
                    <p>Password</p>
                    <input type="text" onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} />
                    <button onClick={() => {setIsRegistered('register') }}>I dont even have an account</button>
                    <button onClick={() => {login()}}>Login</button>
                </div>
            )}
            {isRegistered === 'register' && (
                <div>
                    <h1>Register</h1>
                    <p>Email</p>
                    <input type="text" onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                    <p>Password</p>
                    <input type="text" onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} />
                    <p>Adress</p>
                    <input type="text" onChange={(event) => {
                        setRegisterAdress(event.target.value);
                    }} />
                    <p>Full Name</p>
                    <input type="text" onChange={(event) => {
                        setRegisterName(event.target.value);
                    }} />
                    <button onClick={() => {register()}}>Create User</button>
                    <button onClick={() => {setIsRegistered('login') }}>I already have an account</button>
                </div>
            )}

        </div>
    )
}



export default Auth;