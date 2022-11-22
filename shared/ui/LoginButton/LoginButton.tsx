import { signOut } from "next-auth/react"
import { useRouter } from "next/router";

import style from './LoginButton.module.scss';

interface LoginButtonProps {
  text: string,
}

function LoginButton({ text }: LoginButtonProps) {
  const router = useRouter();

  const handleLogoutButton = () => {
    signOut();
  }

  const handleLoginButton = () => {
    router.replace('/auth');
  }

  const handler = text === 'Login' ? handleLoginButton : handleLogoutButton;

  return <button onClick={handler} className={style.sessionButton}>{text}</button>
}

export default LoginButton;
