import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Routes/LoginPage";
import SignUp from "./Routes/SignUp";
import Homepage from "./Routes/Homepage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  
  
  return (
    <Router>
      
        
      <Routes>
        
        <Route exact path="/" element={<Homepage/>} />
        <Route  path="/signin" element={<SignUp/>}/>
        <Route  path="/login" element= {<LoginPage/>}/>
      
      </Routes>
     
    </Router>  
  )
}

export default App



// <Switch>
      //   <Route path="/signup"> <SignUp/> </Route>
      //   <Route path="/"> <LoginPage/> </Route>
      //   <Route path="/homepage">
      //     {user ? <Home /> : <Redirect to="/login" />}
      //   </Route>
      //   <Redirect to="/login" />
      // </Switch>
    


      