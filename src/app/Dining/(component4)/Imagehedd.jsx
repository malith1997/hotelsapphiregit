import React from "react";
import style from "../../Dining/(component4)/imaged.module.css";

function Imagehedd() {
  return (
    <div>
      <div className={style.bg}> </div>

      <div className={style.container}>
        <h2 className={style.headt}>The Golden Palace Family Restaurant</h2>

        <p className={style.parat}>
          Our Family Restaurant at Hotel Sapphire has been a part of Colombo’s
          dining experience for decades. There have been numerous meetings,
          events, conventions and parties hosted here where guests savored the
          diverse delectable eastern and western menus offered. Perfect for the
          busy community working in Colombo to drop in for a quick bite or a
          welcome respite from all the shopping on Galle road.
        </p>

        <p className={style.parat}>
          Refresh and Re-Energize on wholesome, delicious fare at the Hotel
          Sapphire Restaurant. Choose your favorite food from our a'la carte
          menu.
        </p>
      </div>
    </div>
  );
}

export default Imagehedd;
