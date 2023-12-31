/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import { useRef, useState,useEffect } from "react";
import {motion} from "framer-motion"
import Sortable from "sortablejs"

interface GridItem {
 id:string
 src: string
 image:string
 tag:string
}

interface Grid {
  data: GridItem[]
}




const DragGrid: React.FC<Grid> = ({data})=> {
 
 
 const [imageItems, setImageItems] = useState<GridItem[]>(data);

 const gridRef = useRef<any>(null);
 const sortableJsRef = useRef<any>(null);
  // console.log(imageItems);
 
  // console.log(gridRef.current); 
    const onListChange = () => {
      
      const newData = [...gridRef?.current?.children]
      
        .map(item => item.dataset.id)
        .map(id => data.find(item => item.id == id));

      sessionStorage.setItem('my-grid', JSON.stringify(newData));
      // setData(data);
      setImageItems(imageItems);
     
      
    };
    
    useEffect(() => {
      sortableJsRef.current = new Sortable(gridRef.current, {
        animation: 150,
        onEnd: onListChange,
      });
    }, [])
  
  
 

  
  

  return (
    <motion.div className=""
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 1.5}}
    >
      <div className="w-11/12  h-full flex flex-wrap justify-center gap-8 m-auto bg-red-00 p-6 max-sm:w-full" ref={gridRef}>
        {data.map((item, index) => (
          <motion.div
            whileHover={{scale: 1.1, boxShadow: "0px 0px 8px rgb(128,128,128)"}}
            key={index}
            className={`bg-oange-400 shadow-md  rounded-lg  h-96 w-64 cursor-move
            `}
            draggable 
          >
           
            <img src={item?.image} className=" w-full rounded-t-lg h-80"></img>
            <p className="font-bold text-2xl px-4">{item?.tag}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DragGrid;

