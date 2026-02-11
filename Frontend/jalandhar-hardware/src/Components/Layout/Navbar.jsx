import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <main className="relative">   
    <div id="Maindiv" className=" bg-red-600 flex justify-between items-center p-5 font-Anton ">
      <div>
        <Link to="/"><h1 className=" text-amber-400 text-4xl hover:text-shadow-lg/50 hover:text-amber-500 ">JALANDHAR HARDWARE</h1></Link>
      </div>
      <div className="text-amber-400">
        <ul className="items-center flex gap-10 transition-shadow ">
      <Link to ="/" className="">
        <li className="hover:text-shadow-lg/50 hover:text-amber-500"  >HOME</li>
      </Link>
      <Link to ="product" className="">
        <li className="hover:text-shadow-lg/50 hover:text-amber-500">PRODUCT</li>
      </Link>
      <Link to ="about" className="">
        <li className="hover:text-shadow-lg/50 hover:text-amber-500">ABOUT</li>
      </Link>
      <Link to ="contact" className="">
        <li className="hover:text-shadow-lg/50 hover:text-amber-500">CONTACT</li>
      </Link>
      <Link to ="login" className="">
        <li className="hover:text-shadow-lg/50 hover:text-amber-500">LOGIN</li>
      </Link>
      </ul>
      </div>
    </div>
    </main>
    </>
  );
};

export default Navbar;
