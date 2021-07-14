import { useEffect, useState } from 'react';

const Formulaire = () => {
  const [values, setValues] = useState({
    email:"",
    password:""
  })

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if(window.localStorage.getItem('auth')){
      setAuth(true);
    }
  }, [])

  const loginWithEmail = (e) => {
    e.preventDefault();
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
