export default function Method({ image, heading, text }) {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div>
        <h3>{heading}</h3>
      </div>
      <div>
        <p className="px-8 text-lg leading-loose">{text}</p>
      </div>
    </div>
  );
}
