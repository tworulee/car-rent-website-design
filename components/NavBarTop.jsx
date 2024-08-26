import React from "react";
import { Input } from "./ui/input";


const NavBarTop = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center ">
        <div className="flex flex-wrap space-x-4 md:space-x-16">
          <img
            src="/Logo.png"
            alt="logo"
            className="w-[148px] h-[44px] ml-4 md:ml-[64px] mt-4 md:mt-[45px] "
          />
          <div className="relative ml-4 md:ml-[64px] mt-4 md:mt-[45px] flex-1 md:flex-none">
            <img
              src="/search-normal.png"
              alt="search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"
            />
            <Input
              className="pl-[50px] pr-[30px] py-2 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] opacity-40 rounded-full"
              placeholder="Search something here "
            />
            <img
              src="/filter.png"
              alt="filter"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] "
            />
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-[40px] space-x-4">
          <div className="hidden lg:flex space-x-4">
            <img src="/Like.png" alt="like" />
            <img
              src="/Notification.png"
              alt="notification"
              className="ml-[20px]"
            />
            <img src="/Settings.png" alt="settings" className="ml-[20px]" />
            <img src="/Profil.png" alt="profile" className="ml-[20px]" />
          </div>

          <div className="flex lg:hidden">
            <img src="/Profil.png" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
