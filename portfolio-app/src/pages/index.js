import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "./component/Nav";
import Link from "next/link";

// pages
import Start from "./Start";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Sushi from "./Sushi";
import { useState, useEffect } from "react";
import NewIntro from "./NewIntro";

//components
import Resume from "./Resume";
import Loading from "./component/Loading";

export default function Home() {
  const [showDiv, setShowDiv] = useState(false);
  const [opacityState, setOpacityState] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading === false ? (
        <main>
          <Nav />
          <div className="sushi-wrapper">
            <h5>Hi! I am</h5>
            <h1>SUSHANT CHHETRY</h1>
            <Sushi />
            <div className="btn-wrapper">
              <Link href={"/Resume"} target="_blank">
                <button className="btn">Resume</button>
              </Link>
              <Link href={"#contact"}>
                <button className="btn">Connect</button>
              </Link>
            </div>
          </div>
          <section id="intro">
            <NewIntro />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
