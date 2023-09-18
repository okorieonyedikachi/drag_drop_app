

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('/IMG_3551.png')] flex items-center justify-end max-sm:w-screen max-sm:">
      <div className="w-1/3 h-4/5 mr-16 bg-zinc-700 flex justify-center items-center rounded-xl text-white opacity-80 max-sm:w-11/12 max-sm:bg-red-300 max-sm:mx-auto">
        <section className="w-9/12 h-5/6 bg-re-200 flex flex-col justify-center">
          <p className="text-2xl mx-auto">
            Sign in to enjoy full flow of inspiration
          </p>
          <div className="flex flex-col mt-9 mb-4">
            <label className="text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-md px-2 text-black"
            />
          </div>
          <div className="flex flex-col mt-4 ">
            <label className="text-sm text-gray-400 mb-2">Password</label>
            <input
              placeholder="Password"
              className="w-full h-10 rounded-md px-2 text-black"
            />
            <p className="text-sm text-gray-400 mt-1">Forgotten Password?</p>
          </div>
          <button className="bg-orange-400 h-10 w-5/6 mx-auto mt-4 rounded-md font-semibold">
            Sign In
          </button>
          <div className="flex items-center flex-col mt-10">
            <p>Already have an account?</p>
            <p className="text-orange-400 text-lg font-semibold">Log In</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SignUp