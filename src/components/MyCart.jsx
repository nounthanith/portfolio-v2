import React from "react";
import Marquee from "react-fast-marquee";
import myCart from "../utils/myCart";
import { FaLocationArrow } from "react-icons/fa";
import ShinyText from "../ui/ShinyText";
import ScrambledText from "../ui/ScrambleText";
function MyCart() {
  return (
    <div className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8">
      <Marquee
        autoFill
        speed={22}
        pauseOnHover={true}
        gradient={false}
        direction="left"
      >
        <div className="rounded-lg shadow p-2 border border-gray-200 mx-2 w-[250px] hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 object-cover rounded-full border border-gray-200"
              src={myCart.image}
              alt={myCart.name}
            />
            <div>
              <ShinyText text={myCart.name} disabled={false} speed={2} />
              <p className="text-[10px] text-gray-400 truncate flex items-center gap-1">
                <span>
                  <FaLocationArrow />
                </span>
                {myCart.address}
              </p>
              <p className="text-[9px] text-gray-400 truncate flex items-center gap-1">
                @ {myCart.role}
              </p>
            </div>
          </div>

          <div className="mt-2">
            <ScrambledText
              className="font-medium cursor-grab text-sm text-white/50"
              radius={40}
              duration={1.5}
              speed={0.15}
              scrambleChars="__"
            >
              {myCart.note}
            </ScrambledText>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MyCart;
