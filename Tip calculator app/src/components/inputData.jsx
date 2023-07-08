import { useContext, useState, useEffect } from "react";
import MyContext from "../context";

const InputData = () => {
   const { inputData, setInputData } = useContext(MyContext);
   const [isActive, setIsActive] = useState(null);
   const handleBillChange = (event, target, max) => {
      const inputValue = event.target.value;
      if (inputValue) {
         if (inputValue.length > max) {
            setInputData({
               ...inputData,
               [target]: inputValue.substring(0, max),
            });
         } else {
            setInputData({ ...inputData, [target]: inputValue });
         }
      } else {
         setInputData({ ...inputData, [target]: "" });
      }
   };

   const handleActive = (idx) => {
      setInputData({ ...inputData, custom: idx });
      setIsActive(idx);
   };

   const Calculation = () => {
      let tipCal = 0;
      if (inputData.custom) {
         tipCal = (inputData.bill * inputData.custom) / 100;
      }
      let resultData = tipCal + parseInt(inputData.bill);
      return resultData;
   };
   useEffect(() => {
      const result = Calculation();
      setInputData({ ...inputData, result: result });

      if (inputData.reset === true) {
         setIsActive(null);
         setInputData({ ...inputData, reset: false });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [inputData.bill, inputData.custom, inputData.people, setInputData]);
   return (
      <>
         <div className="flex flex-col justify-start gap-2 w-full text-Very_dark_cyan text-14 md:px-5">
            <h3>Bill</h3>
            <input
               type="number"
               value={inputData.bill}
               onChange={(event) => handleBillChange(event, "bill", 5)}
               className="bg-Very_light_grayish_cyan p-3 rounded text-right text-18 bg-dollar bg-no-repeat bg-left-4"
            />
            <br />
            <h3>Select Tip %</h3>
            <div className="flex flex-row flex-wrap">
               <div className="w-1/2 px-4 py-2 md:w-2/6 md:px-1">
                  <div
                     className={`${
                        isActive == 5
                           ? "bg-Strong_cyan"
                           : "bg-Very_dark_cyan text-white"
                     } transition text-18 text-center rounded p-3 hover:cursor-pointer`}
                     onClick={() => handleActive(5)}
                  >
                     5%
                  </div>
               </div>
               <div className="w-1/2 px-4 py-2 md:w-2/6 md:px-1">
                  <div
                     className={`${
                        isActive == 10
                           ? "bg-Strong_cyan"
                           : "bg-Very_dark_cyan text-white"
                     } transition text-18 text-center  rounded p-3 hover:cursor-pointer`}
                     onClick={() => handleActive(10)}
                  >
                     10%
                  </div>
               </div>
               <div className="w-1/2 px-4 py-2 md:w-2/6 md:px-1">
                  <div
                     className={`${
                        isActive == 15
                           ? "bg-Strong_cyan"
                           : "bg-Very_dark_cyan text-white"
                     } transition text-18 text-center rounded p-3 hover:cursor-pointer`}
                     onClick={() => handleActive(15)}
                  >
                     15%
                  </div>
               </div>
               <div className="w-1/2 px-4 py-2 md:w-2/6 md:px-1">
                  <div
                     className={`${
                        isActive == 25
                           ? "bg-Strong_cyan"
                           : "bg-Very_dark_cyan text-white"
                     } transition text-18 text-center rounded p-3 hover:cursor-pointer`}
                     onClick={() => handleActive(25)}
                  >
                     25%
                  </div>
               </div>
               <div className="w-1/2 px-4 py-2 md:w-2/6 md:px-1">
                  <div
                     className={`${
                        isActive == 50
                           ? "bg-Strong_cyan"
                           : "bg-Very_dark_cyan text-white"
                     } transition text-18 text-center rounded p-3 hover:cursor-pointer`}
                     onClick={() => handleActive(50)}
                  >
                     50%
                  </div>
               </div>
               <div
                  className="w-1/2 px-4 py-2 md:w-2/6 md:px-1"
                  onClick={() => handleActive("")}
               >
                  <input
                     type="number"
                     placeholder="Custom"
                     value={inputData.custom}
                     onChange={(event) => handleBillChange(event, "custom", 3)}
                     className={`${
                        isActive == ""
                           ? "text-Very_dark_cyan"
                           : "text-Dark_grayish_cyan"
                     } w-full h-full text-18 placeCenter font-bold text-right bg-Very_light_grayish_cyan rounded`}
                  />
               </div>
            </div>
            <div className="flex flex-row justify-between">
               <h3> Number of People</h3>
               <h3
                  className={`${
                     inputData.people > 0 || inputData.people === ""
                        ? "hidden"
                        : "block"
                  } text-red-500 tracking-wider`}
               >
                  Can&apos;t be zero
               </h3>
            </div>
            <input
               type="number"
               value={inputData.people}
               onChange={(event) => handleBillChange(event, "people", 2)}
               className={`${
                  inputData.people > 0 || inputData.people === "" ? "" : "red"
               } p-3 rounded text-right bg-Very_light_grayish_cyan bg-profile bg-no-repeat bg-left-4 `}
            />
         </div>
      </>
   );
};

export default InputData;
