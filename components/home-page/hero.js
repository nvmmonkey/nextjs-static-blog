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
        I am a researcher & angels & advisor in crypto - I write blog about my
        research & coding stacks like React, Next, and Tailwind.
      </p>
    </section>
  );
}

export default Hero;
