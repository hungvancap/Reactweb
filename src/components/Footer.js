import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Giới thiệu</h2>
            <Link to="/sign-up">Về công ty chúng tôi</Link>
            <Link to="/">Nguyên tắc hoạt động</Link>
            <Link to="/">Tuyển dụng</Link>
            <Link to="/">Điều khoản sử dụng</Link>
          </div>
          <div class="footer-link-items">
            <h2>Dịch vụ</h2>
            <Link to="/">Du lịch trong ngày</Link>
            <Link to="/">Du lịch trọn gói</Link>
            <Link to="/">Đặt phòng khách sạn</Link>
            <Link to="/">Chụp ảnh lưu niệm</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Tin tức</h2>
            <Link to="/">Bản tin Du Lịch Việt</Link>
            <Link to="/">Cẩm nang du lịch</Link>
            <Link to="/">Tư vấn du lịch</Link>
            <Link to="/">Mẹo vặt du lịch</Link>
          </div>
          <div class="footer-link-items">
            <h2>Liên hệ</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
