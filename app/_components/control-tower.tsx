import Image from "next/image";
import React from "react";

const ControlTower = () => {
  return (
    <div>
      <div className=" flex flex-column pl-[300px]">
        <div className=" bg-[#DBDFFD] flex">
          <Image src="/house.png" width={90} height={90} alt="House icon" />
        </div>
      </div>
    </div>
  );
};

export default ControlTower;
