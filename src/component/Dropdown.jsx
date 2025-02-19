import React from "react";
import { CiHeart } from "react-icons/ci";
const Dropdown = ({
  currencies,
  currency,
  setcurrency,
  fav,
  handlefav,
  title = "",
}) => {
  return (
    <div className="">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={title}
      >
        {title}
      </label>

      <div className="mt-1 relative flex">
        <select
          value={currency}
          onChange={(e) => {
            setcurrency(e.target.value);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* {fav.map((currency) =>{
          return (
          <option className="bg-red-400"value={currency} key={currency}>{currency}</option>)
          })} */}
          <hr />
          {currencies.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
        <button
          onclick={() => handlefav(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          <CiHeart />
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
