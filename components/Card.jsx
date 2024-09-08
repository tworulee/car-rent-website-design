import React from "react";
import  Link  from "next/link";
import { Button } from '@/components/ui/button';

const Card = () => {
  return (
    <div className="bg-white w-[304px] h-[388px]  rounded-xl">
      <div className="flex justify-between">
        <div className="mt-4 ml-4">
          <p className="text-lg font-bold">Koenigsegg</p>
          <label className="opacity-40">Sport</label>
        </div>
        <div className="mt-4 mr-4 ">
          <img src="/heart.png" alt="heart" />
        </div>
      </div>
      <img
        className="mt-[69px] ml-5 w-[232px] h-[72px] "
        src="/image 7.png"
        alt="car"
      />
      <div className="flex justify-center mt-[69px] space-x-4">
        <img src="/Gasoline.png" alt="gasoline" />
        <img src="/Car.png" alt="car" />
        <img src="/Capacity.png" alt="capacity" />
      </div>
      <div className="flex justify-between items-center mt-6 ml-6">
        <p className="flex text-xl font-bold ">$99.00/day</p>

        <Link href="/rent-detail">
          <Button className="bg-blue-700 text-white rounded-xl mr-7">
            Rent Now
          </Button>
        </Link>
     
      </div>
    </div>
  );
};

export default Card;
