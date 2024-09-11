import React from "react";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-everest-gray-950 text-white p-8 lg:p-24 xl:p-32 ">
      <div className="3xl:w-[70%] mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[30%]">
            <Image
              src="/images/logowhite.png"
              alt="logo"
              className=""
              width={118}
              height={29}
            />
            <p className="mt-5 text-sm lg:text-base">
              Get a driver to wherever, and send packages to anywhere on the
              Everest App. Get a lift and get paid while at it,
            </p>
          </div>

          <div className="lg:w-[30%] xl:w-[23%] flex justify-between mt-8 lg:mt-0">
            <div>
              <ul>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  About
                </li>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  Company
                </li>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  FAQs
                </li>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  Blog
                </li>
                <Link
                  href="/delete"
                  className="mt-2 text-sm lg:text-base cursor-pointer"
                >
                  Delete
                </Link>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  Help
                </li>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  Help Center
                </li>
                <li className="mt-2 text-sm lg:text-base cursor-pointer">
                  Support Team
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:flex justify-between">
          <div>
            <p className=" text-sm lg:text-base">
              2024 @ Everest, All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="lg:flex">
              <li className=" text-sm lg:text-base mt-3 lg:mt-0 cursor-pointer">
                Terms & Conditions{" "}
              </li>
              <Link
                href="/privacy-policy"
                className="lg:ml-10 text-sm lg:text-base mt-3 lg:mt-0 cursor-pointer"
              >
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
