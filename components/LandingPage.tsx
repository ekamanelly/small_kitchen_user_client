import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FocusOnGrowing from "./shared/FocusOnGrowing";
import Footer from "./shared/Footer";
import FutureIsVirtual from "./shared/FutureIsVirtual";
import GettingStarted from "./shared/GettingStarted";
import HeroSection from "./shared/HeroSection";
import LogoImg from "./shared/LogoImg";
import MoreMoney from "./shared/MoreMoney";
import NavBar from "./shared/NavBar";
import Seemlessly from "./shared/Seemlessly";


function LandingPage() {
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
    )
}

export default LandingPage
