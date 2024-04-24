import React from "react";
import style from "../../weddings/(component3)/image.module.css";
import Image from "next/image";
import per from "../../../../public/icons/person.png";

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
        

        {/* <div className={style.containerthree}>

          <div className={style.itemthree}>

            <p className={style.contdename}>Vinnyfreeda Amalathasan</p>
            <p className={style.contde}>Senior Sales & Marketing Manager – Leisure</p>
            <p className={style.contde}> +94 761 647 238</p>
            <p className={style.contde}> +94 112 363 306</p>
            <p className={style.contde}> vinnyfreeda.a@hotelsapphirelk.com</p>
            

          </div>

          <div className={style.itemthree}>
            
            <p className={style.contdename}>N.Sivaratnam</p>
            <p className={style.contde}>Manager-Food and Beverage</p>
            <p className={style.contde}> +94 0772 624 624</p>
            <p className={style.contde}> +94 112 363 307</p>
            <p className={style.contde}> sales@hotelsapphirelk.com</p>
            <p className={style.contde}> No 371 Galle Road Colombo 06, Sri Lanka.</p>

          </div>

        </div> */}


        <div className={style.containerone}>

        <div className={style.itemone}>

          <Image src={per} alt="icon" className={style.icon} />
          <p className={style.contdename}>Vinnyfreeda Amalathasan</p>
          <p className={style.contdename}> | </p>
          <p className={style.contde}>Senior Sales & Marketing Manager – Leisure</p>
          <p className={style.contdename}> | </p>
          <p className={style.contde}> +94 761 647 238</p>
         
          

          </div>



          <div className={style.itemone}>

          <Image src={per} alt="icon" className={style.icon} />
          <p className={style.contdename}>N.Sivaratnam</p>
          <p className={style.contdename}> | </p>
          <p className={style.contde}>Manager-Food and Beverage</p>
          <p className={style.contdename}> | </p>
          <p className={style.contde}>+94 0772 624 624</p>
          <p className={style.contdename}> | </p>
          <p className={style.contde}>+94 112 363 307</p>
          
         

          </div>

        </div>


      </div>
    </div>
  );
}

export default Imagehed;
