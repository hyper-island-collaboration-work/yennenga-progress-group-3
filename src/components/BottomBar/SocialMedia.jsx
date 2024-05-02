import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="flex flex-col items-center gap-9 my-24 text-2xl">
      <p>Follow us on</p>
      <div className="flex justify-center gap-12 ">
        <SocialIcon
          url="https://www.facebook.com/yennengaprogress"
          target="_blank"
          className="focus:ring-amber-600 mr-4 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2"
        />
        <SocialIcon
          url="https://www.instagram.com/yennengaprogress"
          target="_blank"
          className="focus:ring-amber-600 mr-4 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2"
        />
        <SocialIcon
          url="https://twitter.com/yennengaprogres"
          target="_blank"
          className="focus:ring-amber-600 mr-4 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCr013coWItVLhu24URPpGTQ"
          target="_blank"
          className="focus:ring-amber-600 mr-4 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/yennenga-progress"
          target="_blank"
          className="focus:ring-amber-600 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2"
        />
      </div>
    </div>
  );
}

export default SocialMedia;
