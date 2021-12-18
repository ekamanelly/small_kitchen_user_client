import React from "react";
import Link from "next/link";
import LogoImgHeader from "./LogoImgHeader";
import useAuth from "../hooks/auth.hook";
import CustomButton from "./forms/customButton";
import { useRouter } from "next/router";
import { GrSettingsOption } from "react-icons/gr";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { RevealForm } from "../atoms";

function NavBar() {
  const { error, user, loginWithGoogle, logOut } = useAuth();
  const router = useRouter();
  const [showingForm, setForm] = useRecoilState(RevealForm);

  // const handleForm = () => {
  //   router.replace("/dashboard/settings");

  //   // setReveal(!reveal);
  // };
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
                  <div className="flex justify-around ">
                    <button onClick={logOut} className="acctBtn mr-1">
                      log out
                    </button>
                    <CustomButton
                      icon={<GrSettingsOption className="text-white" />}
                      value={""}
                      onclick={() => setForm(!showingForm)}
                    />
                  </div>
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
