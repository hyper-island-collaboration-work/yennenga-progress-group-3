import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="relative w-full top-[1500px] pb-10">
      <p className="mb-6 mt-12 text-center font-arial text-base font-normal">Follow us on</p>
      <div className="mb-12 flex justify-center gap-12 ">
        <SocialIcon url="https://www.facebook.com/yennengaprogress" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://www.instagram.com/yennengaprogress" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://twitter.com/yennengaprogres" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://www.youtube.com/channel/UCr013coWItVLhu24URPpGTQ" target="_blank" className="mr-4 hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
        <SocialIcon url="https://www.linkedin.com/company/yennenga-progress" target="_blank" className="hover:scale-125 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-full"/>
      </div>
    </div>
  );
}

export default SocialMedia;
