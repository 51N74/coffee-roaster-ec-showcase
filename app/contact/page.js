"use client";
import Head from "next/head";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <>      
        <Head>
          <title>Contact Us - SINTARA</title>
          <meta
            name="description"
            content="Get in touch with SINTARA for inquiries about our coffee beans and roasting services."
          />
        </Head>
        <div className="w-full">
          <div
            className="relative bg-cover bg-center h-64"
            style={{ backgroundImage: "url('/images/other/fimg-4.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white">Contact</h1>
            </div>
          </div>
    <div className="bg-white py-16">
          <div className=" max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center bg-gray-100 shadow-lg rounded-lg">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                CONTACT US
              </h1>
              <p className="text-gray-700 font-medium mb-2">VISIT US</p>
              <p className="text-gray-600 mb-4">
                SINTARA Coffee & Roasters <br />
                333 moo 4<br />
                ChanThuek, Pak Chong District <br/>
                 Nakhon Ratchasima 30130 <br />
                
              </p>
              <p className="text-gray-700 font-medium mb-2">EMAIL</p>
              <p className="text-gray-600 mb-4">
                sintaracoffeeandroaster@gmail.com
              </p>
              <p className="text-gray-700 font-medium mb-2">PHONE</p>
              <p className="text-gray-600 mb-4">096-3974796</p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 text-gray-800">
                <a href="#" className="hover:text-black">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-black">
                  <i className="fab fa-line"></i>
                </a>
                <a href="#" className="hover:text-black">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-6 bg-white rounded-lg">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-black text-white font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
