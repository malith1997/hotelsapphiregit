"use clients";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component2)/Luxury.module.css";
import tables from "../../../../public/tables.png";

function Luxury() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <Image src={tables} alt="hero image" className={Style.abtimg} />
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Luxury Room</h2>
          <h4 className={Style.subhead}>Hotel Sapphire</h4>

          <p className={Style.phara}>
            Luxury rooms offer an expansive 312 square feet of space and come
            equipped with either double or twin sharing beds and en-suite
            bathroom and shower facilities. Separate seating areas in the room
            are ideal for business travelers looking to get some work done or to
            simply enjoy a coffee, gazing out the window observing the hustle
            and bustle of Colombo.
          </p>

          <Link href="/Book" className={Style.link}><button className={Style.btn}> Book Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Luxury;
