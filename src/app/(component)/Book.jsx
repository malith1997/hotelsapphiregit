"use client"
import Link from "next/link";
import React, { useState } from "react";
import style from "../(component)/book.module.css";

function Book() {

  return (
    <div>
      <div className={style.container}>
        <div className={style.box}>
          <label className={style.lable} htmlFor="checkInDate">
            Check In:
          </label>

          <input
            type="date"
            id="checkInDate"
            placeholder="Check in"
            name="checkin"
            className={style.datein}
          />

          <label className={style.lable} htmlFor="checkOutDate">
            Check Out:
          </label>

          <input
            type="date"
            id="checkOutDate"
            placeholder="Check out"
            name="checkout"
            className={style.datein}
          />

          <input
            type="number"
            id="adults"
            placeholder="Adults"
            name="adults"
            className={style.datein}
          />

          <input
            type="number"
            id="children"
            placeholder="children's"
            name="child"
            className={style.datein}
          />



          

          <Link href="/Book" className={style.link}><button className={style.btn}>Book Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Book;
