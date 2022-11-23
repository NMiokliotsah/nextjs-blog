import React, { useState, useRef } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import Image from 'next/image';

import style from './AuthForm.module.scss';

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
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setLoadingSate] = useState<boolean>(false);

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
      setLoadingSate(true);
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
        switchAuthModeHandler();
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingSate(false);
    }
  }

  return (
    <section className={style.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={style.control}>
          <label htmlFor='email'>Email:</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={style.control}>
          <label htmlFor='password'>Password:</label>
          <input ref={passwordRef} type='password' id='password' required />
        </div>
        <div className={style.actions}>
          <button className={style.loginButton}>
            {isLogin ? 'Login' : 'Create Account'}
            {isLoading && <Image
              className={style.spinner}
              src='/images/spinner.svg'
              width={25}
              height={25}
              alt='spinner'
            />}
          </button>
          <button
            type='button'
            className={style.toggle}
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
