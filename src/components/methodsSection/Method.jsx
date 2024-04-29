export default function Method({ image, heading, text, spanText }) {
  return (
    <div className="flex flex-col gap-10 shadow rounded-3xl p-6 w-full">
      <div className="self-center">
        <img src={`/images/${image}`} />
      </div>
      <div>
        <h3>{heading}</h3>
      </div>
      <div>
        <span className="text-umber+">{spanText}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
