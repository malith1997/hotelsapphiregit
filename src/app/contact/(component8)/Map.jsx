"use clients";
import React from "react";
import Image from "next/image";
import Style from "../(component8)/map.module.css";
import tables from "../../../../public/tables.png";

function Map() {
  return (
    <div>
      <div className={Style.aboutcd}>
        <div className={Style.afitem1}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1638100109926!2d79.85988817475653!3d6.870966493127716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bba124a244b%3A0xe95fb4548c903eb8!2sHotel%20Sapphire!5e0!3m2!1sen!2slk!4v1711610055660!5m2!1sen!2slk"
            className={Style.map}
          ></iframe>
        </div>

        <div className={Style.afitem2}>
          <h2 className={Style.submain}>Contact</h2>
          <h4 className={Style.subhead}>Hotel Sapphire</h4>

          <p className={Style.phara}>No. 371, Galle Road, Colombo – 06,</p>
          <p className={Style.phara}>Sri Lanka.</p>
          <br></br>

          <p className={Style.phara}>Tel : +94 11 236 3306</p>
          <p className={Style.phara}>Tel : +94 11 236 3307</p>
          <p className={Style.phara}>Tel : +94 11 236 3308</p>
          <p className={Style.phara}>Mobile : +94 077 542 4627</p>
          <p className={Style.phara}>E-mail : inquiries@hotelsapphirelk.com</p>
          <p className={Style.phara}>E-mail : foe@hotelsapphirelk.com</p>
          <p className={Style.phara}>E-mail : rsvtns@hotelsapphirelk.com</p>

        </div>
      </div>
    </div>
  );
}

export default Map;
