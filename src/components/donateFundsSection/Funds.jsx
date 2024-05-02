export default function Funds({ image, heading, text }) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] bg-light-gray hover:brightness-75">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div className="flex flex-col px-4 pb-9 text-2xl">
        <h6>{heading}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
}
