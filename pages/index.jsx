import NavBarTop from "@/components/NavBarTop";
import "../app/globals.css";
import BigCard from "@/components/BigCard";

const index = () => {
  return (
    <>
      <NavBarTop />
      <div className="bg-[#F6F7F9] w-full h-[2120px] mt-7">
        <div className="flex justify-center items-center">
          <BigCard/>
          <BigCard />
        </div>
      </div>
    </>
  );
};

export default index;
