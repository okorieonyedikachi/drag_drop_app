/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignIn = async () => {
    //@ts-ignore
    // signIn(newEmail, newPassword)

    createUserWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const user = userCredential.user;
        console.log(user);
        
        navigate("/homepage");
      })
      .catch(() => {
        setError("")
        // ..
      });
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('/IMG_3551.png')] flex items-center justify-end max-sm:w-screen max-sm: font-custom text-xl">
      <div className="w-1/3 h-4/5 mr-16 bg-zinc-700 flex justify-center items-center rounded-xl text-white opacity-80 max-sm:w-11/12  max-sm:mx-auto">
        <section className="w-9/12 h-5/6 bg-re-200 flex flex-col justify-center">
          <p className="text-2xl mx-auto">
            Sign in to enjoy full flow of inspiration
          </p>
          <div className="flex flex-col mt-9 mb-4">
            <label className="text-sm text-gray-400 mb-2">Email</label>
            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-md px-2 text-black"
            />
          </div>
          <div className="flex flex-col mt-4 ">
            <label className="text-sm text-gray-400 mb-2">Password</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-10 rounded-md px-2 text-black"
            />
            <p className="text-sm text-gray-400 mt-1">Forgotten Password?</p>
          </div>
          <button
            className="bg-orange-400 h-10 w-5/6 mx-auto mt-4 rounded-md font-semibold"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          {error && <p className="text-red-600 mt-2 ml-8">{error}</p>}
          <div className="flex items-center flex-col mt-10">
            <p>Already have an account?</p>
            <Link to="/">
              <p className="text-orange-400 text-lg font-semibold">Log In</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
