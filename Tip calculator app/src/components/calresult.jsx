import { useContext, useEffect, useState } from "react";
import MyContext from "../context";
const CalResult = () => {
   const { inputData, setInputData } = useContext(MyContext);
   const [totalByOne, setTotalByOne] = useState(0);
   const [tipByOne, setTipByOne] = useState(0);
   const initialInputData = {
      bill: "",
      custom: "",
      people: "",
      result: 0,
      reset: true,
   };

   const handleReset = () => {
      setInputData(initialInputData);
   };

   const splitPerPerson = () => {
      const tipPerson = inputData.custom / parseInt(inputData.people);
      const totalPerson = inputData.result / parseInt(inputData.people);

      let tipString = tipPerson.toString();
      let totalString = totalPerson.toString();

      if (tipString.includes(".")) {
         tipString = tipString.slice(0, tipString.indexOf(".") + 3);
      }

      if (totalString.includes(".")) {
         totalString = totalString.slice(0, totalString.indexOf(".") + 3);
      }

      return [tipString, totalString];
   };
   useEffect(() => {
      const tip = splitPerPerson();
      setTotalByOne(parseFloat(tip[0]));
      setTipByOne(parseFloat(tip[1]));
   }, [inputData]);
   return (
      <div className="p-10 flex flex-col h-full justify-between bg-Very_dark_cyan w-full text-14 rounded-xl text-white">
         <div className=" h-full md:h-80">
            <div className="flex flex-row justify-between">
               <div className="flex flex-col">
                  <h1 className="text-Very_light_grayish_cyan">Tip Amount</h1>
                  <h2 className="text-10 text-Light_grayish_cyan">/ person</h2>
               </div>
               <h1 className=" text-36 text-Strong_cyan">
                  $ {totalByOne ? totalByOne : "0.00"}
               </h1>
            </div>
            <br />
            <div className="flex flex-row justify-between mt-5">
               <div className="flex flex-col">
                  <h1 className="text-Very_light_grayish_cyan">Total</h1>
                  <h2 className="text-10 text-Light_grayish_cyan">/ Person</h2>
               </div>
               <h1 className="text-36 text-Strong_cyan">
                  $ {tipByOne ? tipByOne : "0.00"}
               </h1>
            </div>
         </div>
         <button
            className="rounded p-2 text-24 bg-Strong_cyan text-Very_dark_cyan transition hover:bg-Light_grayish_cyan"
            onClick={handleReset}
         >
            RESET
         </button>
      </div>
   );
};

export default CalResult;
