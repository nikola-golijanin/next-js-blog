import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.png"
          alt="An image showing me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nikola</h1>
      <p>this is my test blog app</p>
    </section>
  );
}
