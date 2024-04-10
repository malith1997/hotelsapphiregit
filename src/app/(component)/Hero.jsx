import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import hero1 from "../../../public/hero.png";
import Book from "./Book";

function hero() {
  return (
    <div>
      <div className={styles.hero}>
        {/* <Image src={hero1}  alt='hero image' className={styles.heroimage}/> */}
        <h1 className={styles.headtext}>Nature has a Secret</h1>
        <h4 className={styles.text}>A dreamy hotel on a magnificent island.</h4>

        <Book />
      </div>
    </div>
  );
}

export default hero;
