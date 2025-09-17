import React from 'react';
import styles from "./index.module.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif"
import { signup, login } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = React.useState(true);
  const isSign = signState? "Sign In" : "Sign Up";
  const [inputState, setInputState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputState((prev) => {
      return {...prev, [name]: value}
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const { name, email, password } = inputState;

    if(signState) {
      await login(email, password);

    } else {
      await signup(name, email, password);
    }

    setInputState({
      name: "",
      email: "",
      password: ""
    });
    setLoading(false);

  } 

  const output = loading? (<div className={styles.loginSpinner}>
    <img src={netflix_spinner} alt="netflix spinner" />
  </div>)
  :
  (<div className={styles.login}>
      <img src={logo} alt="logo" className={styles.loginLogo} />
      <div className={styles.loginForm}>
        <h1>{isSign}</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" name="name" value={inputState.name} placeholder="Your name" className={signState? styles.hidden : ""} onChange={handleChange} />
          <input type="email" name="email" value={inputState.email} placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" value={inputState.password} placeholder="Password" onChange={handleChange} />
          <input type="submit" value={isSign} className={styles.button} />

          <div className={styles.formHelp}>
            <div className={styles.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className={styles.formSwitch}>
          <p className={signState? "" : styles.hidden}>New to Netflix? <span onClick={() => {
            setSignState(sign =>  false);
          }}>Sign Up Now</span></p>
          <p className={signState? styles.hidden : ""}>Already have an Account? <span onClick={() => {
            setSignState(sign => true);
          }}>Sign In Now</span></p>
        </div>
      </div>

    </div>)

  return output
}

export default Login