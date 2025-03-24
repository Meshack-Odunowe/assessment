import React from "react";

interface CardProps {
  title: string;
  amount: string;
}

const Card: React.FC<CardProps> = ({ title, amount }) => {
  return (
    <div className="bg-white  rounded-2xl p-4 w-[250px]" style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
      <p className="text-[#959595] mb-[8px] text-[14px]">{title}</p>
      <h2 className="text-black font-[800] mb-[12px] text-[22px]">{amount}</h2>
      <button className="mt-2 bg-[#055DAE] text-white py-2 px-4 rounded-[10px] ">
        Review
      </button>
    </div>
  );
};

export default Card;
