import { useState } from "react";
import user from "../assets/User.svg";
import {data} from "../data";
import {motion} from "framer-motion"



const Header = ({ onSearch }) => {

  const [imageItems, setImageItems] = useState<{}>(data);
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setInputText(input)
    onSearch(input)
    
    // const filterData = data.filter((element) => {
    //   if (input.trim() !== ""){
        
    //   } else {
    //     return input
    //   }
    // })
    // console.log(onDataUpdate);
    
    
  };


  return (
    <motion.div className=""
      initial={{y: -250}}
      animate={{y: 0}}
      transition={{delay:0.2, type: 'spring', stiffness: 120}}
    >
      <header className="flex flex-row w-full h-16 p-4 items-center justify-between p bg-gry-600 max-sm:flex-col max-sm:bg-gren-500">
        <div className="flex items-center h-12 gap- max-sm:gap-2 max-sm:left-0">
          <img src={user} className="w-12 max-sm:w-6" />
          <p className="text-black max-sm:text-xs">Welcome, User </p>
        </div>
        <input
          type="search"
          className="h-8 w-3/6 rounded-md px-4 max-sm:w-full shadow-md"
          placeholder="Search"
          value={inputText}
          onChange={handleInput}
        > 
        </input>
      </header>
    </motion.div>
  );
};

export default Header;
