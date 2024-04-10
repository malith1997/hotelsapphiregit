"use clients";
import React from "react";
import Image from "next/image";
import Style from "../(component)/weddings.module.css";
import tables from "../../../public/tables.png";
import Link from "next/link";

function Weddings() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <Image src={tables} alt="hero image" className={Style.abtimg} />
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Hotel Sapphire</h2>
          <h4 className={Style.subhead}>
            We host the best Weddings and Events in town
          </h4>

          <p className={Style.phara}>
            Our lavishly decorated banquet is one of the most sought out venues
            for weddings and events in Colombo. With the availability of two
            banquet halls to choose from our event team will make sure all your
            needs are met and customized to suit your unique taste.
          </p>

          <Link href="/weddings">
            {" "}
            <button className={Style.btn}>See More</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Weddings;
