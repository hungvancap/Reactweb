import React from "react";
import { Button } from "./Button";
import "./Sub.css";
function Sub() {
  return (
    <div className="container">
      <section className="subscription">
        <p className="subscription-heading">Đăng ký nhận ưu đãi từ chúng tôi</p>
        <p className="subscription-text">Hủy đăng ký bất cứ khi nào bạn muốn</p>
        <div className="input-areas">
          <form>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email của bạn"
            />
            <Button buttonStyle="btn--outline">Đăng ký</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Sub;
