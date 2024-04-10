"use clients";
import React from "react";
import Style from "../(component)/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/logo.png";
import fb from "../../../public/fb.png";
import insta from "../../../public/insta.png";
import link from "../../../public/link.png";

function Footer() {
  return (
    <div>
      <div className={Style.fcontainer}>
        <div className={Style.wrapper}>
          <div className={Style.flexitem1}>
            <Link href="/">
              <Image src={logo2} alt="hero image" className={Style.flogo} />
            </Link>
            <div className={Style.scontainer}>
              <Image src={fb} alt="hero image" className={Style.sociallogo} />
              <Image
                src={insta}
                alt="hero image"
                className={Style.sociallogo}
              />
              <Image src={link} alt="hero image" className={Style.sociallogo} />
            </div>
          </div>

          <div className={Style.flexitem}>
            <h3>Our Service</h3>
            <Link href="/Accommodation" className={Style.link}>
              <p className={Style.flink}>Accommodation</p>
            </Link>
            <Link href="/weddings" className={Style.link}>
              <p className={Style.flink}>Weddings & Events</p>
            </Link>
            <Link href="/Dining" className={Style.link}>
              <p className={Style.flink}>Dining</p>
            </Link>
            <Link href="/Topaz" className={Style.link}>
              <p className={Style.flink}>Topaz Bar</p>
            </Link>
            {/* <Link href="/" className={Style.link} ><p className={Style.flink}>Offers</p></Link> */}
          </div>

          <div className={Style.flexitem}>
            <h3>Our Company</h3>
            <Link href="/about" className={Style.link}>
              <p className={Style.flink}>About Us</p>
            </Link>
            <Link href="/Awards" className={Style.link}>
              <p className={Style.flink}>Awards</p>
            </Link>
            {/* <Link href="/" className={Style.link} ><p className={Style.flink}>Gallery</p></Link> */}
            <Link href="/Book" className={Style.link}>
              <p className={Style.flink}>Book Now</p>
            </Link>
            <Link href="/contact" className={Style.link}>
              <p className={Style.flink}>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={Style.fbottom}>
        <p>&copy; 2024 Hotel Sapphire. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
