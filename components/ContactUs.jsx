import React from "react";

function ContactUs() {
  return (
    <div>
      <form action="#" class="mt-8">
        <div class="flex justify-center items-center">
          <div class="grid grid-cols-1 bg-[#4FA06D] w-[600px] p-6 rounded-md">
            <h1 className="text-center font-extrabold text-4xl mt-4">
              Contact Us
            </h1>
            <div class="flex flex-col items-center justify-center gap-3 mt-8">
              <input
                type="text"
                placeholder="Your Name"
                class="border border-gray-300 rounded-md p-2 w-72"
              />
              <input
                type="email"
                placeholder="abc@gmail.com"
                class="border border-gray-300 rounded-md p-2 w-72"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                class="border border-gray-300 rounded-md p-2 w-72"
              />
              <button
                type="submit"
                class="bg-[#0B250F] text-white rounded-md py-3 px-6 mt-4 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
