import React from "react";
import { BiDownload, BiHomeAlt2 } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Resume = () => {
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
        <button className="resume-btn">
          <BiDownload size={32} />
        </button>
      </div>
      <div className="resume"></div>
    </div>
  );
};

export default Resume;
