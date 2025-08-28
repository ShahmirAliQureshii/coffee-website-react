import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const IconBox = () => {
  return <>
    <a className="social-links" target="_blank" href="https://www.linkedin.com/in/shahmir-qureshi-162200252/"><FaLinkedin /></a>
    <a className="social-links" target="_blank" href="https://github.com/ShahmirAliQureshii"><FaGithub /></a>
    <a className="social-links" target="_blank" href="https://www.instagram.com/ig.shahmir?igsh=MWVvNzZvY280Yndieg=="><AiFillInstagram /></a>
  </>
};

export default IconBox;
