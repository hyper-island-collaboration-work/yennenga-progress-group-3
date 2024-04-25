import React from "react";
import footerBackground from "../../../public/images/Footer_background.webp";
import footerLogo from "../../../public/images/yp_logo_white.svg";
import footer90KontoLogo from "../../../public/images/90_konto_logo_neg 1.png"

function Footer() {
   return (
     <footer
       className="bg-fixed bg-cover bg-center bg-no-repeat bg-gray-200 relative w-full top-[1500px]"
       style={{ backgroundImage: `url(${footerBackground})` }}
     >
       <div className="container flex flex-col justify-between md:flex-row pl-20 pt-12 xl:pr-40 font-arial text-base font-normal text-light-gray">
         <div className="flex flex-col md:w-1/3">
           <img
             src={footerLogo}
             alt="Yannenga progress logo"
             className="mb-8 w-fit"
           />
           <p>info@yennengaprogress.se</p>
           <p className="mb-8">Org.nr: 802445-9987</p>
           <p className="font-bold">Sweden</p>
           <p>tel: +46 735 176 200</p>
           <p>Kvarngatan 14, Stockholm</p>
           <p>Box 4040</p>
           <p className="mb-8">102 61 Stockholm</p>
           <p className="font-bold">Burkina Faso</p>
           <p>tel: +22 676 389 902</p>
           <p>Nakamtenga, Municipality Ziniare</p>
           <p className="mb-8">BP 336,Ziniare</p>
           <p className="mb-8">90-konto:900243-7</p>
           <img
             src={footer90KontoLogo}
             alt="90 Konto logo"
             className="mt-8 mb-16 w-fit"
           />
         </div>
         <div className="flex flex-col md:w-1/3">
           <p className="font-bold mb-8">Our method</p>
           <p>About us</p>
           <p>News section</p>
           <p>Current projects</p>
           <p>Our structure</p>
           <p>Our partners projects</p>
         </div>
         <ul className="flex flex-col mb-12 md:w-1/3"> 
           <h4 className="font-bold mb-8">Join us</h4>
           <li><a href="#">Sida på svenska</a></li>
           <li><a href="#">Donate</a></li>
           <li><a href="#">Share your competence</a></li>
           <li><a href="#">Become a business partner</a></li>
         </ul>
       </div>
     </footer>
   );
 }
 

export default Footer;