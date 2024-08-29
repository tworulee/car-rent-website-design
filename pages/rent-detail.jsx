import "../app/globals.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RxHamburgerMenu } from "react-icons/rx";
import SmallCard from "@/components/SmallCard";
import { Button } from "@/components/ui/button";

const RentDetail = () => {
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

      <div className="col-span-3 grid grid-cols-2 bg-[#F6F7F9] ">
        <div className="  ">
          <SmallCard />
          <div className="flex ml-12 mt-4">
            <img className="ml-3" src="/View 1.png" alt="view" />
            <img className="ml-3" src="/View 2.png" alt="view" />
            <img className="ml-3" src="/View 3.png" alt="view" />
          </div>
        </div>
        <div className="   ">
          <div className="mt-8 bg-white rounded-xl">
            <div className="flex justify-between ml-6 mr-6">
              <div className="mt-4 mb-4">
                <h1 className="text-4xl font-semibold">Nissan GT-R</h1>
                <img src="/Reviews.png" alt="" />
              </div>
              <div className="mt-4">
                <img src="/heart.png" alt="" />
              </div>
            </div>
            <div className="ml-6 mt-6 text-2xl">
              <p className="leading-relaxed opacity-40">
                NISMO has become the embodiment of Nissans's outstanding
                performance,inspired by the most unforgiving proving ground,the
                "race track".
              </p>
            </div>
            <div className="ml-6 mt-8" >
                <img src="/Spesification.png" alt="spesific" />
            </div>
            <div className="flex justify-between mt-20 ml-6 mr-6  ">
                <img src="/price.png" alt="price" />
                <Button className="bg-blue-700  text-white text-xl rounded-xl mr-7">Rent Now</Button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
