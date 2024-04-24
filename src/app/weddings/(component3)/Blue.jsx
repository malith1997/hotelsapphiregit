"use clients";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component3)/blue.module.css";
import tables from "../../../../public/blue-sapphire.jpg";

function Blue() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <Image src={tables} alt="hero image" className={Style.abtimg} />
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Blue Sapphire</h2>
          <h4 className={Style.subhead}>Your Perfect Day, Our Blue Sapphire Way</h4>

          <p className={Style.phara}>
            Recently refurbished with modern facilities which include modern
            lighting and a seating capacity up to 250pax, designed to host
            Corporate Events, Conferences, Ceremonies, Wedding Receptions,
            Private Functions, Cocktail Parties etc.
          </p>

          <Link href="/Book" className={Style.link}><button className={Style.btn}> Inquire Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Blue;
