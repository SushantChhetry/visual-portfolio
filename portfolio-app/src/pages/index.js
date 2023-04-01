import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import home from "./home";
import intro from "./intro";
import portfolio from "./portfolio";
import connect from "./connect";
import Nav from "./component/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Nav />
        <section id="home">
          <home />
        </section>
        <section id="intro">
          <intro />
        </section>
        <section id="portfolio">
          <portfolio />
        </section>
        <section id="connect">
          <connect />
        </section>
      </main>
    </>
  );
}