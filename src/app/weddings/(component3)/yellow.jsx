"use clients";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component3)/yellow.module.css";
import yeimg from "../../../../public/yellow-sapphire.jpg";

function Yellow() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <h2 className={Style.submain}>Yellow Sapphire</h2>
          <h4 className={Style.subhead}>Shine Bright on Your Big Day</h4>

          <p className={Style.phara}>
            Refurbished in the year 2016 with contemporary design to suit any
            kind of function upto 225 pax. Be it a Board Meeting, Seminar or a
            Cocktail Party, we are geared to handle them all.
          </p>

          <Link href="/Book" className={Style.link}><button className={Style.btn}>Inquire Now</button></Link>
        </div>

        <div className={Style.afitem2}>
          <Image src={yeimg} alt="hero image" className={Style.abtimg} />
        </div>
      </div>
    </div>
  );
}

export default Yellow;
