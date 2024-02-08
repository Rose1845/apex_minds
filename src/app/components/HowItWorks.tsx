import { Bungee_Spice, Inter } from "next/font/google";
import React from "react";
const buge = Bungee_Spice({
  subsets: ["vietnamese", "latin", "latin-ext"],
  display: "auto",
  weight: "400",
});

function HowItWorks() {
  return (
    <section className="w-full" id="works">
      <div className="max-w-7xl mx-auto ">
        <div className="container">
          <div className="flex text-neutral-900 mt-8 flex-col -tracking-normal text-2xl font-bold text-center">
            <span className="text-xl font-medium uppercase pt-2">
              How it works
            </span>
            <span className="text-3xl font-bold">Three steps, then relax</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <div className="flex flex-col mx-auto ">
              <div className="w-full">
                <div className="container flex flex-col items-center gap-16 mx-auto my-8">
                  <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-3 px-8 py-10 rounded-3xl shadow-main">
                      <span className={buge.className}>
                        <h1 className=" text-4xl">1</h1>
                      </span>
                      <p className="text-2xl font-extrabold text-neutral-900">
                        Application{" "}
                      </p>
                      <p className="text-base leading-7 text-neutral-900">
                        Share your business goals and challenges with us. We
                        specialize in transforming your ideas into innovative
                        solutions for success.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 px-8 py-10  rounded-3xl shadow-main">
                      <span className={buge.className}>
                        <h1 className="text-[#581ff8] text-4xl">2</h1>
                      </span>
                      <p className="text-2xl font-extrabold text-neutral-900">
                        Review{" "}
                      </p>
                      <p className="text-base leading-7 text-neutral-900">
                        Our team of experts carefully evaluates your unique
                        requirements. We analyze market trends and industry best
                        practices to provide valuable insights and
                        recommendations.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 px-8 py-10  rounded-3xl shadow-main">
                      <span className={buge.className}>
                        <h1 className="text-[#581ff8] text-4xl">3</h1>
                      </span>
                      <p className="text-2xl font-extrabold text-neutral-900">
                        Confirmation
                      </p>
                      <p className="text-base leading-7 text-neutral-900">
                        Once we align on the best strategy for your business, we
                        ensure a secure and transparent confirmation process.
                        Your satisfaction is our priority, and we move forward
                        with your approved plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
