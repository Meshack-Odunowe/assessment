/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import CashGauge from "./cash-gauge";

const ATMDashboard = ({
  balance = "₦420,000,000,000",
  todayWithdrawal = "₦6,110,000",
  dailyWithdrawalLimit = "₦36,110,000",
  todaySpending = "₦3,110,000",
  dailySpendingLimit = "₦36,110,000",
  atmStatusData = [
    { name: "In service", value: 20, color: "##7B61FF" },
    { name: "Out of service", value: 20, color: "##FAA017" },
    { name: "Switch Disabled", value: 20, color: "#098A16" },
    { name: "Unknown", value: 20, color: "#055DAE" },
  ],
  cashStatusData = [
    { name: "Cash low", value: 20, color: "#7B61FF" },
    { name: "Cash out", value: 20, color: "##FAA017" },
    { name: "Available", value: 20, color: "#098A16" },
    { name: "Unknown", value: 20, color: "#055DAE" },
  ],
  onDetailClick = () => {},
  currencySymbol = "₦",
  showDetailButton = true,
}) => {
  
  interface StatusCardProps {
    title: string;
    data: Array<{ name: string; value: number; color: string }>;
  }
  const StatusCard = ({ title, data }: StatusCardProps) => (
    <div className="flex-1 border rounded-lg p-4 ">
      <h3 className="font-bold text-[12px] mb-4">{title}</h3>
      <div className="flex">
        <div className="relative w-32 h-32">
          <PieChart width={128} height={128}>
            <Pie
              data={data}
              cx={64}
              cy={64}
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={0}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex-1 ml-2">
          <div className="grid grid-cols-2 gap-y-4">
            {data.map((item, index) => (
              <React.Fragment key={index} >
                <div className=" flex">

                <div className=" flex flex-col">
                  <span className=" text-[12px] font-[400]">{item.name}</span>
                  <span className=" text-[16px] font-[700]">{item.value}</span>
                </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" flex gap-[19px]">
      <div className="bg-white rounded-lg shadow-md p-6 ">
        <h2 className="text-[20px] font-[500] mb-[8px]">Current ATM Balance</h2>

        <div className="text-[32px] font-bold mb-6">{balance}</div>

        <div className="flex flex-wrap gap-4 justify-between text-sm mb-6">
          <div>
            <div className="text-[#000000] font-[400] text-[12px]">
              Today&apos;s Withdrawal
            </div>
            <div className="font-bold text-[16px] text-[#353535]">
              {todayWithdrawal}
            </div>
          </div>
          <div>
            <div className="text-[#000000] font-[400] text-[12px]">
              Daily Withdrawal Limit
            </div>
            <div className="font-bold">{dailyWithdrawalLimit}</div>
          </div>
          <div>
            <div className="text-[#000000] font-[400] text-[12px]">
              Today&apos;s Spendings
            </div>
            <div className="font-bold">{todaySpending}</div>
          </div>
          <div>
            <div className="text-[#000000] font-[400] text-[12px]">
              Daily Spending Limit
            </div>
            <div className="font-bold">{dailySpendingLimit}</div>
          </div>
          {showDetailButton && (
            <button
              className="bg-[#055DAE] italic font-[100] text-[14px] text-white px-[12px] py-[6px] rounded-[10px] t"
              onClick={onDetailClick}>
              View Detail
            </button>
          )}
        </div>

        <div className="flex gap-4 flex-wrap">
          <StatusCard title="ATM Status" data={atmStatusData} />
          <StatusCard title="Cash Status" data={cashStatusData} />
        </div>
      </div>
      <div>
        <CashGauge />
      </div>
    </div>
  );
};

export default ATMDashboard;
