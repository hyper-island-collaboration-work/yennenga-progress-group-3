import Funds from"./Funds"
import { NavLink } from 'react-router-dom';
import FundsBackground from '/images/Union.png';

export default function OurFunds() {
  let firstRowItems = [
    {
      image: "rectangle1.png",
      heading: "School sponsor",
      text: "300 SEK/per month",
      link: "/SchoolSponsor"
    },
    {
      image: "rectangle2.png",
      heading: "Teacher salary sponsor",
      text: "1 500 - 3 500 SEK/month",
    },
    {
      image: "rectangle2.png",
      heading: "Teacher salary sponsor",
      text: "1 500 - 3 500 SEK/month",
    },
  ];

  let secondRowItems = [
      {
        image: "rectangle3.png",
        heading: "The scholarship fund",
        text: "12 000 SEK raised",
      },  
      {
        image: "rectangle4.png",
        heading: "The emergency fund",
        text: "12 000 SEK raised",
      },
      {
        image: "rectangle6.png",
        heading: "The Clitoris fund",
        text: "12 000 SEK raised",
      },
    ];

  return (
    <section className="flex flex-col gap-10 pb-80 px-9 bg-no-repeat" style={{ backgroundImage: `url(${FundsBackground})` }}>
      <div className="mx-6 mt-16 flex justify-between">
        <h2 className="font-['Apple SD Gothic Neo'] text-left text-5xl font-semibold text-burkina-blue">
          Donate to our funds
        </h2>
        <a href="#">
          <button className="inline-flex w-52 items-center justify-center rounded-3xl border-8 border-black bg-black text-light-gray transition delay-100 ease-in-out hover:border-dark-blue hover:bg-dark-blue">
            Start my own fund
          </button>
        </a>
      </div>
      <div>
        <h3 className="font-['Apple SD Gothic Neo'] ml-10 mt-10 text-left text-3xl font-semibold text-black">
          Become a monthly sponsor
        </h3>
      </div>
      <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
    <div className="flex gap-1 justify-between px-4">
        {firstRowItems.map(({ image, heading, text, link }) => (
          <div key={heading}>
            {link ? ( // Check if link exists
              <NavLink to={link} activeClassName="active-link"> {/* NavLink to another page */}
                <Funds image={image} text={text} heading={heading} />
              </NavLink>
            ) : (
              <Funds image={image} text={text} heading={heading} />
            )}
          </div>
        ))}
        </div>
      </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
 <button type="button" class="absolute top-0 start-0 -ml-11 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 -mr-11 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
      <div>
        <h3 className="font-['Apple SD Gothic Neo'] ml-10 mt-10 text-left text-3xl font-semibold text-black">
          Donate to reach our goals
        </h3>
      </div>
      <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="flex gap-1 justify-between px-4">
        {secondRowItems.map(({ image, heading, text }) => (
          <Funds key={heading} image={image} text={text} heading={heading} />
        ))}
      </div>
      </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
 <button type="button" class="absolute top-0 start-0 -ml-11 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 -mr-11 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    </section>
  );
}

