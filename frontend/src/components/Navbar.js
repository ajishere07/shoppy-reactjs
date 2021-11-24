import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ShoppyLogo from "./ShoppyLogo";
// py-2 sm:pr-8 pr-0
function Navbar() {
  const { totalItems } = useSelector((state) => state.items);
  return (
    <nav className="flex justify-between items-center sm:px-8 py-2">
      <Link to="/">
        <ShoppyLogo />
      </Link>
      <SearchBar />
      <div className="flex sm:justify-between justify-evenly items-center w-28 sm:w-32 xl:w-40 md:w-40">
        <Link to="/auth">
          <span className="cursor-pointer">
            <svg
              className="w-4 md:w-7 xl:w-7"
              width="25"
              height="25"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4286 9.88889C32.4286 12.2464 31.2245 14.5073 29.0812 16.1743C26.9379 17.8413 24.031 18.7778 21 18.7778C17.969 18.7778 15.0621 17.8413 12.9188 16.1743C10.7755 14.5073 9.57143 12.2464 9.57143 9.88889C9.57143 7.53141 10.7755 5.27048 12.9188 3.60349C15.0621 1.9365 17.969 1 21 1C24.031 1 26.9379 1.9365 29.0812 3.60349C31.2245 5.27048 32.4286 7.53141 32.4286 9.88889ZM21 25.4444C15.6957 25.4444 10.6086 27.0833 6.85786 30.0006C3.10714 32.9178 1 36.8744 1 41H41C41 36.8744 38.8929 32.9178 35.1421 30.0006C31.3914 27.0833 26.3043 25.4444 21 25.4444Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="cursor-pointer">
            <svg
              className="w-4 md:w-7 xl:w-7"
              width="30"
              height="30"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.78252 6.25992C5.90035 7.29342 5.20058 8.52038 4.72315 9.87073C4.24573 11.2211 4 12.6684 4 14.13C4 15.5916 4.24573 17.0389 4.72315 18.3892C5.20058 19.7396 5.90035 20.9665 6.78252 22L23 41L39.2175 22C40.9991 19.9128 42 17.0818 42 14.13C42 11.1781 40.9991 8.34719 39.2175 6.25992C37.4359 4.17264 35.0195 3.00003 32.5 3.00003C29.9804 3.00003 27.564 4.17264 25.7824 6.25992L23 9.51974L20.2176 6.25992C19.3354 5.2264 18.2882 4.40656 17.1356 3.84723C15.983 3.28789 14.7476 3 13.5 3C12.2525 3 11.0171 3.28789 9.86454 3.84723C8.71194 4.40656 7.66467 5.2264 6.78252 6.25992V6.25992Z"
                stroke="#FF80AD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="23"
                y="26"
                width="15"
                height="14.0625"
                rx="7.03125"
                fill="white"
              />
              <path
                d="M30.75 32.75H27M30.75 29V32.75V29ZM30.75 32.75V36.5V32.75ZM30.75 32.75H34.5H30.75Z"
                stroke="#5198EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Link>
        <Link to="/cart">
          <span className="cursor-pointer ">
            <svg
              className="w-5 md:w-7 xl:w-7"
              width="25"
              height="25"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 5.44444L5.44444 1H1L6.33333 5.44444ZM6.33333 5.44444H41L32.1111 23.2222H9.88889M6.33333 5.44444L9.88889 23.2222M9.88889 23.2222L4.79333 28.3178C3.39333 29.7178 4.38444 32.1111 6.36444 32.1111H32.1111M9.88889 23.2222L32.1111 32.1111M32.1111 32.1111C30.9324 32.1111 29.8019 32.5794 28.9684 33.4129C28.1349 34.2464 27.6667 35.3768 27.6667 36.5556C27.6667 37.7343 28.1349 38.8648 28.9684 39.6983C29.8019 40.5317 30.9324 41 32.1111 41C33.2899 41 34.4203 40.5317 35.2538 39.6983C36.0873 38.8648 36.5556 37.7343 36.5556 36.5556C36.5556 35.3768 36.0873 34.2464 35.2538 33.4129C34.4203 32.5794 33.2899 32.1111 32.1111 32.1111ZM14.3333 36.5556C14.3333 37.7343 13.8651 38.8648 13.0316 39.6983C12.1981 40.5317 11.0676 41 9.88889 41C8.71015 41 7.57969 40.5317 6.74619 39.6983C5.9127 38.8648 5.44444 37.7343 5.44444 36.5556C5.44444 35.3768 5.9127 34.2464 6.74619 33.4129C7.57969 32.5794 8.71015 32.1111 9.88889 32.1111C11.0676 32.1111 12.1981 32.5794 13.0316 33.4129C13.8651 34.2464 14.3333 35.3768 14.3333 36.5556Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Link>
        {totalItems !== 0 ? (
          <p className="asolute right-3 md:absolute md:right-5 sm:absolute sm:right-4 my-auto -ml-3 sm:-ml-6 text-xs md:-ml-3 xl:-ml-9 bg-custom-700  text-custom-400 w-3 text-center rounded-xl">
            {totalItems}
          </p>
        ) : (
          <p className="hidden my-auto -ml-3 sm:-ml-6 text-xs md:-ml-3 xl:-ml-9 bg-custom-400  text-custom-400 w-3 text-center rounded-xl">
            {totalItems}
          </p>
          // <p className="my-auto -ml-3 sm:-ml-6 text-xs md:-ml-3 xl:-ml-9 bg-custom-400  text-custom-400 w-3 text-center rounded-xl">
          //   {totalItems}
          // </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
