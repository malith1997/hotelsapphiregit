"use client";
import React from "react";
import styles from "./hero.module.css";

function Test() {
  const handleclick = () => {
    alert("hello");
  };

  return (
    <div>
      <h1>new components</h1>
      <button onClick={handleclick}>click me</button>
    </div>
  );
}

export default Test;
