export default function Method({image, heading, text}) {
   return(
      <div className="wrapper flex flex-col items-center p-7 gap-10">
         <div>
            <img src={`/images/${image}`} />
         </div>
         <div>
            <h3 className="text-black text-4xl font-bold font-['Apple SD Gothic Neo'] leading-10">{heading}</h3>
         </div>
         <div>
            <p className="text-black text-lg font-normal font-['Arial'] leading-loose">{text}</p>
         </div>
      </div>
   )
}