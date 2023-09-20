import Header from "../Components/Header";
import DragGrid from "../Components/DragGrid";
import Footer from "../Components/Footer";
import { useState } from "react";
import {data} from "../data"

const Homepage = () => {
  const [dataState, setDataState] = useState(data);

  const updateDataState = () => {
    setDataState(data);
  };

  // console.log(dataState);

  return (
    <div className="bg-slate-100 w-screen font-custom  h-full">
      <Header
        onDataUpdate={updateDataState} 
        
      />
      <DragGrid
        data={dataState}
      />
      <Footer />
    </div>
  );
  
  
}

export default Homepage