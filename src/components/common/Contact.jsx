import React from "react";

const Contact = () => {
  return (
    <div className="lg:w-[80%]">
      <h5>Contact Rain Coupon </h5>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="    First Name *"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="    Last Name *"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <input
            type="email"
            name="last-name"
            id="last-name"
            placeholder="     Email*"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Phone"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <select
            name="phone"
            id="phone"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option defaultValue="">Your Budget</option>
            <option defaultValue="tentotwenty">$10,000 - $20,000</option>
            <option defaultValue="twentytothirty">$20,000 - $30,000</option>
            <option defaultValue="thirtytofifty">$30,000 - $50,000</option>
            <option defaultValue="fifty">$50,000</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="mt-2">
          <textarea
            name="phone"
            id="phone"
            placeholder="    Project Description"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-mr-4"
          />
        </div>
      </div>
      <button className="bg-orange-800 hover:bg-red-600 w-full mt-4 text-white font-bold py-4 px-4 rounded-tl-md rounded-tr-md">
        Submit
      </button>
    </div>
  );
};

export default Contact;
