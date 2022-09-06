import React from 'react'
import { GrCart } from "react-icons/gr";
// import Badge from '@mui/material/Badge';

import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
const Navbar = () => {
  return (
    <div>
         {/* Navbar start */}
      <nav className="bg-lime-500 border-gray-200 sm:px-4 justify-items-center  dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="navbar flex justify-between items-center md:hidden">
            <div className="flex justify-center items-center">
              <div className="sm:hamburger inline-block p-4 cursor-pointer">
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:block md:flex-row -translate-y-6 md:translate-y-0">
            <ul className="flex flex-col md:p-2 mt-4 sm:space-x-18 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block md:py-2 pr-4 pt--10  pl-3 text-white rounded md:bg-transparent md:text-gray-300-700 md:p-0 dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:py-2 pr-4 pl-3 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:py-2 pr-4 pl-3 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:py-2 pr-4 pl-3 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:py-2 pr-4 pl-3 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
            <span
                
                  className="flex flex-row-reverse sm:m-2 md:m-2"
                >
                   <div style={{display: 'block', marginTop: -48}} >
                  <Badge badgeContent={4}  className="sm:m-2 md:m-2"
      color="primary">
        <GrCart />
      </Badge>
      </div>
            </span>
                      
          </div>
          
        </div>
      </nav>
      {/* Navbar ends */}
    </div>
  )
}

export default Navbar