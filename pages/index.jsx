import NavBarTop from "@/components/NavBarTop";
import "../app/globals.css";
import BigCard from "@/components/BigCard";
import PickUp from "./../components/PickUp";
import { Button } from "@/components/ui/button";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import Card from "./../components/Card";

const index = () => {
  return (
    <>
      <NavBarTop />
      <div className="bg-[#F6F7F9] w-full h-[2120px] mt-7">
        <div className="flex justify-center items-center">
          <BigCard />
          <BigCard />
        </div>
        <div className="flex justify-center items-center">
          <PickUp />
          <Button className="bg-blue-700 mt-5 ml-8 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl">
            <FaArrowUpLong />
            <FaArrowDownLong />
          </Button>
          <PickUp />
        </div>
        <div className="flex justify-center mt-[100px] ml-8  space-x-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-[100px] ml-8  space-x-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-[100px] ml-8  space-x-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center">
          <Button className="bg-blue-700 ml-7 mt-9 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl">
            Show More Car
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
