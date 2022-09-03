import React from "react";

const FoodCard = () => {
  return (
    <div>
      <h1 className="mt-8 text-center text-lime-300 text-3xl font-bold">
        Food Ordering Page
      </h1>
      {/* Card starts */}
    
      <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-26 h-40 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-40 h-26 rounded-t-lg md:h-40 md:w-26 md:rounded-none md:rounded-l-lg" src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/plate-penne-pasta-tomato-sauce.jpg?quality=82&strip=1" alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mexican Pizza       </h5>
          <tr>
            <td className="mr-8">sd</td>
            <td>Price</td>
          </tr>
          <tr>
            <td>Quantity</td>
          </tr>

          <div class="flex justify-between items-center">
            <span class="text-xl space-x-18 font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white space-x-18 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
        </div>
      </a>

      {/* Card ends */}
    </div>
  );
};

export default FoodCard;
