"use clients";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component6)/ben.module.css";
import benlg from "../../../../public/ben.png";

function Ben() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <Image src={benlg} alt="ben image" className={Style.abtimg} />
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Who We Are</h2>
          <h4 className={Style.subhead}>Ben Holdings (Pvt)Ltd</h4>

          <p className={Style.phara}>
            Ben Holdings (Private) Limited holds Sri Lanka’s famous business
            entities in the field of Entertainment, Broadcasting, Leisure, and
            Retail. The Company owns and operates some of the most popular brand
            names in Sri Lanka that are associated with both trust and
            professionalism.
          </p>

          <Link href="https://benholdingslk.com/index.html" className={Style.link}>
            <button className={Style.btn}> Visit Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ben;
