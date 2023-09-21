import Header from "../Components/Header";
import DragGrid from "../Components/DragGrid";
import Footer from "../Components/Footer";
import { useState,useEffect,useMemo } from "react";
import {data} from "../data"

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the data based on the search query
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  // Use `filteredData` as the data source for `DragGrid`
  const [dataState, setDataState] = useState(filteredData);

  useEffect(() => {
    // Update `dataState` when `filteredData` changes
    setDataState(filteredData);
  }, [filteredData]);
  

  return (
    <div className="bg-slate-100 w-screen font-custom  h-full">
      <Header 
        onSearch = {handleSearch}
      />
      <DragGrid
        data={dataState}
      />
      <Footer />
    </div>
  );
  
  
}

export default Homepage