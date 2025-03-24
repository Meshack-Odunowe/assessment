// components/DatePicker.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface DatePickerProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

interface DateRange {
  label: string;
  value: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedRange, onRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Predefined date ranges
  const dateRanges: DateRange[] = [
    { label: 'Today', value: 'Today' },
    { label: 'Yesterday', value: 'Yesterday' },
    { label: 'Last 7 days', value: 'Last 7 days' },
    { label: 'Last 30 days', value: 'Last 30 days' },
    { label: 'This month', value: 'This month' },
    { label: 'Last month', value: 'Last month' },
    { label: 'All time', value: 'All time' },
    { label: 'Custom range', value: 'Custom range' },
  ];

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle selecting a predefined date range
  const handleRangeSelect = (range: DateRange) => {
    if (range.value === 'Custom range') {
      // Keep the dropdown open for custom range
      onRangeChange(range.value);
    } else {
      onRangeChange(range.value);
      setIsOpen(false);
    }
  };

  // Handle applying custom date range
  const handleApplyCustomRange = () => {
    if (customStartDate && customEndDate) {
      onRangeChange(`${customStartDate} - ${customEndDate}`);
      setIsOpen(false);
    }
  };

  // Format date for input fields
  const formatDateForInput = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set default dates for custom range
  useEffect(() => {
    if (selectedRange === 'Custom range' && !customStartDate) {
      const today = new Date();
      const lastMonth = new Date();
      lastMonth.setMonth(today.getMonth() - 1);
      
      setCustomStartDate(formatDateForInput(lastMonth));
      setCustomEndDate(formatDateForInput(today));
    }
  }, [selectedRange, customStartDate]);

  return (
    <div className="relative" ref={datePickerRef}>
      {/* Date range button */}
      <button 
        className="w-full md:w-auto flex items-center justify-between p-2 border rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select date range"
      >
        <span className="px-1">{selectedRange}</span>
        <svg className="ml-2 h-5 w-5 text-[#055DAE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Date picker dropdown */}
      {isOpen && (
        <div className="absolute mt-1 z-10 bg-white rounded-md shadow-lg p-4 border w-64">
          <div className="space-y-2">
            {/* Predefined ranges */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold mb-2">Date Range</h3>
              <div className="space-y-1">
                {dateRanges.map((range) => (
                  <button
                    key={range.value}
                    className={`block w-full text-left px-2 py-1 text-sm rounded hover:bg-blue-50 
                      ${selectedRange === range.value ? 'bg-blue-100 text-blue-700' : ''}`}
                    onClick={() => handleRangeSelect(range)}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom date range inputs */}
            {selectedRange === 'Custom range' && (
              <div className="pt-2 border-t">
                <h3 className="text-sm font-semibold mb-2">Custom Range</h3>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="start-date" className="block text-xs text-gray-500 mb-1">Start Date</label>
                    <input
                      id="start-date"
                      type="date"
                      className="w-full p-1 text-sm border rounded"
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-xs text-gray-500 mb-1">End Date</label>
                    <input
                      id="end-date"
                      type="date"
                      className="w-full p-1 text-sm border rounded"
                      value={customEndDate}
                      onChange={(e) => setCustomEndDate(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-full bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700"
                    onClick={handleApplyCustomRange}
                    disabled={!customStartDate || !customEndDate}
                  >
                    Apply Range
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;