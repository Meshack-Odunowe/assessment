// RequestStatusDashboard.tsx
'use client';

import React, { useState } from 'react';
import DatePicker from './date-picker';
import Image from 'next/image';

type RequestStatus = 'Approved' | 'Pending';

interface RequestData {
  id: string;
  status: RequestStatus;
  type: string;
  destination: string;
  branch: string;
}

const RequestStatusDashboard: React.FC = () => {
  // State for filters and pagination
  const [dateRange, setDateRange] = useState<string>('All time');
  const [projectFilter, setProjectFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(12); // Assuming 12 pages total as shown in pagination
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Mock data based on the screenshot
  const data: RequestData[] = [
    { 
      id: 'PKG-2290-2251-110', 
      status: 'Approved', 
      type: 'Cash Evacuation', 
      destination: 'GTBank', 
      branch: 'Anthony Str. Br.' 
    },
    { 
      id: 'PKG-2290-2251-110', 
      status: 'Approved', 
      type: 'Cash Supply', 
      destination: 'GTBank', 
      branch: 'Anthony Str. Br.' 
    },
    { 
      id: 'PKG-2290-2251-110', 
      status: 'Pending', 
      type: 'Cash Supply', 
      destination: 'GTBank', 
      branch: 'Anthony Str. Br.' 
    },
    { 
      id: 'PKG-2290-2251-110', 
      status: 'Approved', 
      type: 'Cash Evacuation', 
      destination: 'GTBank', 
      branch: 'Anthony Str. Br.' 
    },
  ];

  // Sorting function
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Date range change handler
  const handleDateRangeChange = (range: string) => {
    setDateRange(range);
   
  };

  // Sort data based on current sort settings
  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn as keyof RequestData];
    const bValue = b[sortColumn as keyof RequestData];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="p-6 pl-0 bg-[#F5F5F5]">
      <h1 className="text-[20px] font-[500] mb-[16px]"> Approved Request Status</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative">
          <select
            className="w-full md:w-40 p-2 pl-3 pr-10 border rounded-md appearance-none"
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            aria-label="Filter by project"
          >
            <option value="All">All</option>
            <option value="Project1">Project 1</option>
            <option value="Project2">Project 2</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Date picker component */}
        <DatePicker 
          selectedRange={dateRange}
          onRangeChange={handleDateRangeChange}
        />
        
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Find Package ID"
              className="w-full placeholder:font-[400px] p-2 pl-10 border placeholder:text-[14px] placeholder:text-[#959595] rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search by package ID"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image src='/search.svg' width={16} height={16} alt='Approved'/>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th 
                className="px-6 py-4 text-left text-[16px] font-[300] text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  STATUS
                  {sortColumn === 'status' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-[16px] font-[300] text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center">
                  REQUEST ID
                  {sortColumn === 'id' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-[16px] font-[300] text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('type')}
              >
                <div className="flex items-center">
                  TYPE
                  {sortColumn === 'type' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-[16px] font-[300] text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('destination')}
              >
                <div className="flex items-center">
                  DESTINATION
                  {sortColumn === 'destination' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.status === 'Approved' ? (
                    <div className="bg-[#D2EAFF] text-[#0F3677] w-fit text-[12px]  italic px-3 py-1 rounded-[10px] flex items-center space-x-1">
                      <Image src='/approved.svg' width={16} height={16} alt='Approved'/>
                      <span>Approved</span>
                    </div>
                  ) : (
                    <div className="bg-[#D9D9D9] text-gray-600 text-[12px] italic px-3 py-1 rounded-[10px] w-fit flex items-center space-x-1">
                       <Image src='/pending.svg' width={16} height={16} alt='Pending'/>
                      <span>Pending</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black font-[400] text-[16px]">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-black font-[400] text-[16px]">{row.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{row.destination}</div>
                  <div className="text-black font-[300] text-[16px]">{row.branch}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1 rounded-md border hover:bg-gray-50 disabled:opacity-50"
            aria-label="Previous page"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-sm text-gray-700">
            {currentPage} of {totalPages}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md border hover:bg-gray-50 disabled:opacity-50"
            aria-label="Next page"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestStatusDashboard;