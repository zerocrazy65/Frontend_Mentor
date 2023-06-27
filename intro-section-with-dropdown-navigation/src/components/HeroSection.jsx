import picMobile from "../assets/images/image-hero-mobile.png";
import picDesktop from "../assets/images/image-hero-desktop.png";
import { RefImage } from "./Constansts";

const HeroSection = () => {
   return (
      <div className="container mx-auto">
         <section className="flex flex-col gap-10 mt-10 sm:mt-28 max-w-6xl mx-auto justify-center sm:flex-row-reverse">
            <div className="sm:max-w-md">
               <img
                  src={picMobile}
                  alt="image-hero-mobile"
                  className="block w-fit sm:hidden"
               />
               <img
                  src={picDesktop}
                  alt="image-hero-mobile"
                  className="hidden w-fit sm:block"
               />
            </div>
            <div className="flex flex-col justify-evenly">
               <div className="flex flex-col text-center items-center gap-10 sm:items-start sm:text-left">
                  <h1 className=" text-4xl font-bold text-custom_black px-3 sm:px-0 sm:text-7xl">
                     Make remote work
                  </h1>
                  <p className=" text-custom_gray px-3 sm:px-0 max-w-lg">
                     Get your team in sync, no matter your location. Streamline
                     processes, create team rituals, and watch productivity
                     soar.
                  </p>
                  <button className=" bg-custom_black rounded-2xl py-3 px-8 text-custom_white transition hover:scale-105">
                     Learn more
                  </button>
               </div>
               <div className="flex flex-row justify-around items-center mt-5 sm:justify-start gap-10 px-5">
                  {RefImage.map((img, idx) => (
                     <div key={idx}>
                        <img src={img} alt={img.slice(19)} />
                     </div>
                  ))}
               </div>
            </div>
         </section>
         {/* Footer */}
      </div>
   );
};

export default HeroSection;
