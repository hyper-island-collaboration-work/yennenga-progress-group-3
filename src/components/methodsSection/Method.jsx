export default function Method({ image, heading, text }) {
  return (
    <div className="wrapper flex flex-col items-center gap-10 p-7">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div>
        <h3 className="font-['Apple SD Gothic Neo'] text-4xl font-semibold leading-10 text-black">
          {heading}
        </h3>
      </div>
      <div className="w-96">
        <p className="font-['Arial'] text-lg font-normal leading-loose text-black">
          {text}
        </p>
      </div>
    </div>
  );
}
