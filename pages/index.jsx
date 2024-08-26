import NavBarTop from "@/components/NavBarTop";
import "../app/globals.css";
import BigCard from "@/components/BigCard";
import PickUp from "./../components/PickUp";
import { Button } from "@/components/ui/button";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import Card from "./../components/Card";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <>
      <NavBarTop />
      <div className="bg-[#F6F7F9] w-full min-h-screen mt-7">
        {/* BigCard Section */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BigCard />
          <BigCard />
        </div>

        {/* PickUp and Button Section */}
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-5 xl:space-y-0 xl:space-x-8 p-4">
          <PickUp className="w-full xl:w-auto" />
          <Button className="bg-blue-700 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl">
            <FaArrowUpLong />
            <FaArrowDownLong />
          </Button>
          <PickUp className="w-full xl:w-auto" />
        </div>

        {/* Card Sections */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8 p-4">
          <Button className="bg-blue-700 ml-7 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl">
            Show More Car
          </Button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default index;
