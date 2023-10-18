"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function HeroForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    console.log(e);
    const { value } = e.target;
    setFormData({
      ...formData,
      name: value.name,
      email: value.email,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9cl9cgb",
        "template_wjmumqf",
        form.current,
        "prNc0bJCgWddwolHF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((error) => {
        alert("An error occurred while sending the email");
        console.error(error);
      });
  };
  return (
    <form action="" ref={form}>
      <div className="flex flex-col md:flex-row">
        <input
          name="name"
          placeholder="Name"
          required=""
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-400 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <input
          name="email"
          placeholder="Email"
          required=""
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-200 border border-gray-400 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center mt-4">
        <button
          onClick={handleSubmit}
          type="submit"
          class="b mx-auto h-16 w-50 flex justify-center items-center"
        >
          <div class="i h-16 w-64 bg-gradient-to-br from-teal-400 to-teal-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
          <span class="text-center text-white font-semibold z-10 pointer-events-none">
            Contactanos
          </span>
        </button>
      </div>
    </form>
  );
}
