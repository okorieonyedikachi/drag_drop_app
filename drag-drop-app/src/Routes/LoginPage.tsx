import { Link, useNavigate } from "react-router-dom";
import {auth} from "../Firestore"
import {signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";


const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate()


  
 
  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("/homepage")
    })
    .catch(() => {
      setError("Incorrect Login deatils")
    });
  
  }

  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('/IMG_3551.png')] flex items-center justify-end max-sm:w-screen max-sm: font-custom text-xl">
      <div className="w-1/3 h-4/5 mr-16 bg-zinc-700 flex justify-center items-center rounded-xl text-white opacity-80 max-sm:w-11/12 max-sm:mx-auto ">
        <section className="w-9/12 h-5/6 bg-re-200 flex flex-col justify-center">
          <p className="text-2xl mx-auto">
           LOGIN
          </p>
          <div className="flex flex-col mt-9 mb-4">
            <label className="text-sm text-gray-400 mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-md px-2 text-black"
            />
          </div>
          <div className="flex flex-col mt-4 ">
            <label className="text-sm text-gray-400 mb-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-10 rounded-md px-2 text-black"
            />
            <p className="text-sm text-gray-400 mt-1">Forgotten Password?</p>
          </div>
          <button className="bg-orange-400 h-10 w-5/6 mx-auto mt-4 rounded-md font-semibold"
          onClick={handleLogin}
          
          >
            Login
          </button>
          {error && <p className="text-red-600 mt-2 ml-8">{error}</p>}
          <div className="flex items-center flex-col mt-10">
            <p>Don't have an account yet?</p>
            <Link to="/signIn"><p className="text-orange-400 text-lg font-semibold">Sign up</p></Link>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
