import React from "react";

const Reviews = () => {
  return (
    <div className=" col-span-3 max-w-[98%] mx-auto ">
      <div className="bg-white  ml-12 rounded-xl">
        <div className="ml-5">
          <h1 className="text-xl font-bold mb-3  ">Reviews</h1>
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="w-[56px] h-[56px]"
                src="/Profil.png"
                alt="profil"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">Alex Stanton</h1>
                <pre className="text-lg opacity-50 mt-1">CEO at Bukalapak</pre>
              </div>
            </div>
            <div className="mr-4">
              <pre>21 July 2022</pre>
              <img src="Reviewssss.png" alt="reviews" />
            </div>
          </div>
          <div className="mb-7">
            <p className="ml-[70px] mt-5 pb-7  text-xl font-normal leading-9 opacity-70">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities In addition the service provided by the
              officers is also very firendly and very polite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
