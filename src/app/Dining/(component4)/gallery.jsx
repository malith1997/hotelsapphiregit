import React from "react";
import style from "../(component4)/gallery.module.css";
import Image from "next/image";
import Gimg1 from "../../../../public/g01.jpg";
import Gimg2 from "../../../../public/g02.jpg";
import Gimg3 from "../../../../public/g03.jpg";
import Gimg4 from "../../../../public/g04.jpg";
import Gimg5 from "../../../../public/g05.jpg";
import Gimg6 from "../../../../public/g06.jpg";

function Gallery() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.flexitem}>
          <Image src={Gimg1} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Gimg2} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Gimg3} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Gimg4} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Gimg5} alt="hero image" className={style.gimg} />
        </div>

        <div className={style.flexitem}>
          <Image src={Gimg6} alt="hero image" className={style.gimg} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
