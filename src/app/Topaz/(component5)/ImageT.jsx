import React from "react";
import style from "../(component5)/imageT.module.css";

function ImageT() {
  return (
    <div>
      <div className={style.bg}> </div>

      <div className={style.container}>
        <h2 className={style.headt}>Topaz Bar</h2>

        <p className={style.parat}>
          A well-established watering hole in the city, the Topaz bar with its
          dark and smoky surroundings has been a much loved post-work retreat
          for the vast plethora of professionals who work in the city, eager to
          blow off steam and catch up with friends and colleagues.
        </p>

        <p className={style.parat}>
          The bar is well stocked with a choice of beverage options and is a
          great start to an evening thanks to its central location on Galle road
          placing it in the centre of Colombo’s bar scene.
        </p>
      </div>
    </div>
  );
}

export default ImageT;
