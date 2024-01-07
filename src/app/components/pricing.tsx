import React from "react";
import { basicMarketing, premiumMarketing, proMarketing } from "../../data";
type Props = {};
function Pricing({}: Props) {
  const plans = [basicMarketing, proMarketing, premiumMarketing];

  return (
    <section className="bg-[#0F172B]" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
            Choose your pricing plan.
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at ApexMinds Solutions we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0  ">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg  xl:p-8  "
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.desc}{" "}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl text-mediumBlue font-extrabold">
                  {plan.price}{" "}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feat, i) => (
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-white bg-orange-500 hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
