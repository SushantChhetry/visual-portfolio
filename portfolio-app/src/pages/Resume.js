import React from "react";
import { BiDownload, BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";

import MapContainer from "./component/MapContainer";

const Resume = () => {
  const handleClick = async () => {
    const response = await fetch(
      "/Sushant Chhetry - Software Engineer Frontend.pdf"
    );
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sushant Chhetry - Software Engineer Frontend.pdf";
    link.click();
  };

  return (
    <div
      className="resume-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="btn-wrapper">
        <Link href="/">
          <button className="resume-btn">
            <BiHomeAlt2 size={32} />
          </button>
        </Link>
        <button className="resume-btn" onClick={handleClick}>
          <BiDownload size={32} />
        </button>
        <Link href="mailto: sushantchhetry@outlook.com">
          <button className="resume-btn">
            <AiOutlineMail size={32} />
          </button>
        </Link>
      </div>
      <div className="resume">
        <Image
          src={"/resume.jpg"}
          className="resume-img"
          width={700}
          height={900}
        />
      </div>
    </div>
  );
};

export default Resume;
