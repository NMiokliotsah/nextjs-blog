import Image from "next/image";
import style from './Logo.module.scss';

function Logo() {
  return <div className={style.logo}>
    <h1>Blog</h1>
  </div>
}

export default Logo;