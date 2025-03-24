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
    <div className="min-h-screen bg-gray-50">
      <div className="pl-[28px] pt-[64px] pr-[28px]">
        <div className="mb-6">
          <h2 className="text-[36px] font-[700] text-gray-800">
            Control Tower
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Branch Information Card */}
          <div className="h-full">
            <BranchInfoCard
              tier="Tier 2"
              branchName="Opebi Road"
              address="32A, New Gate Str."
              region="West Africa"
              branchCode="5534-76"
            />
          </div>

          {/* Financial Summary Cards */}
          <div className="h-full">
            <FinancialSummaryCards />
          </div>

          {/* Cash Position Card */}
          <div className="h-full">
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
        <h5 className=" ml-[24px] mt-[32px] mb-[16px] font-[800] text-[20px]">Operation Action</h5>
        
      <div className="flex gap-4 p-6 flex-wrap">
      {cardData.map((item, index) => (
        <Card key={index} title={item.title} amount={item.amount} />
      ))}
    </div>
      </div>
      <div className="p-6 flex items-end">
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
