import React, { useState, useRef } from 'react';
import { signIn } from "next-auth/react"
import styles from './AuthForm.module.scss';
import { useRouter } from 'next/router';

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
  }) ;

  if (!data.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const router = useRouter();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      if (isLogin) {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (!result?.error) {
          router.replace('/');
        }
      } else {
        await createUser(email, password);
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
