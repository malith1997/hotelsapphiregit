import React from "react";
import style from "../../weddings/(component3)/image.module.css";

function Imagehed() {
  return (
    <div>
      <div className={style.bg}> </div>

      <div className={style.container}>
        <h2 className={style.headt}>Wedding & Functions</h2>

        <p className={style.parat}>
          From weddings to parties and every social function in-between, the
          Banquet Halls at the Hotel Sapphire have hosted many an event over the
          years. Our experienced events team will help you craft the ideal
          function.
        </p>

        <p className={style.parat}>
          Take advantage of a plethora of services from catering, wait staff and
          even entertainment options as per your function’s requirements.
        </p>

        <p className={style.parat}>
          Choose from the Blue Sapphire (250 pax) which is the largest of our
          venues and can host wedding receptions, private functions and
          cocktails or the Yellow Sapphire (225 pax) ideal for smaller, more
          intimate events. Either venue can be customized as per seating and
          requirement.
        </p>

        <p className={style.parat}>For more information, please contact:</p>
        <p className={style.parat}>Siva – Banquet Manager – 0722-432326</p>
        <p className={style.parat}>
          Vajira – Banquet Coordinator – 0718-717086
        </p>
        <p className={style.parat}>Ashoka – F & B Coordinator – 0779-767077</p>
        <p className={style.parat}>Hotline – 0772-624624</p>

        <p className={style.parat}>
          E-mail: bnqtmgr@hotelsapphirelk.com / bnqtcor@hotelsapphirelk.com
        </p>
      </div>
    </div>
  );
}

export default Imagehed;
