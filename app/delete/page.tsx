"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import axios from "axios";
import { Refresh } from "iconsax-react";

const PrivacyPolicy = () => {
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [reason, setReason] = useState();

  const [loading, setLoading] = useState(false);

  const formRef: any = useRef(null);

  const handleDeleteAccount = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(formRef.current);

    let data = {
      email: email,
      phone: phoneNumber,
      specifics: reason,
    };

    let config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
      data: data,
    };

    try {
      const res = await axios(`/api/everest`, config);

      toast("Request Submitted Successfully!");
      setLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }

      return {
        message: "Request Submitted Successfully!",
        token: res.data,
      };
    } catch (err: any) {
      console.log("catch");
      setLoading(false);

      toast("Something went wrong!");

      console.log(err.response.data);

      throw Error(err.response.data);
    }
  };

  return (
    <>
      <Navbar />

      <div className=" bg-everest-blue-600 text-white text-center py-10">
        <h1 className="text-3xl lg:text-5xl font-bold ">Account Deletion</h1>
        {/* <p className="mt-2">Last Updated: 04/06/2024.</p> */}
      </div>

      <div className="container mx-auto py-10 px-4 text-justify"></div>

      <section className="my-10 mb-20">
        {/* form */}
        <div className="w-[90%] lg:w-[40%] mx-auto bg-blue-100 p-8 lg:p-16 rounded-2xl">
          <h1 className="font-bold text-xl lg:text-2xl text-center">
            Delete your account as a Driver for Everest
          </h1>

          <form action=" mt-5" ref={formRef}>
            <div className="flex flex-col my-5">
              <label htmlFor="" className=" text-gray-600">
                Email:
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full py-2 px-5 mt-2"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col my-5">
              <label htmlFor="" className=" text-gray-600">
                Phone Number:
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full py-2 px-5 mt-2"
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="flex flex-col my-5">
              <label htmlFor="" className=" text-gray-600">
                Specify Details to be Deleted:
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full py-2 px-5 mt-2"
                onChange={(e: any) => setReason(e.target.value)}
              />
            </div>

            <button
              className=" bg-everest-blue-600 text-white py-3 mt-5 rounded-2xl w-full"
              type="button"
              onClick={(e: any) => handleDeleteAccount(e)}
            >
              {loading ? (
                <Refresh
                  className="icon w-6 h-6 animate-spin mx-auto"
                  variant="TwoTone"
                />
              ) : (
                <>Delete</>
              )}
            </button>
          </form>
        </div>
      </section>
      <Toaster />

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
