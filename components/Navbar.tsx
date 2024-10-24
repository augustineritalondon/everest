"use client";

import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import Button from "./Button";
import { CloseCircle, HambergerMenu, Menu } from "iconsax-react";
import Link from "next/link";
import Bowser from "bowser";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const [aboutMenu, setAboutMenu] = useState(false);

  const appStoreUrl =
    "https://apps.apple.com/ng/app/everest-ride-delivery-earn/id6456938354"; // Replace YOUR_APP_ID with your app's ID
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=kn.everest.passenger"; // Replace YOUR_PACKAGE_NAME with your app's package name

  const handleDownload = () => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const os = browser.getOS();

    if (os.name === "Android") {
      // Redirect to Google Play Store
      window.location.href = playStoreUrl;
    } else if (os.name === "iOS") {
      // Redirect to Apple App Store
      window.location.href = appStoreUrl;
    } else if (os.name === "macOS") {
      // Redirect to a general download or information page for desktops and laptops
      window.location.href = appStoreUrl;
    } else {
      window.location.href = playStoreUrl;
    }
  };

  return (
    <div className="md:flex justify-between w-[90%] mx-auto py-5 md:py-8 relative 3xl:w-[70%]">
      <div className="flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          className=""
          width={118}
          height={29}
          onClick={() => router.push("/")}
        />

        {menu ? (
          <CloseCircle
            size="28"
            color="#0b84fa"
            className=" md:hidden cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <HambergerMenu
            size="28"
            color="#0b84fa"
            className=" md:hidden cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* mobile view */}
      <div
        className={`md:hidden  md:h-full grid items-center text-center bg-white transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          menu ? "max-h-[80vh] p-4" : "max-h-0"
        }`}
      >
        <div className="md:flex">
          <div className="md:flex items-center">
            <Link href="/" className="md:mx-5 my-10 md:my-0 cursor-pointer">
              Home
            </Link>
            <Menubar className="border-none md:mx-5 my-10 md:my-0 cursor-pointer">
              <MenubarMenu>
                <MenubarTrigger className="p-0 flex items-center">
                  About Us{" "}
                  <svg
                    width="16"
                    height="16"
                    className="ml-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M10.32 8.82004L7.79335 5.45337H4.05335C3.41335 5.45337 3.09335 6.2267 3.54668 6.68004L7.00002 10.1334C7.55335 10.6867 8.45335 10.6867 9.00668 10.1334L10.32 8.82004Z"
                      fill="#292D32"
                    />
                    <path
                      d="M11.9467 5.45337H7.79333L10.32 8.82004L12.46 6.68004C12.9067 6.2267 12.5867 5.45337 11.9467 5.45337Z"
                      fill="#292D32"
                    />
                  </svg>
                </MenubarTrigger>
                {/* <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent> */}
              </MenubarMenu>
            </Menubar>
            <p className="md:mx-5 my-10 md:my-0 cursor-pointer">FAQs</p>
          </div>
          <div className=" md:hidden">
            <Button mode="blue">Download the app</Button>
          </div>
        </div>
      </div>
      {/* {menu && (
      )} */}

      {/* desktop view */}
      <div className="hidden h-[80vh] md:h-full md:grid items-center text-center ">
        <div className="md:flex ">
          <div className="md:flex items-center">
            <Link href="/" className="md:mx-5 my-10 md:my-0 cursor-pointer">
              Home
            </Link>

            <p
              className="p-0 flex items-center cursor-pointer"
              onMouseEnter={() => setAboutMenu(true)}
              // onMouseLeave={() => setAboutMenu(false)}
            >
              About Us{" "}
              <svg
                width="16"
                height="16"
                className="ml-1"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M10.32 8.82004L7.79335 5.45337H4.05335C3.41335 5.45337 3.09335 6.2267 3.54668 6.68004L7.00002 10.1334C7.55335 10.6867 8.45335 10.6867 9.00668 10.1334L10.32 8.82004Z"
                  fill="#292D32"
                />
                <path
                  d="M11.9467 5.45337H7.79333L10.32 8.82004L12.46 6.68004C12.9067 6.2267 12.5867 5.45337 11.9467 5.45337Z"
                  fill="#292D32"
                />
              </svg>
            </p>

            {/* <div
              className={`${
                aboutMenu ? "block" : "hidden"
              } bg-red-300 absolute w-[60%] top-16 left-1/2 transform -translate-x-1/2 rounded-md `}
              onMouseEnter={() => setAboutMenu(true)}
              onMouseLeave={() => setAboutMenu(false)}
            >
              I love rita
            </div> */}

            <p className="md:mx-5 my-10 md:my-0 cursor-pointer">FAQs</p>
          </div>
          <div className=" md:hidden">
            <Button mode="blue">Download the app</Button>
          </div>
        </div>
      </div>

      <Link
        href=""
        target="_blank"
        className="hidden md:block"
        onClick={() => handleDownload()}
      >
        <Button mode="blue">Download the app</Button>
      </Link>
    </div>
  );
};

export default Navbar;
