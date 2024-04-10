import React from "react";
import Image from "next/image";
import style from "../(component5)/galleryt.module.css";
import Timg1 from "../../../../public/t01.jpg";
import Timg2 from "../../../../public/t02.jpg";
import Timg3 from "../../../../public/t03.jpg";
import Timg4 from "../../../../public/t04.jpg";
import Timg5 from "../../../../public/t05.jpg";
import Timg6 from "../../../../public/t06.jpg";

function GalleryT() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.flexitem}>
          <Image src={Timg1} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Timg2} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Timg3} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Timg4} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Timg5} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Timg6} alt="hero image" className={style.gimg} />
        </div>
      </div>
    </div>
  );
}

export default GalleryT;
