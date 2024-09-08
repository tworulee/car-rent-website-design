import Card from "@/components/Card";
import "../app/globals.css";
import PickUp from "./../components/PickUp";
import { Button } from "@/components/ui/button";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RxHamburgerMenu } from "react-icons/rx";

const Settings = () => {
  return (
    <div className="grid grid-cols-4 mt-6">
      <div>
        <div className="hidden md:block col-span-1 h-full bg-white font-medium">
          <div className="text-lg m-8">
            <p className="mb-7 font-light">Type</p>
            <div>
              <Checkbox />
              <label>Sport(10)</label>
            </div>
            <div>
              <Checkbox />
              <label>SUV(12)</label>
            </div>
            <div>
              <Checkbox />
              <label>MPV(16)</label>
            </div>
            <div>
              <Checkbox />
              <label>Sedan(20)</label>
            </div>
            <div>
              <Checkbox />
              <label>Coupe(14)</label>
            </div>
            <div>
              <Checkbox />
              <label>Hatchback(14)</label>
            </div>
          </div>
          <div className="text-lg m-8">
            <p className="mb-7 font-light">Capacity</p>
            <div>
              <Checkbox />
              <label>2 Person(10)</label>
            </div>
            <div>
              <Checkbox />
              <label>4 Person(14)</label>
            </div>
            <div>
              <Checkbox />
              <label>6 Person(12)</label>
            </div>
            <div>
              <Checkbox />
              <label>8 Person(16)</label>
            </div>
          </div>
          <div className="ml-8">
            <p className="font-light mb-5">Price</p>
            <Slider defaultValue={[33]} max={100} step={1} />
            <p className="font-medium mt-3">Max $100.00</p>
          </div>
        </div>

        <div className="block md:hidden m-3">
          <RxHamburgerMenu size={30} />
        </div>
      </div>

      <div className="col-span-3 bg-[#F6F7F9]">
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-7 xl:space-x-4 relative">
          <PickUp className="flex-1 w-full" />
          <Button className="absolute left-1/2  transform -translate-x-1/2 xl:-translate-x-12 top-25 xl:top-10 bg-blue-700 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl z-10">
            <FaArrowUpLong />
            <FaArrowDownLong />
          </Button>
          <PickUp className="flex-1 w-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-8 p-4">
          <Button className="bg-blue-700 ml-7 pt-7 pb-7 pl-4 pr-4 text-white rounded-xl">
            Show More Car
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
{
  /* <div className="flex flex-col xl:flex-row justify-center items-center space-y-5 xl:space-y-0 xl:space-x-8 p-4"> */
}
