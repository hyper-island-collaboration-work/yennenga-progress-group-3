import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="flex flex-col items-center py-24 gap-9 text-2xl">
      <p>Follow us on</p>
      <div className="flex justify-center gap-12 ">
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
