export default function Funds({ image, heading, text }) {
  return (
    <div className="wrapper flex flex-col gap-4 rounded-[2rem] bg-light-gray hover:brightness-75">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div className="flex flex-col text-2xl pb-9 px-4 gap-4">
        <h4>
          {heading}
        </h4>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
