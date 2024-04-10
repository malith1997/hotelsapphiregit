"use clients";
import React from "react";
import Style from "../(component7)/contentchef.module.css";
import Image from "next/image";
import stimg from "../../../../public/Lalith.jpg";

function Contentchef() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <h2 className={Style.submain}>Lalith Jeewananda</h2>
          <h4 className={Style.subhead}>Group Executive Chef</h4>

          <p className={Style.phara}>
            <li>
              Chef Lalith has more than 40 years of service in the Food &
              Beverage industry.
            </li>
          </p>

          <p className={Style.phara}>
            <li>Well known locally and internationally.</li>
          </p>

          <p className={Style.phara}>
            <li>
              Conducted over 500 cooking demonstration programs in ‘Rasa Vimana’
              on Swarnavahini.
            </li>
          </p>

          <p className={Style.phara}>
            <li>Catered to over 12,000 Weddings and other functions.</li>
          </p>

          <p className={Style.pharait}>
            “Key player in wining 19 medals in Chefs’ Guild 2015 - Food &
            Beverage Category”
          </p>
        </div>

        <div className={Style.afitem2}>
          <Image src={stimg} alt="hero image" className={Style.abtimg} />
        </div>
      </div>
    </div>
  );
}

export default Contentchef;
