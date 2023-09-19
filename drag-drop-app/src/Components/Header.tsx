import user from "../assets/User.svg";



const Header = () => {
  return (
    <div className="">
      <header className="flex flex-row w-full h-16 p-4 items-center justify-between p bg-gry-600 max-sm:flex-col max-sm:bg-gren-500">
        <div className="flex items-center h-12 gap-6 max-sm:gap-2 max-sm:left-0">
          <img src={user} className="w-12 max-sm:w-6"/>
          <p className="text-white max-sm:text-xs">Welcome, User </p>
        </div>
        <input type="search" className="h-8 w-3/6 rounded-md px-4 max-sm:w-full"></input>
      </header>     
      
    </div>
  );
};

export default Header;
