"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import CountUp from "react-countup";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";

import axios from "axios";
import { Refresh } from "iconsax-react";

export default function Home() {
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [reason, setReason] = useState();

  const [loading, setLoading] = useState(false);

  const [state, handleSubmit] = useForm("mgvevnae");

  if (state.succeeded) {
    return toast("Thanks for your submission!");
  }

  const handleDeleteAccount = async (e: any) => {
    setLoading(true);
    e.preventDefault();

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
    <main className="">
      <div className="bg-hero-bg">
        <Navbar />
        <Hero />
      </div>

      <section className="w-[90%] mx-auto 3xl:w-[70%]">
        {/* 2nd */}
        <div className="md:flex justify-between my-20 lg:my-24 xl:my-32 bg-everest-gray-950 text-white rounded-3xl p-8 xl:p-12 text-center lg:text-left">
          <div className="lg:mt-0 lg:flex items-center">
            <h1 className="text-xl lg:text-3xl xl:text-5xl font-semibold">
              <CountUp start={1} end={10} duration={20} />K
            </h1>
            <p className=" text-xs xl:text-sm ml-2">Satisfied Customers.</p>
          </div>
          <div className="mt-5 md:mt-0 lg:flex items-center">
            <h1 className="text-xl lg:text-3xl xl:text-5xl font-semibold">
              <CountUp start={1} end={85} duration={30} />K
            </h1>
            <p className=" text-xs xl:text-sm ml-2">Successful Trips</p>
          </div>
          <div className="mt-5 md:mt-0 lg:flex items-center">
            <h1 className="text-xl lg:text-3xl xl:text-5xl font-semibold">
              <CountUp start={1} end={24} duration={20} />
              /<CountUp start={1} end={7} duration={30} />
            </h1>
            <p className=" text-xs xl:text-sm ml-2">
              Customer support and <br /> interaction
            </p>
          </div>
        </div>

        {/* 4th */}
        <div className="mb-20 lg:mb-24 xl:mb-32">
          <div className="text-center mb-10 lg:mb-16">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold">
              Quick and Convenient Rides
            </h1>
            <p className="text-sm lg:text-xl xl:text-2xl my-3 lg:my-5">
              {" "}
              Experience the ease of bookin a ride with just a tap on the
              Everest app
            </p>
          </div>

          <div className="bg-[#f4f4f4] rounded-xl lg:rounded-3xl relative grid lg:grid-cols-2 overflow-hidden pt-3 lg:pt-10">
            <Image
              src="/images/backdrop.png"
              alt="Vercel Logo"
              className="absolute top-0 -left-5"
              width={270}
              height={320}
            />

            <div className="p-5 lg:px-12">
              <h1 className="text-xl lg:text-3xl font-bold">
                Easy Wallet Payment
              </h1>
              <p className="text-sm lg:text-lg mt-5">
                Enjoy the convenience of seamless transactions with
                Everest&apos;s Easy Wallet Payment feature.
              </p>
            </div>
            <div>
              <Image
                src="/images/wallet.png"
                alt="Vercel Logo"
                className="mx-auto"
                data-aos="fade-up"
                width={528}
                height={320}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <div className="bg-[#f4f4f4] rounded-xl lg:rounded-3xl relative overflow-hidden pt-3 lg:pt-10">
              <Image
                src="/images/backdrop.png"
                alt="Vercel Logo"
                className="absolute top-0 -left-5"
                width={270}
                height={320}
              />

              <div className="p-5 lg:px-12">
                <h1 className="text-xl lg:text-3xl font-bold">Rides History</h1>
                <p className="text-sm lg:text-lg mt-5">
                  Easily access detailed records of all your past rides directly
                  within the app.
                </p>
              </div>
              <div className="lg:mt-8">
                <Image
                  src="/images/history.png"
                  alt="Vercel Logo"
                  className="mx-auto"
                  data-aos="fade-up"
                  width={528}
                  height={320}
                />
              </div>
            </div>
            <div className="bg-[#f4f4f4] rounded-xl lg:rounded-3xl relative overflow-hidden pt-3 lg:pt-10">
              <Image
                src="/images/backdrop.png"
                alt="Vercel Logo"
                className="absolute top-0 -left-5"
                width={270}
                height={320}
              />

              <div className="p-5 lg:px-12">
                <h1 className="text-xl lg:text-3xl font-bold">
                  Quick and Convenient Rides
                </h1>
                <p className="text-sm lg:text-lg mt-5">
                  Experience the ease of booking a ride with just a tap on the
                  Everest app.{" "}
                </p>
              </div>

              <div className="lg:mt-8">
                <Image
                  src="/images/rides.png"
                  alt="Vercel Logo"
                  className="mx-auto"
                  data-aos="fade-up"
                  width={528}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="mb-20 lg:mb-32">
        <Image
          src="/images/map.png"
          alt="Vercel Logo"
          className="w-full"
          width={1440}
          height={800}
        />
      </section>

      <section className="w-[90%] mx-auto 3xl:w-[70%]">
        {/* 3rd */}
        <div className="mb-20 lg:mb-24 xl:mb-32">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold">
              Book your Ride, It’s easy!
            </h1>
            <p className="text-sm lg:text-xl xl:text-2xl my-3 lg:my-5">
              {" "}
              Experience the ease of booking a ride with just a tap on the
              Everest app.{" "}
            </p>
          </div>

          <div className="lg:flex  items-center gap-10 mt-12">
            {/* <div className="">{imageGirl}</div> */}
            <div className="relative w-full lg:w-[535px] ">
              <Image
                src="/images/groupImage.png"
                alt="Vercel Logo"
                className="w-full lg:w-[535px] "
                width={535}
                height={587}
              />
              <Image
                src="/images/star.png"
                alt="Vercel Logo"
                className="absolute top-0 -left-5 lg:top-6 lg:-left-5 star"
                width={77}
                height={76}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-8 2xl:gap-10 pt-12 lg:w-[60%] ">
              <div className=" bg-[#f4f4f4] rounded-3xl p-5 2xl:p-8 2xl:py-10">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="w-[35px] xl:w-[48px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 43C33.3579 43 43 33.3537 43 21.5C43 9.64212 33.3537 0 21.5 0C9.64212 0 0 9.64627 0 21.5C0 33.3579 9.64627 43 21.5 43ZM21.5 3.31575C31.5262 3.31575 39.6743 11.4709 39.6743 21.49C39.6743 31.5091 31.5191 39.6643 21.5 39.6643C11.4738 39.6643 3.32573 31.5091 3.32573 21.49C3.32573 11.4738 11.4744 3.31575 21.5 3.31575Z"
                    fill="#0B7EEE"
                  />
                  <path
                    d="M39.9447 37.5113C39.2934 36.8462 38.2078 36.83 37.5264 37.4626C36.8417 38.0952 36.825 39.1496 37.4763 39.8114L45.062 47.4842C45.396 47.8248 45.8503 48 46.2945 48C46.7221 48 47.1496 47.8508 47.4736 47.5361C48.1583 46.9034 48.175 45.8491 47.5237 45.1872L39.9447 37.5113Z"
                    fill="#0B7EEE"
                  />
                </svg>

                <h1 className="font-semibold lg:text-lg xl:text-2xl my-2 2xl:my-3 2xl:mt-5">
                  Find your Ride
                </h1>
                <p className=" text-sm xl:text-base">
                  Quickly track your driver&apos;s location in real time,
                  ensuring a smooth and timely pickup.
                </p>
              </div>
              <div className=" bg-[#f4f4f4] rounded-3xl p-5 2xl:p-8 2xl:py-10">
                <svg
                  width="38"
                  height="47"
                  viewBox="0 0 38 47"
                  className="w-[28px] xl:w-[38px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0115 34.3529L29.1344 46.239C29.3374 46.7055 29.8032 47.0047 30.3166 46.9999C30.8301 46.9952 31.2886 46.6866 31.4821 46.2177C31.6134 45.9091 31.6134 45.5604 31.4821 45.2517L26.3879 33.4833L32.8052 33.5563C32.8935 33.5328 32.9628 33.4644 32.9867 33.3773C33.0201 33.2807 32.9891 33.1747 32.9103 33.111L19.0485 20L19.0007 38.9356C18.9935 39.0321 19.0413 39.124 19.1249 39.1735C19.2085 39.223 19.3112 39.2253 19.3972 39.1782L24.0115 34.3529Z"
                    fill="#DC2626"
                  />
                  <path
                    d="M18.9965 6.00024C22.9163 6.01908 26.621 7.76561 29.0871 10.7596C31.5534 13.7537 32.5233 17.6796 31.7283 21.453C31.6971 21.5942 31.6085 21.7166 31.4816 21.7919C31.3547 21.8719 31.1967 21.8955 31.0506 21.8555C30.768 21.7778 30.5956 21.4977 30.6579 21.2152C31.2949 18.2447 30.7345 15.1473 29.0943 12.5743C27.454 10.0016 24.8608 8.15384 21.8627 7.42177C18.8647 6.68735 15.6965 7.12754 13.0195 8.64572C10.3448 10.1639 8.37413 12.6425 7.51924 15.5615C6.6668 18.4803 6.99963 21.6108 8.44592 24.2916C9.89223 26.975 12.3418 29.0016 15.2778 29.9455C15.4885 30.009 15.6394 30.1926 15.6609 30.4092C15.6825 30.6257 15.5676 30.8329 15.3736 30.9341C15.2946 30.9765 15.206 31 15.115 31C15.0599 31 15.0048 30.9906 14.9522 30.9718C10.9988 29.6936 7.90755 26.6337 6.62883 22.743C5.35256 18.8498 6.04217 14.5919 8.48696 11.2819C10.9317 7.97199 14.8366 6.00965 18.9965 6.00024Z"
                    fill="#DC2626"
                  />
                  <path
                    d="M19.0027 0.00854446C12.9247 0.0156769 7.21398 2.91611 3.63955 7.8135C0.0623634 12.7134 -0.947044 19.0182 0.919104 24.7837C2.78525 30.5466 7.30495 35.0755 13.0799 36.9683C13.2422 37.023 13.4187 37.0063 13.5691 36.9231C13.7194 36.8423 13.8316 36.702 13.8745 36.5356C13.9581 36.2123 13.7743 35.8842 13.4569 35.7819C9.08269 34.3555 5.43385 31.2957 3.27917 27.2448C1.12449 23.1939 0.630321 18.4697 1.90224 14.0621C3.17415 9.65669 6.11177 5.91203 10.097 3.62057C14.0822 1.32874 18.8049 0.665406 23.2719 1.77091C27.7368 2.87878 31.598 5.66748 34.0416 9.55213C36.4876 13.4368 37.3229 18.113 36.3755 22.5997C36.3087 22.9231 36.5019 23.2417 36.8193 23.3296C36.9864 23.3748 37.163 23.351 37.3085 23.2607C37.4517 23.1751 37.552 23.0324 37.5877 22.8708C38.7738 17.2862 37.3706 11.4689 33.7672 7.03018C30.1638 2.59388 24.744 0.0121724 19.0149 0L19.0027 0.00854446Z"
                    fill="#DC2626"
                  />
                </svg>

                <h1 className="font-semibold lg:text-lg xl:text-2xl my-2 2xl:my-3 2xl:mt-5">
                  Book your Trip
                </h1>
                <p className="text-sm xl:text-base">
                  Easily schedule your ride with just a few taps. Book your trip
                  and enjoy a seamless travel experience.
                </p>
              </div>
              <div className=" bg-[#f4f4f4] rounded-3xl p-5 2xl:p-8 2xl:py-10">
                <svg
                  width="55"
                  height="37"
                  viewBox="0 0 55 37"
                  className="w-[38px] xl:w-[55px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.2258 0H1.77419C1.30365 0 0.852375 0.185629 0.51965 0.51605C0.186924 0.846471 0 1.29462 0 1.7619V35.2381C0 35.7054 0.186924 36.1535 0.51965 36.484C0.852375 36.8144 1.30365 37 1.77419 37H53.2258C53.6964 37 54.1476 36.8144 54.4804 36.484C54.8131 36.1535 55 35.7054 55 35.2381V1.7619C55 1.29462 54.8131 0.846471 54.4804 0.51605C54.1476 0.185629 53.6964 0 53.2258 0ZM18.425 21.46C18.3505 21.3708 18.2591 21.2971 18.1559 21.243C18.0526 21.189 17.9397 21.1557 17.8235 21.145C17.7073 21.1344 17.5902 21.1466 17.4788 21.181C17.3673 21.2154 17.2638 21.2713 17.1742 21.3455L1.77419 34.0929V2.88952L26.95 22.7021C27.1066 22.825 27.3004 22.8919 27.5 22.8919C27.6996 22.8919 27.8934 22.825 28.05 22.7021L53.2258 2.88952V34.0929L37.8258 21.3455C37.7361 21.2714 37.6326 21.2157 37.5212 21.1813C37.4098 21.147 37.2927 21.1348 37.1765 21.1455C37.0604 21.1561 36.9475 21.1894 36.8443 21.2433C36.7411 21.2973 36.6496 21.3709 36.575 21.46C36.5004 21.5491 36.4443 21.6519 36.4097 21.7625C36.3752 21.8731 36.3629 21.9894 36.3736 22.1048C36.3843 22.2201 36.4178 22.3323 36.4721 22.4347C36.5265 22.5372 36.6006 22.6281 36.6903 22.7021L51.8419 35.2381H3.15806L18.3097 22.7021C18.3995 22.6282 18.4738 22.5374 18.5282 22.4349C18.5826 22.3324 18.6161 22.2202 18.6268 22.1048C18.6376 21.9894 18.6252 21.8731 18.5906 21.7624C18.556 21.6518 18.4997 21.549 18.425 21.46ZM3.20242 1.7619H51.7976L27.5 20.8874L3.20242 1.7619Z"
                    fill="#22C55E"
                  />
                </svg>

                <h1 className="font-semibold lg:text-lg xl:text-2xl my-2 2xl:my-3 2xl:mt-5">
                  Confirm Your Ride
                </h1>
                <p className="text-sm xl:text-base">
                  Get instant confirmation for your ride bookings, ensuring your
                  trip is set and ready to go.
                </p>
              </div>
              <div className=" bg-[#f4f4f4] rounded-3xl p-5 2xl:p-8 2xl:py-10">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  className="w-[38px] xl:w-[51px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.4936 0.0270678C21.3672 -0.245518 16.4959 1.54827 12.794 5.06552C9.08328 8.59155 7.03448 13.3486 7.03448 18.4662C7.03448 24.7093 10.1472 30.4864 15.3703 33.9157C16.7421 34.8126 17.5686 36.2722 17.5774 37.811C16.6102 37.811 15.8188 38.6024 15.8188 39.5697V42.2076C15.8188 43.1748 16.6102 43.9662 17.5774 43.9662H17.6302C18.0698 47.9143 21.4288 51.0007 25.4912 51.0007C29.5536 51.0007 32.9126 47.9143 33.3522 43.9662H33.405C34.3722 43.9662 35.1636 43.1748 35.1636 42.2076V39.5697C35.1636 38.6024 34.3722 37.811 33.405 37.811C33.4226 36.2634 34.2491 34.8038 35.6297 33.9069C40.8791 30.4512 43.9919 24.6478 43.9567 18.3695C43.9128 8.75862 36.0781 0.537068 26.4848 0.0358609L26.4936 0.0270678ZM25.5 49.2421C22.4048 49.2421 19.8372 46.9471 19.4064 43.9662H31.5936C31.1628 46.9471 28.5952 49.2421 25.5 49.2421ZM17.5862 42.2076V39.5697H33.4138V42.2076H17.5862ZM26.3793 37.811V24.6214H28.1379V37.811H26.3793ZM23.6271 22.8628L25.5 20.049L27.3729 22.8628H23.6271ZM22.8621 24.6214H24.6207V37.811H22.8621V24.6214ZM34.6712 32.4297C32.7983 33.6607 31.6728 35.6655 31.6552 37.811H29.8966V23.7421C29.8966 23.5662 29.8438 23.3991 29.7471 23.2584L26.2298 17.9826C25.9045 17.4902 25.0955 17.4902 24.7702 17.9826L21.2529 23.2584C21.1562 23.3991 21.1034 23.575 21.1034 23.7421V37.811H19.3448C19.3272 35.6655 18.2105 33.6607 16.3376 32.4384C11.6157 29.3345 8.7931 24.1114 8.7931 18.4662C8.7931 13.8322 10.6397 9.52362 13.9986 6.34052C17.3576 3.15741 21.7541 1.53948 26.3969 1.78569C35.0669 2.24293 42.1629 9.6819 42.1981 18.3783C42.2333 24.0586 39.4107 29.3169 34.6624 32.4384L34.6712 32.4297ZM4.39655 19.3455H0.87931C0.39569 19.3455 0 18.9498 0 18.4662C0 17.9826 0.39569 17.5869 0.87931 17.5869H4.39655C4.88017 17.5869 5.27586 17.9826 5.27586 18.4662C5.27586 18.9498 4.88017 19.3455 4.39655 19.3455ZM4.82741 5.06552C4.43172 4.78414 4.335 4.23896 4.60759 3.84327C4.88897 3.44758 5.43414 3.35086 5.82983 3.62345L8.71397 5.63707C9.10966 5.91845 9.20638 6.46362 8.93379 6.85931C8.76672 7.10552 8.49414 7.23741 8.21276 7.23741C8.0369 7.23741 7.86103 7.18465 7.71155 7.07914L4.82741 5.06552ZM8.93379 30.0643C9.21517 30.46 9.11845 31.014 8.71397 31.2866L5.82983 33.3002C5.68035 33.4057 5.50448 33.4584 5.32862 33.4584C5.04724 33.4584 4.77465 33.3265 4.60759 33.0803C4.32621 32.6847 4.42293 32.1307 4.82741 31.8581L7.71155 29.8445C8.10724 29.5631 8.66121 29.6598 8.93379 30.0643ZM51 18.4662C51 18.9498 50.6043 19.3455 50.1207 19.3455H46.6035C46.1198 19.3455 45.7241 18.9498 45.7241 18.4662C45.7241 17.9826 46.1198 17.5869 46.6035 17.5869H50.1207C50.6043 17.5869 51 17.9826 51 18.4662ZM42.0662 6.8681C41.7848 6.47241 41.8816 5.91845 42.286 5.64586L45.1702 3.63224C45.5659 3.35086 46.1198 3.44758 46.3924 3.85207C46.6738 4.24776 46.5771 4.80172 46.1726 5.07431L43.2884 7.08793C43.139 7.19345 42.9543 7.24621 42.7872 7.24621C42.5059 7.24621 42.2333 7.11431 42.0662 6.8681ZM46.1726 31.8669C46.5683 32.1483 46.665 32.6934 46.3924 33.0891C46.2253 33.3353 45.9528 33.4672 45.6714 33.4672C45.4955 33.4672 45.3197 33.4145 45.1702 33.309L42.286 31.2953C41.8903 31.014 41.7936 30.4688 42.0662 30.0731C42.3476 29.6774 42.8928 29.5807 43.2884 29.8533L46.1726 31.8669Z"
                    fill="#9747FF"
                  />
                </svg>

                <h1 className="font-semibold lg:text-lg xl:text-2xl my-2 2xl:my-3 2xl:mt-5">
                  Ride, Rent, Relax!
                </h1>
                <p className="text-sm xl:text-base">
                  Experience seamless travel with Everest. Book rides and enjoy
                  a hassle-free journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-everest-blue-600 p-8 lg:p-16">
        <div className="3xl:w-[70%] mx-auto">
          <div className="bg-[#f4f4f4] grid lg:grid-cols-2 items-center rounded-xl lg:rounded-3xl pt-5">
            <div className="px-5 lg:px-16">
              <span className="light-bg text-everest-blue-600 p-2 px-4 rounded-full text-xs lg:text-sm xl:text-base">
                Elevate Your Journey
              </span>
              <h1 className="my-4 text-[18px] lg:text-[20px] xl:text-[32px] font-semibold">
                Reach New Heights with Everest
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">
                Discover the ultimate travel experience with Everest. Whether
                you need quick and convenient rides, luxurious car rentals, or
                seamless trip planning, our user-friendly app has you covered.{" "}
              </p>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-8 mt-5 mb-5 lg:mb-0 lg:mt-8">
                <Link
                  href="https://apps.apple.com/ng/app/everest-ride-delivery-earn/id6456938354"
                  target="_blank"
                >
                  <Button mode="dark">
                    <div className="flex items-center justify-center">
                      <svg
                        width="19"
                        height="23"
                        viewBox="0 0 19 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.6542 12.2793C15.6283 9.42505 18.0155 8.03645 18.1246 7.9718C16.7727 6.02086 14.6772 5.7543 13.9408 5.73304C12.1808 5.54973 10.4736 6.77538 9.57711 6.77538C8.66268 6.77538 7.28208 5.75076 5.79412 5.78087C3.87937 5.81009 2.08809 6.90733 1.10565 8.6112C-0.92184 12.0853 0.590281 17.1907 2.53277 19.9989C3.50447 21.3742 4.6399 22.9098 6.12607 22.8558C7.58003 22.7965 8.12315 21.9384 9.87774 21.9384C11.6162 21.9384 12.1262 22.8558 13.6419 22.8213C15.2024 22.7965 16.1848 21.4398 17.1225 20.0521C18.2454 18.4757 18.6964 16.9233 18.7143 16.8436C18.6776 16.8312 15.6837 15.7003 15.6542 12.2793Z"
                          fill="white"
                        />
                        <path
                          d="M12.6056 4.18479C13.3321 3.25713 13.8293 1.99508 13.6913 0.714355C12.6396 0.761884 11.3245 1.45699 10.5672 2.36427C9.89712 3.16377 9.29857 4.4742 9.45319 5.70655C10.6345 5.79651 11.8474 5.09801 12.6056 4.18479Z"
                          fill="white"
                        />
                      </svg>
                      <div className="!text-left ml-2">
                        <span className=" text-[7px] p-0 m-0">
                          Download on the
                        </span>
                        <p className="-mt-2 text-sm">AppStore</p>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=kn.everest.passenger"
                  target="_blank"
                >
                  <Button mode="dark">
                    <div className="flex items-center justify-center">
                      <svg
                        width="23"
                        height="25"
                        viewBox="0 0 23 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7222 12.2355L0.706177 22.5246C0.706554 22.5267 0.707306 22.5285 0.707659 22.5307C1.01484 23.648 2.06929 24.4706 3.32069 24.4706C3.82094 24.4706 4.29061 24.3398 4.69339 24.11L4.72538 24.0918L16.0003 17.7951L10.7222 12.2355Z"
                          fill="#EB3131"
                        />
                        <path
                          d="M20.7449 10.5635L20.7356 10.5568L15.9918 7.64697L10.6474 12.679L16.0104 18.3529L20.7291 15.472C21.5564 14.9994 22.118 14.0766 22.118 13.0125C22.118 11.9559 21.564 11.0377 20.7449 10.5635Z"
                          fill="#F6B60B"
                        />
                        <path
                          d="M0.800251 2.29443C0.738587 2.51322 0.706177 2.74238 0.706177 2.98035V21.4913C0.706177 21.7288 0.738205 21.9588 0.800642 22.1768L11.4121 11.9691L0.800251 2.29443Z"
                          fill="#5778C5"
                        />
                        <path
                          d="M10.8093 13.0002L16.0003 7.75903L4.72435 1.15616C4.31449 0.908227 3.83612 0.765137 3.32426 0.765137C2.07133 0.765137 1.01417 1.62626 0.706554 2.795C0.706177 2.79615 0.706177 2.79693 0.706177 2.79793L10.8093 13.0002Z"
                          fill="#3BAD49"
                        />
                      </svg>

                      <div className="!text-left ml-2">
                        <span className=" text-[7px] p-0 m-0">GET IT ON</span>
                        <p className="-mt-2 text-sm">Google Play</p>
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/two phones.png"
                alt="Vercel Logo"
                className="mx-auto w-[367px] xl:w-[467px]"
                width={467}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center my-20 lg:my-24 xl:my-32 3xl:w-[70%] mx-auto">
        <div className="w-90% lg:w-[50%] mx-auto">
          <span className="light-bg text-everest-blue-600 p-2 px-4 rounded-full text-xs lg:text-sm xl:text-base">
            Don’t miss out on our updates and stories
          </span>
          <h1 className="my-10 text-xl lg:text-3xl xl:text-5xl font-semibold">
            Subscribe to our newsletter & get the latest updates
          </h1>

          {/* <form onSubmit={handleSubmit} className="w-[80%] mx-auto xl-w-full">
            <div className="border border-everest-blue-600 rounded-full flex items-center p-1 justify-between mt-5 lg:mt-16 mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="pl-2 lg:pl-5 py-2 md:py-3 rounded-full w-[60%]  md:w-[70%] focus:outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-everest-blue-600 !px-2 md:!px-3 lg:!px-5 text-[10px] text-white py-2 md:py-3 rounded-3xl text-center text-sm xl:text-base"
              >
                Subscribe Now
              </button>
            </div>
            <ValidationError
              errors={state.errors}
              className="text-left text-red-700 py-2"
            />
          </form> */}

          <form
            action="https://formspree.io/f/mqakawqz"
            method="POST"
            className="w-[80%] mx-auto xl-w-full"
          >
            <div className="border border-everest-blue-600 rounded-full flex items-center p-1 justify-between mt-5 lg:mt-16 mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="pl-2 lg:pl-5 py-2 md:py-3 rounded-full w-[60%]  md:w-[70%] focus:outline-none"
              />
              {/* <Button mode="blue">Subscribe Now</Button> */}
              <button
                type="submit"
                // disabled={state.submitting}
                className="bg-everest-blue-600 !px-2 md:!px-3 lg:!px-5 text-[10px] text-white py-2 md:py-3 rounded-3xl text-center text-sm xl:text-base"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      <Toaster />
    </main>
  );
}
