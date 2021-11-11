import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div className=" d-none d-lg-block">
        <div className="navCoat">
          <div className="navInnerCoat">
            <div className="logoCoat">
              <Link href="/" passHref>
                <button className="logoName">carousel.</button>
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
              <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink">About</button>
                </Link>
              </div>
              <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink"> Blog</button>
                </Link>
              </div>
              <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink">Contact Us</button>
                </Link>
              </div>
              <div className="linkBtn">
                <button className="acctBtn">Create an Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
