import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[480px] text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-500 mt-12 ml-10">
        {/* Left Section with Logo and Description */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-[150px] mb-7" />
          <p className="max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            quam vitae nisl efficitur malesuada.
          </p>
        </div>

        {/* Right Section with Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-extrabold  mb-7">About</h3>
            <ul className="space-y-6">
              {" "}
              {/* Increased spacing between list items */}
              <li>
                <a href="#">How it works</a>
              </li>
              <li className="mb-5">
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Partnership</a>
              </li>
              <li>
                <a href="#">Business Relation</a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-extrabold mb-7">Community</h3>
            <ul className="space-y-6">
              {" "}
              {/* Increased spacing between list items */}
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Invite a friend</a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-extrabold mb-7">Social</h3>
            <ul className="space-y-6">
              {" "}
              {/* Increased spacing between list items */}
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-12 border-[#5d5050]" />

      {/* Additional Footer Content */}
      <div className="flex justify-between text-sm text-neutral-500">
        <div className="font-bold">
          <p>&copy; 2024 Morent. All rights reserved.</p>
        </div>
        <div className="space-x-6 font-bold">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
