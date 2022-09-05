import React, { useState } from "react";
import Carddata from "./Data";
const FoodCard = () => {
  const [data, setData] = useState(Carddata);
  console.log(data);
  return (
    <div>
      <h1 className="mt-8 text-center mb-8 text-lime-300 text-3xl font-bold">
        Food Ordering Page
      </h1>
      {/* Card starts */}
      {data.map((e, i) => {
          return (
            <>
      <div className="lg:flex lg:flex-row lg:items-center shadow-md md:row md:d-flex  hover:bg-gray-100">
       
              <a
                href="#"
                className="lg:flex lg:flex-row lg:items-center m-5 bg-white rounded-lg border md:w-11/12 h-56 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover ml-3 w-40 h-48 rounded-t-lg "
                  src={e.imgdata}
                  alt=""
                />
                <div className="justify-between p-2">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {e.rname}{" "}
                  </h5>

                  <div class="text-sm ">
                    <span class="text-gray-900 leading-none">Jonathan Reinink</span>
                    <span class="text-gray-900">Aug 18</span>
                  </div>

                  <tr>
                    <td className="mr-8">Price</td>
                    <td>{e.price}</td>
                    <td className="mr-8">Description</td>
                    <td className="mr-8">{e.address}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{e.rating}</td>
                  </tr>

                  <div class="flex justify-between items-center">
                    <p class="text-xl mr-6 font-bold text-gray-900">$599</p>
                    <a
                      href="#"
                      class="text-white  bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </a>
              
      </div>
            </>
          );
        })}
      {/* Card ends */}
    </div>
  );
};

export default FoodCard;
