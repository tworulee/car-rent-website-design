import NavBarTop from "@/components/NavBarTop";
import "../app/globals.css";
import BigCard from "@/components/BigCard";
import PickUp from './../components/PickUp';

const index = () => {
  return (
    <>
      <NavBarTop />
      <div className="bg-[#F6F7F9] w-full h-[2120px] mt-7">
        <div className="flex justify-center items-center">
          <BigCard/>
          <BigCard />
        </div>
        <div className="flex justify-center items-center">
            <PickUp/>
            <PickUp/>
        </div>
      </div>
    </>
  );
};

export default index;
