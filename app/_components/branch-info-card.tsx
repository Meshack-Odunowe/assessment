import React from 'react';
import Image from 'next/image';

interface BranchInfoCardProps {
  tier: string;
  branchName: string;
  address: string;
  region: string;
  branchCode: string;
  imageUrl?: string;
}

const BranchInfoCard: React.FC<BranchInfoCardProps> = ({
  tier = "Tier 2",
  branchName = "Opebi Road",
  address = "32A, New Gate Str.",
  region = "West Africa",
  branchCode = "5534-76",
  imageUrl = "/house.png"
}) => {
  return (
    <div className="flex flex-col  w-full min-w-[351px]">
      {/* Header section with branch name and tier */}
      <div className="py-[16px] flex items-center bg-[#DBDFFD] gap-[16px] rounded-t-[10px]" style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
        <Image
          src={imageUrl}
          width={90}
          height={90}
          alt="Branch icon"
          className="ml-[28px]"
        />
        <div >
          <h3 className="font-[400] text-[#959595]">{tier}</h3>
          <p className="font-semibold text-lg">{branchName}</p>
        </div>
      </div>
      
      {/* Details section */}
      <div className="bg-white py-[16px] flex-grow rounded-b-[10px] " style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
        <div className="px-[24px] flex justify-between mb-4">
          <div>
            <h3 className="text-[#959595] text-[13px] font-[400]">
              Address
            </h3>
            <p className="font-[400] text-[16px] text-[#353535]">
              {address}
            </p>
          </div>
          <div>
            <p className="text-[#959595] text-[13px] font-[400]">
              Region
            </p>
            <p className="font-[400] text-[16px] text-[#353535]">
              {region}
            </p>
          </div>
        </div>
        <div className="pl-[24px]">
          <p className="text-[#959595] text-[13px] font-[400]">
            Branch Code
          </p>
          <p className="font-[400] text-[16px] text-[#353535]">
            {branchCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchInfoCard;