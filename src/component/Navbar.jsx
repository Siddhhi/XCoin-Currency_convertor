import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-red-700 justify-between text-white p-5 w-screen">
        <h1 className="font-bold text-xl text-white ">CurrencyConvertor</h1>
        <ul className="flex gap-5">
          <li className="hover:text-lg">Home</li>
          <li className="hover:text-lg">Sign In</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
