'use client'
import React from "react";
import FinancialSummaryCards from "./financial-summary-card";
import CashPositionCard from "./cash-position";
import BranchInfoCard from "./branch-info-card";
import Card from "./operation-card";
import ATMDashboard from "./atm-dashboard";
import RequestStatusDashboard from "./request-status-dashboard";

const ControlTower = () => {
   const cardData = [
      { title: "2 Cash Request", amount: "₦60,310,000,000" },
      { title: "1 Cash Evacuation", amount: "₦10,000,000,000" },
      { title: "Faulty Notes", amount: "₦20,000,000,000" },
      { title: "Overage", amount: "₦0" },
      { title: "Shortage", amount: "₦25,000,000" },
    ];
    const myATMStatusData = [
      { name: 'In service', value: 20, color: '#0063B1' },
      { name: 'Out of service', value: 20, color: '#FF9500' },
      { name: 'Switch Disabled', value: 20, color: '#4CAF50' },
      { name: 'Unknown', value: 20, color: '#9C27B0' }
    ];
  
  return (
    <div className="min-h-screen  mx-[28px]   bg-[#F5F5F5]">
      <div className=" pt-[64px] ">
        <div className="mb-6">
          <h2 className="text-[36px] font-[700] text-gray-800">
            Control Tower
          </h2>
        </div>

        <div className=" w-full grid grid-cols-1 lg:grid lg:grid-cols-3 gap-[13px] ">
          {/* Branch Information Card */}
          <div className="h-full flex-1">
            <BranchInfoCard
              tier="Tier 2"
              branchName="Opebi Road"
              address="32A, New Gate Str."
              region="West Africa"
              branchCode="5534-76"
            />
          </div>

          {/* Financial Summary Cards */}
          <div className="h-full flex-1">
            <FinancialSummaryCards />
          </div>

          {/* Cash Position Card */}
          <div className="h-full flex-1">
            <CashPositionCard
              cashPosition="₦620,510,000"
              changePercentage={2.5}
              changeDescription="Higher than last week"
              vaultBalance="₦140,990,000"
              tellerTillBalance="₦14,040,000"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="  mt-[32px] mb-[16px] font-[800] text-[20px]">Operation Action</h5>
        
      <div className="grid lg:grid-cols-5 gap-4 mx-auto">
      {cardData.map((item, index) => (
        <Card key={index} title={item.title} amount={item.amount} />
      ))}
    </div>
      </div>
      <div className="pt-[42.5px] flex items-end">
      <ATMDashboard 
      balance="₦420,000,000,000" 
      currencySymbol="$"
      atmStatusData={myATMStatusData}
      onDetailClick={() => alert('Details clicked!')}
    />
       
      
      </div>
      <div>

      <RequestStatusDashboard />
      </div>
    </div>
  );
};

export default ControlTower;
