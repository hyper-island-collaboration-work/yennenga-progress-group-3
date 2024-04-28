import React, { useState } from 'react';
import SchoolSponsorImg from "../../../public/images/SchoolSponsor.png";
import footer90KontoLogo from "../../../public/images/90_konto_black.png";
import SchoolPic from  "../../../public/images/School.jpeg";

export default function SchoolSponsor() {
  const [activeButton, setActiveButton] = useState('story');

  return (
    <span>
      <div className="flex items-center justify-end mt-16 mr-24 mb-9">
        <img src={footer90KontoLogo} alt="90 Konto logo"/>
      </div>
      <div className="flex mx-28 mb-28">
        <div>
          <img src={SchoolSponsorImg} alt="School Sponsor"/>
        </div>
        <div className="mx-9 flex flex-col max-w-[40%]">
          <div className="flex border-b border-gray-400 my-4 gap-8">
            <button
              className={`mb-3 hover:text-burkina-blue ${activeButton === 'story' ? 'text-burkina-blue font-bold' : ''}`}
              onClick={() => setActiveButton('story')}
            >
              Story
            </button>
            <button
              className={`mb-3 hover:text-burkina-blue ${activeButton === 'update' ? 'text-burkina-blue font-bold' : ''}`}
              onClick={() => setActiveButton('update')}
            >
              Update
            </button>
          </div>
          <h3 className="font-['Apple SD Gothic Neo'] text-2xl leading-10 text-black">
            School Sponsor
          </h3>
          <p className="text-light-green font-['Arial'] text-xl font-normal leading-loose mb-4">
            300 SEK/month
          </p>
          <button className="inline-flex w-auto items-center justify-center rounded-full border-[20px] border-burkina-blue bg-burkina-blue text-light-gray text-2xl transition delay-100 ease-in-out hover:border-dark-blue hover:bg-dark-blue">
              Sponsor Schools
          </button>
          {activeButton === 'story' && (
            <p className="pt-4 overflow-x-scroll max-h-[50%]">
              School sponsors are important for long-term development. We have about 70 sponsors and would need 200 more. A school sponsorship includes quality education, school dining, and health care for one student.
            </p>
          )}
          {activeButton === 'update' && (
            <React.Fragment>
              <div className="pt-6 overflow-x-scroll max-h-[50%]" >
              <p>
                Thanks to all of our lovely sponsors, there are now 70 school kids who are getting support for quality education, school dining, and health care! Let’s keep on pushing sponsorships and make all the kids have support.
              </p>
              <div>
                <img className='pt-4' src={SchoolPic} alt="School Pic"/>
              </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </span>
  );
}

