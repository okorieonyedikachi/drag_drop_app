import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";

import { useState } from "react";

const DragGrid = () => {
    

    return (
        <div className="bg-blue-70">
            <div className="w-10/12 h-full flex flex-wrap justify-center gap-8 m-auto bg-red-00 p-6">
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png"  className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
                <div className="bg-orange-400 rounded-lg h-80 w-60">
                    <img src="/IMG_3551.png" className="w-full h-11/12"></img>
                    <p>tag</p>
                </div>
            </div>
        </div>
  )
}

export default DragGrid