'use client';

import React from 'react';
import { InfoIcon } from 'lucide-react';

const CashGauge = ({
  percentage = 64,
  label = "20% Below Limit",
  warningMessage = "Request a cash supply by 3:00pm or you may not have cash on Monday",
  safeLabel = "Safe zone",
  cautionLabel = "Caution",
  dangerLabel = "Danger"
}) => {
  
  const needleAngle = -90 + (percentage * 180 / 100);
  
  return (
    <div className="bg-white rounded-[10px]  p-6 max-w-sm" style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)" }}>
      <div className="text-center mb-2 font-semibold text-xl">{label}</div>
      
      {/* Custom SVG gauge */}
      <div className="relative flex justify-center mb-6">
        <div className="relative w-64 h-40">
          {/* Value display in center of gauge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-green-500">{percentage}%</span>
          </div>
          
          <svg width="100%" height="100%" viewBox="0 0 200 120">
            {/* Green section (safe zone) - leftmost third */}
            <path 
              d="M 30 100 A 70 70 0 0 1 70 43" 
              stroke="#16a34a" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
            />
            
            {/* Orange section (caution zone) - middle third */}
            <path 
              d="M 70 43 A 70 70 0 0 1 130 43" 
              stroke="#f59e0b" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
            />
            
            {/* Red section (danger zone) - rightmost third */}
            <path 
              d="M 130 43 A 70 70 0 0 1 170 100" 
              stroke="#dc2626" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
            />
            
            {/* Indicator line showing where we are */}
            <line 
              x1="144" 
              y1="65" 
              x2="154" 
              y2="55" 
              stroke="#dc2626" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            
            {/* Needle */}
            <g transform={`rotate(${needleAngle}, 100, 100)`}>
              <line 
                x1="100" 
                y1="100" 
                x2="100" 
                y2="40" 
                stroke="#1e3a8a" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
              {/* Needle base circle */}
              <circle cx="100" cy="100" r="5" fill="#1e3a8a" />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center space-x-6 text-gray-600 mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
          <span>{safeLabel}</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
          <span>{cautionLabel}</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-red-600 mr-2"></div>
          <span>{dangerLabel}</span>
        </div>
      </div>
      
      {/* Warning message */}
      {warningMessage && (
        <div className="bg-gray-100 p-3 rounded-md flex items-start">
          <InfoIcon className="mr-2 h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">{warningMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CashGauge;