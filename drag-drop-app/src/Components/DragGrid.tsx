import { useRef, useState } from "react";
import "./DragGrid.css"

const DragGrid = () => {
  const [imageItems, setImageItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

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
            className="bg-orange-400  rounded-lg h-96 w-72 cursor-move"
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault}
          >
            {item}
            {/* <img src="/IMG_3551.png"  className="w-full h-11/12"></img> */}
            <p>tag</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragGrid;
