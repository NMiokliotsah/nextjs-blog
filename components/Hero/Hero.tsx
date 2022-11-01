import Image from "next/image";
import style from './Hero.module.scss';

function Hero() {
  return <section className={style.hero}>
    <Image
      src="/images/see.jpg"
      alt=""
      width={200}
      height={200}
    />
    <h1>The blog project, which was build using Next.js</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, autem dolore. Inventore, expedita culpa. Quia.
    </p>
  </section>
}

export default Hero;
