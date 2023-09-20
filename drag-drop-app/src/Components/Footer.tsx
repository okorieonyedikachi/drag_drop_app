import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";



const Footer = () => {
  return (
    <div className="flex justify-center mt-10 text-black  ">
      <div className="max-sm:w-full w-2/4 flex flex-col items-center ">
        <div className="flex gap-6">
          <a href=""><img src={instagram}/></a>
          <a href=""><img src={twitter} /></a>
        </div>
        <div className="flex w-full gap-6 justify-center text-sm mt-4">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="text-sm mt-4">© Gallery by Raveen </div>
      </div>
    </div>
  )
}

export default Footer