import React from 'react';
import styles from "./index.module.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = React.useState(true);
  const isSign = signState? "Sign In" : "Sign Up";

  return (
    <div className={styles.login}>
      <img src={logo} alt="logo" className={styles.loginLogo} />
      <div className={styles.loginForm}>
        <h1>{isSign}</h1>
        <form>
          <input type="text" placeholder="Your name" className={signState? styles.hidden : ""} />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value={isSign} className={styles.button} />

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

    </div>
  )
}

export default Login