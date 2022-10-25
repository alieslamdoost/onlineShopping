import React from "react";
import FooterIcon from "./FooterIcon";
import FooterSelection from "./FooterSelection";
import FooterTitle from "./FooterTitle";
import Logo from "../../components/Logo/Logo";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";

function Footer(props) {
  return (
    <footer className="d-flex flex-column container">
      <div className="d-flex justify-content-between align-items-center py-4">
        <div className="d-flex flex-column justify-content-start align-items-center">
          <Logo />
          <div className="py-4">
            ساعت صفر بزرگترین تامین کننده و فروشگاه ساعت در ایران و خاورمیانه
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <FooterTitle footerTitle={"کمک"} />
          <FooterSelection footerSelection={"درباره ساعت صفر"} />
          <FooterSelection footerSelection={"ارتباط ساعت صفر"} />
          <FooterSelection footerSelection={"محصولات"} />
          <FooterSelection footerSelection={"خانه"} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <FooterTitle footerTitle={"محصولات جدید"} />
          <FooterSelection footerSelection={"اکسسوری"} />
          <FooterSelection footerSelection={"ساعت"} />
          <FooterSelection footerSelection={"مردانه"} />
          <FooterSelection footerSelection={"زنانه"} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <FooterTitle footerTitle={"پشتیبان"} />
          <FooterSelection footerSelection={"سوالات"} />
          <FooterSelection footerSelection={"شرایط"} />
          <FooterSelection footerSelection={"قوامین"} />
          <FooterSelection footerSelection={"گزارشات"} />
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center mx-auto">
        <div className="px-4">
          <FooterIcon footerIcon={<BsFacebook />} />
          <FooterIcon footerIcon={<BsInstagram />} />
          <FooterIcon footerIcon={<BsTelegram />} />
          <FooterIcon footerIcon={<BsTwitter />} />
        </div>
        <div>
          Copyright ©2022 All rights reserved | This template is made by Ali
          EslamDoost
        </div>
      </div>
    </footer>
  );
}

export default Footer;
