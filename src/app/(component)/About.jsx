"use clients";
import React from "react";
import Style from "../(component)/about.module.css";
import Image from "next/image";
import Link from "next/link";
import abtimg from "../../../public/aboutimg.png";

function About() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <h2 className={Style.submain}>Hotel Sapphire</h2>
          <h4 className={Style.subhead}>
            Star Class Hotel at Affordable Rates
          </h4>

          <p className={Style.phara}>
            A reliable mainstay in the heart of Colombo for decades, the Hotel
            Sapphire is a modern and comfortable city hotel offering exemplary
            service and facilities in the heart of Sri Lanka’s commercial hub.
          </p>

          <p className={Style.phara}>
            The ideal business hotel, Hotel Sapphire offers a choice of event
            and MICE facilities to cater to your professional needs. Simply
            looking for an urban retreat, look no further, the hotel is
            centrally located on Galle Road with easy access to the best venues
            in Colombo.
          </p>

          <p className={Style.phara}>
            The hotel offers Standard rooms and Deluxe rooms with a host of
            modern amenities, a contemporary restaurant that can whip up local
            and international cuisine and a celebrated bar perfect for letting
            off steam and relaxing after a long day on Galle Road.
          </p>

          <Link href="/about" className={Style.link}>
            <button className={Style.btn}>See more</button>
          </Link>
        </div>

        <div className={Style.afitem2}>
          <Image src={abtimg} alt="hero image" className={Style.abtimg} />
        </div>
      </div>
    </div>
  );
}

export default About;
