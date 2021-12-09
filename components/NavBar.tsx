import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImgHeader from "./LogoImgHeader";
import useAuth from "../hooks/auth.hook";

function NavBar() {
  const { error, user, loginWithGoogle, logOut } = useAuth();
  return (
    <div>
      <div className=" d-none d-md-block">
        <div className="navCoat">
          <div className="navInnerCoat">
            <div className="logoCoat">
              <Link href="/" passHref>
                <LogoImgHeader />
              </Link>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="navLinks">
              <div className="linkA">
                <Link href="/Home" passHref>
                  <button className="navLink">Home</button>
                </Link>
              </div>
              {/* <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink">About</button>
                </Link>
              </div> */}
              {/* <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink"> Blog</button>
                </Link>
              </div> */}
              <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink">Contact Us</button>
                </Link>
              </div>
              <div className="linkBtn">
                {!user ? (
                  <button onClick={loginWithGoogle} className="acctBtn">
                    Create an Account
                  </button>
                ) : (
                  <button onClick={logOut} className="acctBtn">
                    log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
