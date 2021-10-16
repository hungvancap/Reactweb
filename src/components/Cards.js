import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Thưởng thức ẩm thực miền trung</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("./images/img-1.jpg").default}
              text="Thanh Cao Lầu"
              path="/services"
            />
            <CardItem
              src={require("./images/img-2.jpg").default}
              text="Bánh ướt cuốn thịt nướng"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("./images/img-3.jpg").default}
              text="Hoành thánh Vạn Lộc"
              path="/services"
            />
            <CardItem
              src={require("./images/img-4.jpg").default}
              text="Bánh xèo"
              path="/products"
            />
            <CardItem
              src={require("./images/img-5.jpg").default}
              text="Thịt xiên nướng"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
