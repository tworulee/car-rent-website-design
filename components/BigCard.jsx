import { Button } from "./ui/button";

const BigCard = () => {
  return (
    <div className="flex w-[640px] h-[360px] bg-blue-400 mt-[32px] ml-9 relative">
      <div className="w-[284px] h-[224px]">
        <div className="w-[274px] h-[96px] m-5">
          <h1 className="text-3xl font-medium text-white">
            The Best Platform for Car Rental
          </h1>
          <p className="mt-6 text-white">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Button className="bg-blue-700 text-white mt-6 p-6 rounded-[4px]">
            Rental Car
          </Button>
        </div>
      </div>
      <img
        src="/image 7.png"
        alt="car"
        className="w-[406px] h-[116px]  absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2" 
      />
    </div>
  );
};

export default BigCard;
