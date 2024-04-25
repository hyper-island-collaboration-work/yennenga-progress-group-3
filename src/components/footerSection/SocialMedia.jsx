import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="relative w-full top-[1500px] pb-10">
      <p className="mb-6 mt-12 text-center font-arial text-base font-normal">Follow us on</p>
      <div className="mb-12 flex justify-center gap-12 ">
        <SocialIcon url="https://facebook.com" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://instagram.com" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://twitter.com" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://youtube.com" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://linkedin.com" target="_blank" className="hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
      </div>
    </div>
  );
}

export default SocialMedia;
