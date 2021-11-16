import Image from "next/image";
import React from "react";
import Grill from "../../public/media/Grill.png";
// import NavBar from '../../components/NavBar';

function FoodDetails() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-10">
                        <div className="img-fluid">
                            <Image
                                src={Grill}
                                alt="photo"
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default FoodDetails
