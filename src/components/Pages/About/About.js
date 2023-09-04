import React from "react";
// import Hero from "./Hero";
export default function About() {
  return (
    <>
      {/* <Hero /> */}
      <div className="container mx-auto my-5 py-5">
        <div className="grid grid-rows-1 gap-4">
          <div className="border border-gray-300 bg-white p-5">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {/* Left Column (Image) */}
              <div className="container flex flex-row flex-wrap object-contain w-2 h-2">
                <img src="/assets/logo.png" alt="/" className=" object-contain w-[100px] h-[100px]" />
              </div>

              {/* Middle Column */}
              <div className="md:col-span-4 px-3">
                <div className="grid grid-rows-2">
                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 ">
                      Hilwa
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                      <p className="text-gray-400">Address</p>
                      <p>P.O Box : 3309, Al Ras, Dubai, U.A.E</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-gray-400">Product Reviews</p>
                      <p>10,000+</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-gray-400">Industry:</p>
                      <p className="text-gray-400">Dairy</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-gray-400">Type:</p>
                      <p className="text-gray-400">Public Company</p>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                      <div>
                        <p>Email us: info@safaglobal.com</p>
                        <p>Call us: +971 4 226 2661</p>
                      </div>
                      <div className="md:col-span-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="flex justify-center">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5">
          <div className="bg-white border border-gray-300 rounded-md  p-4 col-span-4">
            <div>
              <p className="text-2xl font-bold">About Us:</p>
              <p className="mt-4">
                {" "}
                Welcome to Hilwa Milk, a brand of Safa International Company! Based in the United Arab Emirates, we are a leading provider of high-quality dairy products, serving customers in the MENA region and East Africa. With a rich history spanning 25 years, our commitment to excellence has made us a trusted name in the industry.
              </p>
          
              <p className="mt-3">
                <span className="font-bold"> At Hilwa Milk,</span>
               we understand the importance of wholesome and nourishing dairy products for a healthy lifestyle. That's why we source our milk from the pristine lands of New Zealand, renowned for its lush pastures and world-class dairy farming practices. Our dedication to quality starts right from the source, ensuring that you receive the finest milk products that meet the highest standards of purity and taste.
              </p>
              <p className="mt-2">
                <span className="font-bold">  At Hilwa Milk,</span>
               we value our customers and aim to exceed their expectations. Our team of passionate professionals works tirelessly to deliver exceptional products and unparalleled customer service. We are constantly innovating and evolving, driven by a desire to bring you the best dairy products that cater to your evolving tastes and preferences.
              </p>
             
              
              <p className="mt-2">
                <span className="font-bold">  Contact us</span>
                today to learn more about our products and how we can serve your dairy needs. Thank you for choosing Hilwa Milk, Full of nutrition.
              </p>
            </div>
            
          </div>
          <div className="text-center col-span-2 ">
            <div className="grid grid-rows-4  gap-4">
             
              <div className="border bg-white border-gray-300 rounded-md p-3">
                <div className="grid grid-rows-1 gap-4">
                  <div>
                    <p className="text-lg font-bold">
                  Our employs care about
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <p>
                          Quality: <span className="font-bold">89%</span>
                        </p>
                      </div>
                   
                      <div>
                        <p>
                          Environment: <span className="font-bold">89%</span>
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
