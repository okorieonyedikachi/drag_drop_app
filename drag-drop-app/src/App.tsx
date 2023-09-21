import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Routes/LoginPage";
import SignUp from "./Routes/SignUp";
import Homepage from "./Routes/Homepage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {

  return (

    <AuthProvider>
        <Router> 
        <Routes>
          
          <Route exact path="/" element={<LoginPage/>} />
          <Route  path="/signin" element={<SignUp/>}/>
          <Route  path="/homepage" element= {<Homepage/>}/>
        
        </Routes>
      </Router>  
    </AuthProvider>
    
  )
}

export default App


      