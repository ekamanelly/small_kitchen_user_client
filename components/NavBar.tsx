import React from "react";
import Link from "next/link";
import LogoImgHeader from "./LogoImgHeader";
import useAuth from "../hooks/auth.hook";
import CustomButton from "./forms/customButton";
import { useRouter } from "next/router";
import { GrSettingsOption } from "react-icons/gr";
import loadingIcon from "../public/animation/loading.json";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { RevealForm } from "../atoms";
import LottieAnimation from "./animation/lottieAnimation";

function NavBar() {
  const { error, user, loginWithGoogle, logOut, isLoading } = useAuth();
  const router = useRouter();
  const [showingForm, setForm] = useRecoilState(RevealForm);

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
              <div className="linkA">
                <Link href="#" passHref>
                  <button className="navLink">Contact Us</button>
                </Link>
              </div>
              <div className="linkBtn">
                {!user ? (
                  <button
                    // disabled={isLoading}
                    disabled={isLoading}
                    onClick={loginWithGoogle}
                    className="acctBtn relative"
                  >
                    <div className="absolute transform translate-x-10  ">
                      {isLoading && (
                        <LottieAnimation
                          lotti={loadingIcon}
                          height={35}
                          width={35}
                        />
                      )}
                    </div>
                    <div>Create an Account</div>
                  </button>
                ) : (
                  <div className="flex justify-around ">
                    <button onClick={logOut} className="acctBtn mr-1">
                      log out
                    </button>
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
