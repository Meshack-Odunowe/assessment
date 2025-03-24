import React from 'react';
import Image from 'next/image';

interface FinancialCardProps {
  title: string;
  amount: string;
  changePercentage: number;
  changeDescription: string;
  countLabel: string;
  count: string;
  iconSrc?: string;
  iconBgColor?: string;
}

const FinancialCard: React.FC<FinancialCardProps> = ({
  title,
  amount,
  changePercentage,
  changeDescription,
  countLabel,
  count,
  iconSrc,
  iconBgColor = '#E6F7F1'
}) => {
  const isPositive = changePercentage >= 0;
  
  return (
    <div className="bg-white  p-[12px]  flex justify-between items-center rounded-[10px] 
  ] " style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
      <div className="flex  items-center gap-4">
        {iconSrc ? (
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <Image 
              src={iconSrc} 
              alt={title} 
              width={40} 
              height={40} 
            />
          </div>
        ) : (
          <div 
            className="w-16  h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
              {title === 'Cash Withdrawal' ? (
                <Image src='/hand.svg' width={24} height={24} alt='hand icon' />
            ) : (
              <Image src='/cash.svg' width={24} height={24} alt='cash icon' />
            )}
          </div>
        )}
        
        <div>
          <p className="text-[#959595] text-[14px]">{title}</p>
          <p className="font-[800] text-[22px] mt-1">₦{amount}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className={`${isPositive ? 'text-[#098A16] font-[500]' : 'text-[#E5000E]'} font-medium`}>
              {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}{changePercentage}%
            </span>
            <span className="text-[#959595] text-[13px] italic">
              {changeDescription}
            </span>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <p className="text-[#959595] text-[14px]">{countLabel}</p>
        <p className="font-[800] text-[24px]">{count}</p>
      </div>
    </div>
  );
};

const FinancialSummaryCards: React.FC = () => {
  return (
    <div className="  flex flex-col gap-[16px] py-[12px]">
      <FinancialCard
        title="Cash Withdrawal"
        amount="117,420,000"
        changePercentage={2.5}
        changeDescription="Higher than last week"
        countLabel="Cr Count"
        count="11,201"
        iconBgColor="#E6F7F1"
      />
      
      <FinancialCard
        title="Cash Deposit"
        amount="117,420,000"
        changePercentage={-0.5}
        changeDescription="Less than last week"
        countLabel="Dr Count"
        count="10,201"
        iconBgColor="#FFE6E6"
      />
    </div>
  );
};

export default FinancialSummaryCards;