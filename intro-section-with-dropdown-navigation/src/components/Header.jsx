import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { RefIcon, FeatureName, CompanyName } from "./Constansts";
import menubar from "../assets/images/icon-menu.svg";
import closebar from "../assets/images/icon-close-menu.svg";

const Header = () => {
   const [feature, setFeature] = useState(false);
   const [company, setCompany] = useState(false);
   const [navActive, setNavActive] = useState(false);

   const handleFeature = () => {
      setFeature(!feature);
      setCompany(false);
   };

   const handleCompany = () => {
      setCompany(!company);
      setFeature(false);
   };

   const handleOpenNav = () => {
      setNavActive(true);
      console.log(navActive);
   };

   const handleCloseNav = () => {
      setNavActive(false);
      console.log(navActive);
   };

   return (
      <div className="flex flex-row mt-4 px-8 items-center justify-between gap-10">
         <h1 className=" text-4xl font-bold text-custom_black ">snap</h1>
         <div
            className={`${
               navActive
                  ? "w-2/3 fixed right-0 top-0 h-full justify-start pt-24 bg-custom_white shadow-shadow-full sm:shadow-none sm:pt-0 "
                  : ""
            } flex flex-col gap-10 items-center sm:w-full sm:justify-between sm:flex-row sm:relative sm:bg-transparent `}
         >
            <div className={`${navActive ? "" : "hidden"} w-4/5 sm:block`}>
               <div className="flex flex-col gap-5 items-start text-custom_gray sm:flex-row sm:items-center">
                  <div
                     className="flex flex-col justify-center "
                     onClick={handleFeature}
                  >
                     <p className="flex flex-row items-center gap-1 hover:hover-text">
                        Feature
                        {feature ? (
                           <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                           <ChevronDownIcon className="w-4 h-4" />
                        )}
                     </p>
                     {feature && (
                        <ul className="transition duration-300 opacity-100 py-5 px-8 sm:shadow-2xl sm:absolute sm:top-9 sm:bg-custom_white sm:rounded sm:transform">
                           {RefIcon.map((icon, idx) => (
                              <li
                                 className="flex items-center gap-3 mt-3 hover:hover-text "
                                 key={idx}
                              >
                                 <img
                                    src={icon}
                                    alt={icon.slice(19)}
                                    className="w-4 h-4"
                                 />
                                 <p>{FeatureName[idx]}</p>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
                  <div
                     className="flex flex-col justify-center"
                     onClick={handleCompany}
                  >
                     <p className="flex flex-row items-center gap-1 hover:hover-text">
                        Company
                        {company ? (
                           <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                           <ChevronDownIcon className="w-4 h-4" />
                        )}
                     </p>
                     {company && (
                        <ul className="transition duration-300 opacity-100 py-5 px-8 sm:shadow-2xl sm:absolute sm:top-9 sm:bg-custom_white sm:rounded sm:transform">
                           {CompanyName.map((name, idx) => (
                              <li key={idx} className="hover:hover-text mt-3">
                                 <p>{name}</p>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
                  <p className="hover:hover-text">Careers</p>
                  <p className="hover:hover-text">About</p>
               </div>
            </div>
            <div className="flex w-full justify-center sm:w-auto">
               <div className={`${navActive ? "" : "hidden"} sm:block w-4/5`}>
                  <div className="flex flex-col gap-5 items-center text-custom_gray sm:flex-row">
                     <p className="hover:cursor-pointer hover:text-custom_black">
                        Login
                     </p>
                     <p className=" transition hover:bg-custom_black hover:border-custom_black hover:cursor-pointer hover:hover:text-custom_white rounded-2xl border-2 w-full text-center py-1 px-2 border-custom_gray ">
                        Register
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div
            className={`${
               navActive ? "" : " ml-auto"
            } hover:cursor-pointer z-10`}
            onClick={handleOpenNav}
         >
            <img
               src={menubar}
               alt={menubar.slice(19)}
               className={`${navActive ? "hidden" : "ml-32"} sm:hidden`}
            />
         </div>
         <div className="hover:cursor-pointer z-10" onClick={handleCloseNav}>
            <img
               src={closebar}
               alt={closebar.slice(19)}
               className={`${navActive ? "" : "hidden"} sm:hidden`}
            />
         </div>
      </div>
   );
};

export default Header;
