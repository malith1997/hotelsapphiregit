import React from "react";
import style from "../(component2)/option.module.css";
import Image from "next/image";
import acimg from "../../../../public/icons/ac.png";
import bedimg from "../../../../public/icons/bed.png";
import teaimg from "../../../../public/icons/tea.png";
import Fridgeimg from "../../../../public/icons/Fridge.png";
import wifiimg from "../../../../public/icons/wifi.png";
import safeimg from "../../../../public/icons/safe.png";
import tvimg from "../../../../public/icons/tv.png";
import telimg from "../../../../public/icons/tel.png";
import waterimg from "../../../../public/icons/water.png";
import dryerimg from "../../../../public/icons/dryer.png";

function Options() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.flexitems}>
          <Image src={acimg} alt="" className={style.icons} />
          <p>Air Conditioning</p>
        </div>

        <div className={style.flexitems}>
          <Image src={bedimg} alt="" className={style.icons} />
          <p>King Size Bed or Twin Beds</p>
        </div>

        <div className={style.flexitems}>
          <Image src={teaimg} alt="" className={style.icons1} />
          <p> Tea / Coffee Making Facility</p>
        </div>

        <div className={style.flexitems}>
          <Image src={Fridgeimg} alt="" className={style.icons} />
          <p> Mini Fridge</p>
        </div>

        <div className={style.flexitems}>
          <Image src={wifiimg} alt="" className={style.icons} />
          <p> Free Wi-Fi</p>
        </div>

        <div className={style.flexitems}>
          <Image src={safeimg} alt="" className={style.icons} />
          <p> Digital Safe</p>
        </div>

        <div className={style.flexitems}>
          <Image src={tvimg} alt="" className={style.icons} />
          <p> 32” LCD/LED TV with Cable Network</p>
        </div>

        <div className={style.flexitems}>
          <Image src={telimg} alt="" className={style.icons} />
          <p> Telephone</p>
        </div>

        <div className={style.flexitems}>
          <Image src={waterimg} alt="" className={style.icons} />
          <p> Hot & Cold Water</p>
        </div>

        <div className={style.flexitems}>
          <Image src={dryerimg} alt="" className={style.icons} />
          <p> Hair dryer</p>
        </div>
      </div>
    </div>
  );
}

export default Options;
