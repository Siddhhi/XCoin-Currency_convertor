import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { IoMdSwap } from "react-icons/io";

const CurrencyCon = () => {
  const [currencies, setcurrencies] = useState([]);
  const [amount, setamount] = useState(1);
  const [fromCurrencies, setfromCurrencies] = useState("INR");
  const [toCurrencies, settoCurrencies] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);

  // to fetch type of currency
  // Used API : https://api.frankfurter.app/currencies
  const fetchcurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      // console.log(data);
      setcurrencies(Object.keys(data));
    } catch (error) {
      console.error("error fectching", error);
    }
  };

  const convertcurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrencies}&to=${toCurrencies}`
      );
      const data = await res.json();
      // console.log(data);
      setConvertedAmount(data.rates[toCurrencies] + " " + toCurrencies);
    } catch (error) {
      console.error("Error fetching conversion:", error);
    } finally {
      setConverting(false);
    }
  };

  //calling function
  useEffect(() => {
    fetchcurrencies();
  }, []);

  const swap = () => {
    setfromCurrencies((prev) => {
      settoCurrencies(prev);
      return toCurrencies;
    });
  };

  return (
    <>
      <div className="md:w-[calc(100vw-200px)]">
        <div className="max-w-xl md:container flex flex-col md:mx-auto mx-5 mt-20 p-5 bg-white rounded-lg min-h-[50vh] md:w-1/2 shadow-md">
          <h2 className="font-bold text-lg ">Currency Convertor</h2>
          <Dropdown
            currencies={currencies}
            title="From:"
            currency={fromCurrencies}
            setcurrency={setfromCurrencies}
          />

          <div className="flex mt-4 mb-4">
            <button
              className=" items-center justify-center  text-2xl -mb-5 sm:mb-1"
              onClick={swap}
            >
              <IoMdSwap />
            </button>
          </div>

          <Dropdown
            currencies={currencies}
            title="To:"
            setcurrency={settoCurrencies}
            currency={toCurrencies}
          />

          <div className="amount">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 mt-1"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <button
            onClick={convertcurrency}
            className={`px-5 my-2 py-2 flex items-center  justify-center  bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
              converting ? "animate-pulse" : ""
            } `}
          >
            Convert{" "}
          </button>

          <div className="mt-4 text-lg font-medium text-right text-green-400">
            Converted Amount :{convertedAmount}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyCon;
