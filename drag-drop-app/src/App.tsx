import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Routes/LoginPage";
import SignUp from "./Routes/SignUp";
import Homepage from "./Routes/Homepage";


function App() {

  return (

    <>
        <Router> 
        <Routes>
          
          <Route  path="/" element={<LoginPage/>} />
          <Route  path="/signin" element={<SignUp/>}/>
          <Route  path="/homepage" element= {<Homepage/>}/>
        
        </Routes>
      </Router>  
    </>
    
  )
}

export default App


      