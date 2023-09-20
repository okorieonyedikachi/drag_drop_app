import { useRef, useState } from "react";
import {motion} from "framer-motion"

const DragGrid = (props) => {
  const {data} = props
  const [imageItems, setImageItems] = useState(data);
  // console.log(imageItems);
  
  // save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  // handle drag sorting
  const handleSort = () => {
    const _imageItems = [...imageItems];
    const draggedItemContent = _imageItems.splice(dragItem.current, 1)[0];
    _imageItems.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    //update the array
    setImageItems(_imageItems);
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault();
    dragItem.current = index;
  };

  const handleTouchMove = (e, index) => {
    e.preventDefault();
    if (dragItem.current !== null) {
      dragOverItem.current = index;
    }
  };

  const handleTouchEnd = () => {
    if (dragItem.current !== null) {
      handleSort();
    }
  };

  

  return (
    <motion.div className="bg-re=d-700"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 1.5}}
    >
      <div className="w-11/12  h-full flex flex-wrap justify-center gap-8 m-auto bg-red-00 p-6">
        {imageItems.map((data, index) => (
          <motion.div
            whileHover={{scale: 1.1, boxShadow: "0px 0px 8px rgb(128,128,128)"}}
            key={index}
            className={`bg-oange-400 shadow-md  rounded-lg  h-96 w-64 cursor-move
            ${dragItem.current == "" ? "animate-bounce" : ""}
               ${(dragOverItem.current = index ? "" : "")}`}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchMove={(e) => handleTouchMove(e, index)}
            onTouchEnd={handleTouchEnd}
          >
            <img src={data?.image} className=" w-full rounded-t-lg h-80"></img>
            <p className="font-bold text-2xl px-4">{data?.tag}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DragGrid;
