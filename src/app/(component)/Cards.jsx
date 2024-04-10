"use clients";
import React from "react";
import style from "../(component)/cards.module.css";
import Image from "next/image";
import cardimg1 from "../../../public/cards/accommodation.jpg";
import cardimg2 from "../../../public/cards/dining.jpg";
import cardimg3 from "../../../public/cards/topaz.jpg";
import Link from "next/link";

function Cards() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.itemflex}>
          <Image src={cardimg1} alt="hero image" className={style.cdimg} />

          <h4 className={style.subhead}>Accommodation</h4>
          <p className={style.phara}>
            The Hotel Sapphire is a modern and comfortable city hotel offering
            exemplary service and facilities in the heart of Sri Lanka’s
            commercial hub.
          </p>

          <Link href="/Accommodation">
            <button className={style.btn}>See more</button>
          </Link>
        </div>

        <div className={style.itemflex}>
          <Image src={cardimg2} alt="hero image" className={style.cdimg} />

          <h4 className={style.subhead}>Dining</h4>
          <p className={style.phara}>
            With delectable dishes, amiable ambience and great hospitality, we
            guarantee an exceptional dining experience at our restaurant.
          </p>

          <Link href="/Dining">
            <button className={style.btn}>See more</button>
          </Link>
        </div>

        <div className={style.itemflex}>
          <Image src={cardimg3} alt="hero image" className={style.cdimg} />

          <h4 className={style.subhead}>Topaz</h4>
          <p className={style.phara}>
            Topaz bar is the ideal place to chill out and have a beverage while
            trying some of the best finger foods with your friends.
          </p>
          <Link href="/Topaz">
            <button className={style.btn}>See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
