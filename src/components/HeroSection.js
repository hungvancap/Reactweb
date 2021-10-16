import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Du lịch Hội An</h1>
      <p>Di sản văn hóa thế giới</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Đặt phòng ngay
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
