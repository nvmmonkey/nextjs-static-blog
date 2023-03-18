import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/kit.jpeg"
          alt="An image of Kit"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kit</h1>
      <p>
        I am a Researcher + Angel + Advisor in crypto - I write blogs about my
        researches & coding stacks like ReactJS, NextJS, and TailwindCSS.
      </p>
    </section>
  );
}

export default Hero;
