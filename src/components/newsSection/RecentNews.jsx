import { useState, useEffect } from "react";
import { createClient } from "contentful";
import * as contentful from "contentful";
import ImageCropper from "./ImageCropper";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function RecentNews() {
  const [newsPosts, setNewsPosts] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [imageX, setImageX] = useState(null);
  const [imageY, setImageY] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

  const client = contentful.createClient({
    space: "drwwam889eac",
    environment: "master", // defaults to 'master' if not set
    accessToken: "i7gTUFaXecTvXpkduPoRfWqzE7F7L9ZvyDf6xSv7BVY",
  });

  useEffect(() => {
    client
      .getEntries({
        content_type: "news",
      })
      .then((response) => {
        setNewsPosts(response.items);
        console.log(response.items);
      });
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
      className="h-[calc(100vh - 20rem)] relative top-[800px] w-full pb-20"
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
            className="flex flex-row gap-6 overflow-x-auto scroll-smooth px-8"
            id={castSliderId}
          >
            {newsPosts.map((post) => (
              <div
                key={post.sys.id}
                className="flex w-[200px] flex-shrink-0 flex-col"
              >
                {post.fields.imageFocalPoint?.fields?.image?.fields?.file
                  ?.url && (
                  <ImageCropper
                    imageUrl={`https:${post.fields.imageFocalPoint.fields.image.fields.file.url}`}
                    coordinates={{
                      x: post.fields.imageFocalPoint.fields.focalPoint.focalPoint.x,
                      y: post.fields.imageFocalPoint.fields.focalPoint.focalPoint.y,
                      width: post.fields.imageFocalPoint.fields.image.fields.file
                      .details.image.width,
                      height: post.fields.imageFocalPoint.fields.image.fields.file.details
                      .image.height,
                    }}
                  />
                )}
                <div className="bg-white h-[100px] rounded-b-2xl px-4 pb-2 pt-3 text-center text-black">
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
