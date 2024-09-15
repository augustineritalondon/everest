import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DespositSuccessful = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-everest-blue-600 text-white text-center py-3">
        {/* <h1 className="text-3xl lg:text-5xl font-bold ">Successful</h1> */}
        {/* <p className="mt-2">Last Updated: 04/06/2024.</p> */}
      </div>

      <div className="text-center py-32 lg:py-24">
        <h1 className="text-3xl lg:text-5xl font-bold ">Deposit Successful</h1>
        <p className="mt-2">Your Deposit was made successfully!</p>
      </div>

      <Footer />
    </>
  );
};

export default DespositSuccessful;
