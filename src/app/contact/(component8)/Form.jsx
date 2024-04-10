"use client"
import React, { useState } from "react";
import Image from "next/image";
import Style from "../(component8)/form.module.css";
import callimg from "../../../../public/call.png";

function Form() {
  // State to manage modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch API to send form data to Google Sheets
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzAZFydOCNkZ5QkrEOHEnV2oCfkBaC68cRFKAzBaZhrBqhSm5jomiKDjGmfjy8ZdOeg/exec", {
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
          <h2 className={Style.submain}>Contact us</h2>

          <form
            onSubmit={handleSubmit} // Call handleSubmit function on form submission
            name="contact-form"
          >
            <input
              className={Style.input1}
              type="text"
              placeholder="First Name"
              name="fname"
            />

            <input
              className={Style.input1}
              type="text"
              placeholder="Last Name"
              name="lname"
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

export default Form;
