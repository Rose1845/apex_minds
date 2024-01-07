import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaCloudscale } from "react-icons/lia";
import { FaChalkboardUser } from "react-icons/fa6";
function Why() {
  return (
    <div className="max-w-7xl mx-auto " id="features">
      <div className="container">
        <div className="flex mt-8 flex-col -tracking-normal text-2xl font-bold text-center">
          <span className="text-2xl font-medium ">Why choose us?</span>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <div className="flex flex-col mx-auto bg-white">
            <div className="w-full">
              <div className="container flex flex-col items-center gap-16 mx-auto my-8">
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <span>
                      <FaChalkboardUser className="text-[#581ff8] text-4xl" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Innovation{" "}
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      We thrive on innovation and continuously seek new and
                      effective ways to propel your business forward.
                    </p>
                    {/* <a
                      className="text-lg font-bold text-purple-blue-500"
                      href="mailto: hello@loopple.com"
                    >
                      hello@loopple.com
                    </a> */}
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <span>
                      <LiaCloudscale className="text-[#581ff8] text-4xl" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Expertise{" "}
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      Our team consists of seasoned professionals with a wealth
                      of experience in marketing, accounting, and financial
                      planning.
                    </p>
                    {/* <a
                      className="text-lg font-bold text-purple-blue-500"
                      href="tel:+516-486-5135"
                    >
                      +516-486-5135
                    </a> */}
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <span>
                      <MdOutlineSecurity className="text-[#581ff8] text-4xl" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Client-Centric Approach{" "}
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      Your success is our success. We prioritize a
                      client-centric approach, tailoring our services to meet
                      your unique needs and challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
