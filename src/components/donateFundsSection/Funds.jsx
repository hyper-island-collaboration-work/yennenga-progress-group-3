export default function Funds({ image, heading, text }) {
    return (
      <div className="wrapper flex flex-col bg-light-gray rounded-[2rem] hover:brightness-75">
        <div>
          <img src={`/images/${image}`} />
        </div>
        <div>
          <h3 className="font-['Apple SD Gothic Neo'] pl-4 pt-2 font-semibold text-2xl leading-10 text-black">
            {heading}
          </h3>
        </div>
        <div className="w-[362px]">
          <p className="font-['Arial'] pl-4 text-2xl pb-4 font-normal leading-loose text-black">
            {text}
          </p>
        </div>
      </div>
    );
  }
  