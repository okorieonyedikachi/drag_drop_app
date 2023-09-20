import { useRef, useState } from "react";
import photos from "./photos.json"
// import { Image1 } from "/public/IMG_3551.png";

const DragGrid = () => {
  const data = [
    
       {id:1,tag:"danny"},
        {id:2, tag: "emeka"}
    
    
    
  ]

  const [imageItems, setImageItems] = useState(data);


  // save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  // handle drag sorting
  const handleSort = () => {
    //duplicate items
    const _imageItems = [...imageItems];

    //remove and save the dragged item content
    const draggedItemContent = _imageItems.splice(dragItem.current, 1)[0];

    // switch positions
    _imageItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the array
    setImageItems(_imageItems);
  };

  return (
    <div className="bg-blue-70">
      <div className="w-10/12 h-full flex flex-wrap justify-center gap-8 m-auto bg-red-00 p-6">
        {imageItems.map((item, index) => (
          <div
            key={index}
            className={`bg-orange-400  rounded-lg h-96 w-72 cursor-move
            ${dragItem.current == index ? "animate-bounce" : ""}
               ${(dragOverItem.current = index ? "" : "")}`}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault}
          >
            {item.tag}
            {/* <img src="/IMG_3551.png"  className="w-full h-11/12"></img> */}
            <p>tag</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragGrid;
