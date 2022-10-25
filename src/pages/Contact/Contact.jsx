import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Header from "../../layout/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import Footer from "../../layout/Footer/Footer";

function Contact(props) {
  return (
    <div>
      <Header />
      <MainBanner bannerName={"تماس با ما"} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
