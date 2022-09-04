import React from "react";

const FoodCard = () => {
  return (
    <div>
      <h1 className="mt-8 text-center text-lime-300 text-3xl font-bold">
        Food Ordering Page
      </h1>
      {/* Card starts */}
    
      <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-96 h-40 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-40 h-26 p-2 rounded-t-lg md:h-40 md:w-26 md:rounded-none md:rounded-l-lg" src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/plate-penne-pasta-tomato-sauce.jpg?quality=82&strip=1" alt=""/>
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
            <p class="text-xl mr-6 font-bold text-gray-900">$599</p>
            <a href="#" class="text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
        </div>
        </div>
      </a>

      {/* Card ends */}
    </div>
  );
};

export default FoodCard;
