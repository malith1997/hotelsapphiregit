import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component2)/standard.module.css";
import stimg from "../../../../public/aboutimg.png";

function Standard() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <h2 className={Style.submain}>Standard Room</h2>
          <h4 className={Style.subhead}>Hotel Sapphire</h4>

          <p className={Style.phara}>
            Offering a commodious 305 square feet, Standard Rooms at the Hotel
            Sapphire are cosy and warm, yet well equipped with the essentials a
            guest might need. Located on the 1st and 2nd floors, we offer easy
            access to the city outside.
          </p>

          <p className={Style.phara}>
            Rooms are configured with either double or twin beds with attached
            bathrooms.
          </p>

          <Link href="/Book" className={Style.link}><button className={Style.btn}>Book Now</button></Link>
        </div>

        <div className={Style.afitem2}>
          <Image src={stimg} alt="hero image" className={Style.abtimg} />
        </div>
      </div>
    </div>
  );
}

export default Standard;
