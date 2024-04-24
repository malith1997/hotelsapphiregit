import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../(component)/pickme.module.css";
import stimg from "../../../public/pickme.jpg";

function pickme() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <h2 className={Style.submain}>Now We are Available on</h2>
          <h4 className={Style.subhead}>PickMe Food</h4>

          <p className={Style.phara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to 
          </p>


          <Link href="https://play.google.com/store/apps/details?id=com.pickme.passenger&pcampaignid=web_share" className={Style.link}>
            <button className={Style.btn}>Order Now</button>
          </Link>
        </div>

        <div className={Style.afitem2}>
          <Image src={stimg} alt="hero image" className={Style.abtimg} />
        </div>
      </div>
    </div>
  );
}

export default pickme;
