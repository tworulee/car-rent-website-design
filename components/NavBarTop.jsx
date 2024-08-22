import React from "react";
import { Input } from "./ui/input";

const NavBarTop = () => {
  return (
    <>
      <div class="flex  justify-between  items-center">
        <div class="flex space-x-16">
          <img
            src="/Logo.png"
            alt="logo"
            className="w-[148px] h-[44px] ml-[60px] mt-[40px]"
          />
          <div className="relative ml-[64px] mt-[45px]">
            <img
              src="/search-normal.png"
              alt="search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] "
            />
            <Input
              className="pl-[60px] opacity-40 rounded-full"
              placeholder="Search something here"
            />
            <img
              src="/filter.png"
              alt="search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] "
            />
          </div>
        </div>
        <div>
          <div className="flex mr-[30px] mt-[40px]">
            <img src="/Like.png" alt="like" className="" />
            <img
              src="/Notification.png"
              alt="notification"
              className="  ml-[20px]"
            />
            <img src="/Settings.png" alt="settings" className="  ml-[20px]" />
            <img src="/Profil.png" alt="profile" className="  ml-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
