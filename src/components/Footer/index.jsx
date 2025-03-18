import React from "react";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://www.linkedin.com/company/dotvizion/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/dotvizionn/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=61571532141434",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/services",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opnion",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="pb-16 pt-10">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
              <img src={logo} alt="medicare logo" />
              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright © {year} </p>
              <div className="flex items-center gap-3 mt-4">{
                socialLinks.map((link,index)=><Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181a1e] rounded-full  flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white">{link.icon}</Link>)}</div>
            </div>
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>

              <ul>{
                quickLinks01.map((item,index)=><li className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>)
                }</ul>
            </div>
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>

              <ul>{
                quickLinks02.map((item,index)=><li className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>)
                }</ul>
            </div>
          </div>
        </div>
      </footer>
      <section className=" container border-t flex md:flex-row flex-col gap-7 items-center justify-between">
        <div>
          <img
            src={
              "https://res.cloudinary.com/landingpage2/image/upload/v1739727604/5000x5000-3-removebg-preview_qvlhb9.webp"
            }
            alt="logo dotvizion"
            className="max-w-[250px]"
          />
        </div>
        <div>
          <p className="text-center">All rights reserved Dotvizion</p>
          <p className="text-center">
            <span className="text-[#6ecfef] px-2">
              {" "}
              <a href="https://www.dotvizion.com">Dotvizion</a>
            </span>
            Solutions for web applications – © 2023
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
