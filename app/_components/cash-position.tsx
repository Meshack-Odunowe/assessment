import Image from "next/image";
import React from "react";

interface CashPositionCardProps {
  cashPosition?: string;
  changePercentage?: number;
  changeDescription?: string;
  vaultBalance?: string;
  tellerTillBalance?: string;
}

const CashPositionCard: React.FC<CashPositionCardProps> = ({
  cashPosition = "₦620,510,000",
  changePercentage = 2.5,
  changeDescription = "Higher than last week",
  vaultBalance = "₦140,990,000",
  tellerTillBalance = "₦14,040,000",
}) => {
  const isPositive = changePercentage >= 0;

  return (
    <div className="bg-white rounded-[10px] p-[20px]  w-full " style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
      {/* Top section with rounded corners */}
      <div
        className="p-4 mb-4 relative"
        style={{
          backgroundColor: "#E9EEFC",
          borderTopRightRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}
      >
        <div className="flex">
          <div className="flex items-center">
            <div className="mr-3 rounded-[15px] bg-[#DBDFFD] p-[18px] flex items-center justify-center">
              <Image src="/finance.svg" width={19} height={19} alt="logo" />
            </div>
          </div>
          <div>
            <span className="text-[#959595] text-[14px]">Cash Position</span>
            <div className="font-[800] text-[22px] text-[#353535] mb-2">
              {cashPosition}
            </div>
            <div className="flex items-center">
              <span
                style={{ color: isPositive ? "#098A16" : "#FF0000" }}
                className="mr-2 font-medium"
              >
                {isPositive ? "▲" : "▼"} {Math.abs(changePercentage)}%
              </span>
              <span className="text-gray-500 text-sm">{changeDescription}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with two cards */}
      <div className="flex gap-3">
        <div
          className="p-3 text-white font-medium text-center rounded-[10px]"
          style={{ backgroundColor: "#055DAE" }}
        >
          <div className="text-[12px] mb-[2px]">Vault Balance</div>
          <div className="font-bold text-[16px]">{vaultBalance}</div>
        </div>

        <div
          className="flex-1 p-3 text-gray-700 font-medium text-center rounded-lg border"
          style={{ borderColor: "#E9EEFC" }}
        >
          <div className="text-[12px] mb-[2px]">Teller Till Balance</div>
          <div className="font-bold">{tellerTillBalance}</div>
        </div>
      </div>
    </div>
  );
};

export default CashPositionCard;