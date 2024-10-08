import React from "react";
import Button from "./Button";
import { heroImage } from "./svgs/heroPhone";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-[90%] mx-auto py-5 border-b-4 border-gray-50">
      <div className="lg:grid grid-cols-2 gap-10 items-center 3xl:w-[70%] mx-auto">
        <div className=" text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl xl:text-[64px] !leading-[1.1] font-semibold tracking-wider">
            Get anywhere you want to get with{" "}
            <span className=" text-everest-blue-600">convenience</span>{" "}
          </h1>

          <div className="lg:w-[90%]">
            <p className="my-8 text-sm xl:text-base">
              Get a driver to wherever, and send packages to anywhere on the
              Everest App. Get a lift and get paid while at it.
            </p>

            <div className="grid grid-cols-2 gap-3 lg:gap-8">
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

            <div className="grid grid-cols-3 gap-3 xl:gap-8 mt-8">
              <div className="border border-everest-blue-600 rounded-xl lg:rounded-3xl text-center p-2 md:p-3 xl:p-5">
                <svg
                  width="33"
                  height="32"
                  className="mx-auto w-[23px] md:w-[32px]"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="32"
                    height="32"
                    rx="6.73684"
                    fill="#3BAD49"
                    fill-opacity="0.1"
                  />
                  <g clip-path="url(#clip0_154_28400)">
                    <path
                      d="M26.6974 12.5062C25.5161 7.30875 20.9824 4.96875 16.9999 4.96875C16.9999 4.96875 16.9999 4.96875 16.9886 4.96875C13.0174 4.96875 8.47236 7.2975 7.29111 12.495C5.97486 18.3 9.52986 23.2162 12.7474 26.31C13.9399 27.4575 15.4699 28.0312 16.9999 28.0312C18.5299 28.0312 20.0599 27.4575 21.2411 26.31C24.4586 23.2162 28.0136 18.3112 26.6974 12.5062ZM16.9999 18.1425C15.0424 18.1425 13.4561 16.5562 13.4561 14.5987C13.4561 12.6412 15.0424 11.055 16.9999 11.055C18.9574 11.055 20.5436 12.6412 20.5436 14.5987C20.5436 16.5562 18.9574 18.1425 16.9999 18.1425Z"
                      fill="#3BAD49"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_154_28400">
                      <rect
                        width="27"
                        height="27"
                        fill="white"
                        transform="translate(3.5 3)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="mt-1 md:mt-5 text-[10px] md:text-xs xl:text-sm">
                  Quick and Convenient Rides
                </p>
              </div>

              <div className="border border-everest-blue-600 rounded-xl lg:rounded-3xl text-center p-2 md:p-3 xl:p-5">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  className="mx-auto w-[23px] md:w-[32px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="32"
                    height="32"
                    rx="6.73684"
                    fill="#0B84FA"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M23.75 5.25H10.25C8.3825 5.25 6.875 6.74625 6.875 8.59125V20.865C6.875 22.71 8.3825 24.2062 10.25 24.2062H11.105C12.005 24.2062 12.86 24.555 13.49 25.185L15.4137 27.0862C16.2912 27.9525 17.72 27.9525 18.5975 27.0862L20.5212 25.185C21.1512 24.555 22.0175 24.2062 22.9062 24.2062H23.75C25.6175 24.2062 27.125 22.71 27.125 20.865V8.59125C27.125 6.74625 25.6175 5.25 23.75 5.25ZM15.1775 17.6362C15.6387 17.6362 16.0212 18.0187 16.0212 18.48C16.0212 18.9412 15.6387 19.3237 15.1775 19.3237H12.1625C11.6675 19.3237 11.2062 19.0875 10.9137 18.6825C10.6325 18.3 10.565 17.8275 10.7 17.3775C11.0937 16.1737 12.0612 15.5212 12.9162 14.9362C13.8162 14.3287 14.3225 13.9462 14.3225 13.2937C14.3225 12.7087 13.85 12.2362 13.265 12.2362C12.68 12.2362 12.2187 12.72 12.2187 13.305C12.2187 13.7662 11.8362 14.1487 11.375 14.1487C10.9137 14.1487 10.5312 13.7662 10.5312 13.305C10.5312 11.7975 11.7575 10.56 13.2762 10.56C14.795 10.56 16.0212 11.7862 16.0212 13.305C16.0212 14.8912 14.8287 15.7012 13.8725 16.3537C13.2762 16.7587 12.7137 17.1412 12.4325 17.6475H15.1775V17.6362ZM22.625 17.715H22.3887V18.4912C22.3887 18.9525 22.0062 19.335 21.545 19.335C21.0837 19.335 20.7012 18.9525 20.7012 18.4912V17.715H18.4962C18.4962 17.715 18.4962 17.715 18.485 17.715C17.9337 17.715 17.4275 17.4225 17.1462 16.95C16.865 16.4662 16.865 15.87 17.1462 15.3975C17.9112 14.0812 18.8 12.585 19.61 11.28C19.97 10.7062 20.6562 10.4475 21.2975 10.6275C21.9387 10.8187 22.3887 11.4037 22.3775 12.0787V16.0387H22.625C23.0862 16.0387 23.4687 16.4212 23.4687 16.8825C23.4687 17.3437 23.0862 17.715 22.625 17.715Z"
                    fill="#0B84FA"
                  />
                  <path
                    d="M20.7011 16.0277V12.7202C20.0373 13.8002 19.351 14.959 18.7323 16.0165H20.7011V16.0277Z"
                    fill="#0B84FA"
                  />
                </svg>

                <p className="mt-1 md:mt-5 text-[10px] md:text-xs xl:text-sm">
                  24/7 Support and easy access
                </p>
              </div>

              <div className="border border-everest-blue-600 rounded-xl lg:rounded-3xl text-center p-2 md:p-3 xl:p-5">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  className="mx-auto w-[23px] md:w-[32px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="32"
                    height="32"
                    rx="6.73684"
                    fill="#F6B60B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M24.6257 8.22481L18.1648 5.31747C17.2166 4.89418 15.7834 4.89418 14.8352 5.31747L8.37431 8.22481C6.74256 8.96 6.5 9.96253 6.5 10.4972C6.5 11.0319 6.74256 12.0344 8.37431 12.7696L14.8352 15.677C15.3093 15.8886 15.9046 16 16.5 16C17.0954 16 17.6907 15.8886 18.1648 15.677L24.6257 12.7696C26.2574 12.0344 26.5 11.0319 26.5 10.4972C26.5 9.96253 26.2685 8.96 24.6257 8.22481Z"
                    fill="#F6B60B"
                  />
                  <path
                    d="M17.5057 23C17.0736 23 16.6416 22.9057 16.2437 22.729L8.58062 19.1944C7.40956 18.6524 6.5 17.2032 6.5 15.8719C6.5 15.3888 6.87519 15 7.34134 15C7.80749 15 8.18269 15.3888 8.18269 15.8719C8.18269 16.5081 8.69432 17.3328 9.26279 17.592L16.9258 21.1267C17.2897 21.2916 17.7103 21.2916 18.0742 21.1267L25.7372 17.592C26.3057 17.3328 26.8173 16.5199 26.8173 15.8719C26.8173 15.3888 27.1925 15 27.6587 15C28.1248 15 28.5 15.3888 28.5 15.8719C28.5 17.1915 27.5904 18.6524 26.4194 19.1944L18.7563 22.729C18.3698 22.9057 17.9377 23 17.5057 23Z"
                    fill="#F6B60B"
                  />
                  <path
                    d="M17.5057 28C17.0736 28 16.6416 27.9057 16.2437 27.729L8.58062 24.1944C7.3186 23.6171 6.5 22.3093 6.5 20.8719C6.5 20.3888 6.87519 20 7.34134 20C7.80749 20 8.18269 20.3888 8.18269 20.8719C8.18269 21.6141 8.60336 22.2857 9.26279 22.592L16.9258 26.1267C17.2897 26.2916 17.7103 26.2916 18.0742 26.1267L25.7372 22.592C26.3853 22.2975 26.8173 21.6141 26.8173 20.8719C26.8173 20.3888 27.1925 20 27.6587 20C28.1248 20 28.5 20.3888 28.5 20.8719C28.5 22.3093 27.6814 23.6053 26.4194 24.1944L18.7563 27.729C18.3698 27.9057 17.9377 28 17.5057 28Z"
                    fill="#F6B60B"
                  />
                </svg>

                <p className="mt-1 md:mt-5 text-[10px] md:text-xs xl:text-sm">
                  Car Rental Services and easy rides
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 lg:mt-0">{heroImage}</div>
      </div>
    </div>
  );
};

export default Hero;
