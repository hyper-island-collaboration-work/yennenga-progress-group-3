export default function WhistleBlowingItem({heading, text, image}) {
  return (
    <div className="grid ">
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <div>
        <img src={`/images/${image}`} />
      </div>
    </div>
  );
}
