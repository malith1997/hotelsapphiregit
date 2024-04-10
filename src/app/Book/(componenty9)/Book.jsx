"use client"
import React, { useState } from "react";
import Image from "next/image";
import Style from "../(componenty9)/book.module.css";
import callimg from "../../../../public/booking.png";

function Bookf() {
  // State to manage modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch API to send form data to Google Sheets
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxG1n7niOomP52BmIC29A_x0UK0FOSGsFAMjSUp2Ub94gSajVjDdBqfGEsx5slg0q-I/exec", {
        method: "POST",
        body: new FormData(event.target),
      });

      // Check if response is successful
      if (response.ok) {
        setModalVisible(true); // Show modal
        event.target.reset(); // Reset form fields
        // Wait for a moment before refreshing the page
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 3000); // Adjust the delay as needed
      } else {
        // Handle error
        console.error("Failed to submit form data");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <div className={Style.container}>
        <div className={Style.item1}>
          <Image src={callimg} alt="hero image" className={Style.abtimg} />
        </div>

        <div className={Style.item2}>
          <h2 className={Style.submain}>Book Now</h2>

          <form
            onSubmit={handleSubmit} // Call handleSubmit function on form submission
            name="contact-form"
          > 

            <h4 className={Style.lable} htmlFor="checkInDate">Check In:</h4>
            <input
              className={Style.input1}
              type="date"
              placeholder="Checkin"
              name="checkin"
            />
            <h4 className={Style.lable} htmlFor="checkInDate">Checkout:</h4>  
            <input
              className={Style.input1}
              type="date"
              placeholder="Checkout"
              name="checkout"
            />

            <input
              className={Style.input1}
              type="number"
              placeholder="Adults"
              name="adults"
            />

            <input
              className={Style.input1}
              type="number"
              placeholder="Children's"
              name="child"
            />

        <select name="Roomtype" className={Style.input1}>
            <option value="Deluxe room">Deluxe Room</option>
            <option value="Standard room">Standard Room</option>
        </select> 

        <input
            type="number"
            id="rooms"
            placeholder="Number of Rooms"
            name="rooms"
            className={Style.input1}
          />

          

          <input
            type="text"
            id="country"
            placeholder="Country"
            name="country"
            className={Style.input1}
          />

         <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            className={Style.input1}
          />

            <input
              className={Style.input1}
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              className={Style.input1}
              type="tel"
              placeholder="Tel"
              name="Tel"
            />

            <textarea
              className={Style.input1}
              placeholder="Message"
              name="message"
              rows="4" cols="50"
            />

       

            <input
              className={Style.btn}
              type="submit"
              value="Send"
              id="submit"
            />


          </form>
        </div>
      </div>
      
      {/* Modal to display */}
      {modalVisible && (
        <div className={Style.modal}>
          <div className={Style.modalContent}>
            <span className={Style.closeBtn} onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p>Thank you for your submission!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookf;
