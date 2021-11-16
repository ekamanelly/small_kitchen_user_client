import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import styles from "./styles/Home.module.css";
import FocusOnGrowing from "../components/FocusOnGrowing";
import Footer from "../components/Footer";
import FutureIsVirtual from "../components/FutureIsVirtual";
import GettingStarted from "../components/GettingStarted";
import HeroSection from "../components/HeroSection";
import LogoImg from "../components/LogoImg";
import MoreMoney from "../components/MoreMoney";
import NavBar from "../components/NavBar";
import Seemlessly from "../components/Seemlessly";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <NavBar />
        <LogoImg />
        <HeroSection />
        <div className="vTwo">
          <FocusOnGrowing />
          <MoreMoney />
          <Seemlessly />
          <FutureIsVirtual />
          <GettingStarted />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
