import { useState, useEffect } from "react";
import { createClient } from "contentful";
import News from "./News.jsx";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function RecentNews() {
  const [newsPosts, setNewsPosts] = useState([]);
  const client = createClient({
    space: "drwwam889eac",
    accessToken: "MWAI584-9KUuKgtWH_wlF8itCec9NhvimLeF91vHbr4",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const response = await client.getEntries();
        console.log(response);
        setNewsPosts(response.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  const [castSliderId] = useState(
    `slider-${Math.random().toString(36).substring(7)}`,
  );

  const slideLeft = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft -= 1200; // You can adjust the sliding distance
    }
  };

  const slideRight = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft += 1200; // You can adjust the sliding distance
    }
  };

  return (
    <section
      className="h-[calc(100vh - 20rem)] relative w-full pb-20"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/98a134c5deae1c20c5f944b85b133362bf9408906cc44b6012fb224f29b3a65b?')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="fllex flex-col">
        <h1 className="font-['Apple SD Gothic Neo'] p-8 text-4xl font-bold capitalize text-black">
          Recent News
        </h1>
        <div className=" relative">
          <IoIosArrowDropleftCircle
            onClick={() => {
              slideLeft(castSliderId);
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-black opacity-90 duration-200 group-hover:block lg:hover:scale-125"
            size={40}
          />
          <div
            className="flex flex-row gap-6 px-8 overflow-x-auto scroll-smooth"
            id={castSliderId}
          >
            {newsPosts.map((post) => (
              <div key={post.sys.id} className="flex w-[200px] flex-col flex-shrink-0">
                <img
                  loading="lazy"
                  src={post.fields.newsImage.fields.file.url}
                  alt={post.fields.newsTitle}
                  className="h-[200px] rounded-t-2xl object-cover"
                />
                <div className="h-[100px] rounded-b-2xl bg-white px-4 pb-2 pt-3 text-center">
                  {post.fields.newsTitle}
                </div>
              </div>
            ))}
          </div>
          <IoIosArrowDroprightCircle
            onClick={() => {
              slideRight(castSliderId);
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-black opacity-90 duration-200 group-hover:block lg:hover:scale-125"
            size={40}
          />
        </div>
      </div>
    </section>
  );
}

/*

return (
    <div
      className="h-[calc(100vh - 20rem)] relative w-full pb-20"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/98a134c5deae1c20c5f944b85b133362bf9408906cc44b6012fb224f29b3a65b?')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col">
        <h1 className="font-['Apple SD Gothic Neo'] p-8 text-4xl font-bold capitalize text-black">
          Recent News
        </h1>
        <div className="flex justify-center gap-12 px-8">
        {visibleNewsPosts.map((post) => (
              <div key={post.sys.id} className="flex w-[300px] flex-col">
                <img
                  loading="lazy"
                  src={post.fields.newsImage.fields.file.url}
                  alt={post.fields.newsTitle}
                  className="h-[200px] rounded-t-2xl object-cover"
                />
                <div className="h-16 rounded-b-2xl bg-white px-4 pb-2 pt-3 text-center">
                  {post.fields.newsTitle}
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={goToPrevSlide} className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Previous
          </button>
          <button onClick={goToNextSlide} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

*/
