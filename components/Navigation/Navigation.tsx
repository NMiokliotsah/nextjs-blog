import Link from "next/link";
import Logo from "../Logo/Logo";
import style from './Navigation.module.scss';

function Navigation() {
  return <header className={style.blogHeader}>
    <Link href='/'>
      <Logo />
    </Link>
    <nav>
      <ul>
        <li><Link href='/posts'>Posts</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
}

export default Navigation;
