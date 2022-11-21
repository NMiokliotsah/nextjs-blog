import { useState, useRef } from 'react';
import styles from './AuthForm.module.scss';

const createUser = async (email: string, password: string) => {
  const data = await fetch('api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!data.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      if (!isLogin) {
        await createUser(emailRef.current.value, passwordRef.current.value);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={styles.control}>
          <label htmlFor='email'>Email:</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={styles.control}>
          <label htmlFor='password'>Password:</label>
          <input ref={passwordRef} type='password' id='password' required />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
