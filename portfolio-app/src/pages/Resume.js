import React from "react";
import Nav from "./component/Nav";
import Link from "next/link";

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
        <buton className="btn">Download Resume</buton>
        <Link href="/">
          <buton className="btn">Home</buton>
        </Link>
      </div>
      <img
        src={`https://cdn-blog.novoresume.com/articles/google-docs-resume-templates/basic-google-docs-resume.png`}
        alt="resume"
        className="resume-img"
        style={{ width: "100vw", height: "auto" }}
      />
    </div>
  );
};

export default Resume;
