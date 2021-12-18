import Image from "next/image";
import React, { useState } from "react";
import Grill from "../../public/media/Grill.png";
import Badge from "../../public/media/Badge.svg";
import CommentCard from "../../components/CommentCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MeatSample from "../../components/MeatSample";
import { ListOfMeal } from "../../model/meal";
import { useRouter } from "next/router";

function FoodDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [[{ name, price, url }]] = useState(() =>
    ListOfMeal.filter((cur) => cur.slug == slug)
  );
  // alert(JSON.stringify({ name, price, url }));
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="img-fluid ">
              <div
                className="rounded-lg green p-1 w-full "
                style={{ backgroundColor: "", margin: 0 }}
              >
                <Image
                  layout="responsive"
                  width={400}
                  height={250}
                  src={url}
                  alt="photo"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 availableContainer">
            <div className="txtAvailable">
              <h4>{name}</h4>
              <p>Ready in 1 hour - Victoria Island</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="btnAvailable">
              <button>Available</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div className="d-grid gap-2">
              <button className="btn btn-success" type="button">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <ul>
              <li>
                <div className="img-fluid">
                  <Image src={Badge} alt="photo" />
                </div>
              </li>
              <li>
                <span>BurnOut Grills</span>
                <span>4.8 (20 ratings)</span>
              </li>
              <li>
                <span>32 dishes</span>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-green-500">
            <span>see all</span>
          </div>
        </div>
        {/* <div className="flex align-items-center justify-items-center">
          <MeatSample />
          <MeatSample />
          <MeatSample />
          <MeatSample />
        </div> */}
        <CommentCard />
        <CommentCard />
      </div>
      <Footer />
    </div>
  );
}

export default FoodDetails;
