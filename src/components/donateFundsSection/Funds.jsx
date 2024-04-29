export default function Funds({ image, heading, text }) {
  return (
    <div className="wrapper flex flex-col gap-4 rounded-[2rem] bg-light-gray hover:brightness-75">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div className="flex flex-col gap-4 px-4 pb-9 text-2xl">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
