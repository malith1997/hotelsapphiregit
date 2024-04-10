"use clients";
import React from "react";
import style from "../(component)/guest.module.css";

function Guest() {
  return (
    <div>
      <div className={style.bg}>
        <div className={style.trance}>
          <h2 className={style.submain}>Our Happy Guests</h2>

          <p className={style.phara}>
            We were very happy with the room and the services of hotel Sapphire
            and will recommend to anyone who's looking for a comfortable stay in
            Colombo
          </p>

          <p className={style.phara}>Jennifer Mathew</p>
          <p className={style.phara2}>USA</p>
        </div>
      </div>
    </div>
  );
}

export default Guest;
