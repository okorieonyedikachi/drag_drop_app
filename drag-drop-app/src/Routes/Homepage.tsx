import Header from "../Components/Header";
import DragGrid from "../Components/DragGrid";
import Footer from "../Components/Footer";


const Homepage = () => {

  return (
    <div className="bg-zinc-800 w-screen h-full">
      <Header/>
      <DragGrid/>
      <Footer />
    </div>
  );
  
  
}

export default Homepage