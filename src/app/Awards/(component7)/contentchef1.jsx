"use clients";
import React from "react";
import Image from "next/image";
import Style from "../(component7)/contentchef1.module.css";
import tables from "../../../../public/Athula.jpg";

function Contentchef1() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <Image src={tables} alt="hero image" className={Style.abtimg} />
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Athula Kodikarage</h2>
          <h4 className={Style.subhead}>Group Kitchen Artist</h4>

          <p className={Style.phara}>
            <li>
              Chef Athula, our Culinary Art Chef the only Sri Lankan to win the
              following awards.
            </li>
          </p>

          <p className={Style.phara}>
            <li>IKA World Culinary Olympics 2016 – Frankfurt, Germany.</li>
          </p>

          <p className={Style.phara}>
            <li>Six Medals including Two Gold & One Gold Excellence.</li>
          </p>

          <p className={Style.phara}>
            <li>Two Gold Medals including One Gold Excellence.</li>
          </p>

          <p className={Style.phara}>
            <li>IKA World Culinary Olytmpics 2012 – Frankfurt, Germany.</li>
          </p>

          <p className={Style.phara}>
            <li>
              Highest Individual Participant Medalist. (Two Gold & One Silver)
            </li>
          </p>

          <p className={Style.phara}>
            <li>
              Most Outstanding Artist for 5 consecutive times of Hotel Asia
              Competition in Maldives. (2000 – 2009)
            </li>
          </p>

          <p className={Style.phara}>
            <li>
              Medal for Live Fruit & Vegetable Carving Competition in Singapore.
            </li>
          </p>

          <p className={Style.pharait}>
            “Awards for Most Outstanding Carving and Excellence Gold for Live
            Carving including more than 20 Gold in National Chefs’ Guild
            Competitions.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contentchef1;
