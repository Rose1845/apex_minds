import Image from "next/image";
import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";
import Why from "./components/why";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="w-full h-full">
      <div
        className="relative rounded-lg h-[80vh] bg-cover bg-center flex items-center  bg-[url('https://img.freepik.com/free-photo/high-angle-woman-working-laptop_23-2149908209.jpg?size=626&ext=jpg&ga=GA1.1.594574614.1701804463&semt=ais')]"
        id="home"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#0f172be6] to-[#0f172be6] z-1"></div>
        <div className="relative z-3 container max-w-7xl  mx-auto ">
          <div className="flex items-center lg:grid lg:grid-cols-2">
            <div className="pl-10 max-w-1/2">
              <span className="opacity-100">
                <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight o">
                  Your marketing and accounts expertss,for your future
                </h1>
              </span>
              <span className="opacity-100">
                <p className="text-lg text-white mb-8 o">
                  At ApexMinds Solutions, we believe in the power of innovative
                  thinking and strategic solutions.
                  {/* Our mission is to empower
                businesses through cutting-edge marketing strategies and
                meticulous financial management. We are more than just a service
                provider; we are your trusted partner on the journey to success. */}
                </p>
              </span>
              <div className="flex gap-3 items-center space-x-3">
                <button className="bg-orange-500 text-white px-8 py-4 font-bold  hover:bg-orange-600 transition duration-300">
                  Get a free demo now{" "}
                </button>
                <div>
                  <FaArrowTurnDown className="h-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Why />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
