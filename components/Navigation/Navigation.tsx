import Link from "next/link";
import { signOut } from "next-auth/react"
import Logo from "../Logo/Logo";
import style from './Navigation.module.scss';

function Navigation() {
  const handleLogoutButton = () => {
    signOut();
  }

  return <header className={style.blogHeader}>
    <Link href='/'>
      <Logo />
    </Link>
    <nav>
      <ul>
        <li><Link href='/posts'>Posts</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li>
          <button onClick={handleLogoutButton} className={style.logout}>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
}

export default Navigation;
