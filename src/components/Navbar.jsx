import React from "react";

const Navbar = () => {

   
    return (

        <>
            <div className="absolute top-[115.8px] left-[110.2px]  bg-gradient-to-r from-[#B0BF78] to-[#759D61] rounded-full shadow-lg  ">

                <ul className="w-[932.8px] h-[64.8px] flex items-center justify-between ">

                    <div className="flex-1 flex justify-center items-center py-5 transition-all duration-300 ease-in-out hover:bg-[#86A57F]/50 hover:backdrop-blur-md  hover:text-lg   hover:font-bold hover:rounded-l-full  ">
                        <li><a href="#" className="text-white font-Poppins text-[19.63px] leading-[29.44px] tracking-wider">HOME</a></li>
                    </div>

                    <div className="relative flex-1 flex flex-col justify-center items-center py-5 transition-all duration-300 ease-in-out hover:bg-[#86A57F]/50 hover:backdrop-blur-md hover:text-lg hover:font-bold hover:rounded-sm">
                        <li>
                            <a href="#" 
                                className="text-white font-Poppins text-[19.63px] leading-[29.44px] tracking-wider"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                COLLECTION
                            </a>
                        </li>
                    </div>

                    <div className="flex-1 flex justify-center items-center py-5 transition-all duration-300 ease-in-out hover:bg-[#86A57F]/50 hover:backdrop-blur-md hover:text-lg hover:font-bold hover:rounded-sm">
                        <li><a href="#" className="text-white font-Poppins text-[19.63px] leading-[29.44px] tracking-wider">OFFERS</a></li>
                       
                    </div>

                    <div className="flex-1 flex justify-center items-center py-5 transition-all duration-300 ease-in-out hover:bg-[#86A57F]/50 hover:backdrop-blur-md  hover:text-lg hover:font-bold hover:rounded-sm">
                        <li><a href="#" className="text-white font-Poppins text-[19.63px] leading-[29.44px] tracking-wider">ABOUT</a></li>
                    </div>

                    <div className="flex-1 flex justify-center items-center py-5 transition-all duration-300 ease-in-out hover:bg-[#86A57F]/50 hover:backdrop-blur-md  hover:text-lg   hover:font-bold hover:rounded-r-full  ">
                        <li><a href="#" className="text-white font-Poppins text-[19.63px] leading-[29.44px] tracking-wider">CONTACT US</a></li>
                    </div>
                </ul>
            </div>

            <div>
            <button className=" absolute top-[115.8px] left-[1256.6px] w-[168px] h-[64.8px] font-Poppins text-[19.63px] leading-[29.44px] tracking-wider bg-gradient-to-r from-[#73735A] to-[#445A4A]  text-white  px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#123524] hover:bg-none hover:text-xl hover:font-bold ">
                SIGN UP
            </button>
            </div>

        </>

    );
}

export default Navbar;




