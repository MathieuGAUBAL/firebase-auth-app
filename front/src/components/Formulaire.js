import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const Formulaire = ({setAuth}) => {
  const [values, setValues] = useState({
    email:"",
    password:""
  })

  useEffect(() => {
    if(window.localStorage.getItem('auth')){
      setAuth(true);
    }
  }, [setAuth])

  const loginWithEmail = (e) => {
    e.preventDefault();
    const { email, password } = values;
     firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
       const user = userCredential.user;
       user.getIdTokenResult().then((results) => {
        setAuth(true);
        window.localStorage.setItem('auth', results.token);
      }) 
    })
    .catch((error) => {
      console.log(error);
    });
  }


  const handleChangeValues = (e) => {
    setValues({...values, [e.target.name] : e.target.value});
  }

  return (
   <form onSubmit={loginWithEmail}>
        <div>
          <label>
            email : {" "}
            <input type="email" name="email" value={values.email} onChange={(e) => handleChangeValues(e)}/>
          </label>
        </div>

        <div>
          <label>
            password : {" "}
            <input type="password" name="password" value={values.password} onChange={(e) => handleChangeValues(e)}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Connexion"/>
        </div>
      </form>

  );
}

export default Formulaire;
