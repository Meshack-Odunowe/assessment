import Image from 'next/image';
import React from 'react';
// import dynamic from "next/dynamic";
// const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });
import GaugeComponent from 'react-gauge-component';
const CashHealthGauge = () => {
  return (
    <div>
      {/* <div>
        <h2 className=' font-[500] text-[20px]'>Cash Health</h2>
      </div> */}
      <div 
    className="border mt-[16px] bg-white  p-4 rounded-[10px] w-full  mx-auto" 
    style={{boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.15)'}}
    >
      
      
      <h3 className=' text-center text-[22px] text-[#353535] font-[500]'>20% Below Limit</h3>
      <div className="flex flex-col items-center">
        <GaugeComponent
          type="radial"
          value={64}
          labels={{
            tickLabels: {
              type: "inner",
              
            }
          }}
          arc={{
            colorArray: ['#098A16', '#FAA017', '#E5000E'],
            padding: 0.02,
            width: 0.13,
            subArcs: [
              { limit: 30, color: '#E5000E' }, // Danger zone
              { limit: 50, color: '#FAA017' }, // Caution zone
              { limit: 100, color: '#098A16' } // Safe zone
            ]
          }}
          pointer={{
            color: '#052B4E',
            length: 0.90,
            width: 15,
            elastic: true,
            animationDelay: 0
          }}
          />
          <div className="flex items-center gap-[16px] space-x-2 my-[16px]">
            <div className='flex items-center justify-center gap-[3px]'>

      <div className="w-4 h-4 rounded-full bg-[#098A16]"></div>
      <span className=' text-[#959595] text-[16px] font-[400]'>Safe zone</span>
            </div>
            <div className='flex items-center justify-center gap-[3px]'>
              
      <div className="w-4 h-4 rounded-full bg-[#FAA017]"></div>
      <span className=' text-[#959595] text-[16px] font-[400]'>Caution</span>
      </div>
            <div className='flex items-center justify-center gap-[3px]'>
              
      <div className="w-4 h-4 rounded-full bg-[#E5000E]"></div>
      <span className=' text-[#959595] text-[16px] font-[400]'>Danger</span>
      </div>
    </div>
          <div className=" flex  items-center bg-[#D9D9D940] rounded-[10px] p-[12px] gap-[18px]  text-sm text-gray-600">
            <span><Image  width={16} height={16} src='/info.svg' alt='info'/></span>
        
          <p className="text-[12px]  text-start font-[400] text-[#757575]">Request a cash supply by 3:00pm or you may not have cash on Monday</p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default CashHealthGauge;