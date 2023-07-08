import { useState } from "react";
import CalResult from "./components/calresult";
import InputData from "./components/inputData";
import MyContext from "./context";

function App() {
   const [inputData, setInputData] = useState({
      bill: "",
      custom: "",
      people: "",
      result: 0,
      reset: false,
   });
   return (
      <MyContext.Provider value={{ inputData, setInputData }}>
         <div className="flex justify-center items-center min-h-screen">
            <div className="container mx-auto ">
               <div className="flex flex-col justify-center items-center gap-5 h-full">
                  <div className="flex flex-col items-center p-10 md:p-0 text-24">
                     <h1>S P L I</h1>
                     <h1>T T E R</h1>
                  </div>
                  <div>
                     <div className="p-5 bg-White rounded-t-2xl  md:rounded-2xl md:mt-10">
                        <div className="flex flex-col gap-5 justify-around items-center p-3 md:flex-row">
                           <InputData />
                           <CalResult />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </MyContext.Provider>
   );
}
export default App;
