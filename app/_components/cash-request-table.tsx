'use client'
import React, { useState } from 'react';
import { 
  createColumnHelper, 
  flexRender, 
  getCoreRowModel, 
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnDef
} from '@tanstack/react-table';
import { format } from 'date-fns';

// Define the data type for our table
type CashRequest = {
  id: string;
  initiator: {
    name: string;
    code: string;
  };
  fromBranch: string;
  toBranch: string;
  date: Date;
  amount: number;
  currency: {
    name: string;
    code: string;
  };
  status: 'Fulfilled' | 'Unfulfilled' | 'Pending';
};


const sampleData: CashRequest[] = [
  {
    id: 'CRQ-36941',
    initiator: { 
      name: 'Babalola Olawatoyins', 
      code: 'T1-338-3737-2882' 
    },
    fromBranch: 'Oke Arin Br',
    toBranch: 'Adeola Odeku Br',
    date: new Date('2022-08-10'),
    amount: 28995000,
    currency: { name: 'Nigerian Naira', code: 'NGN' },
    status: 'Fulfilled'
  },
  {
    id: 'CRQ-36941',
    initiator: { 
      name: 'Cash Officer', 
      code: 'T1-338-3737-2882' 
    },
    fromBranch: 'Adeola Odeku Br',
    toBranch: 'Oke Arin Br',
    date: new Date('2022-07-19'),
    amount: 28995000,
    currency: { name: 'European Euro', code: 'EUR' },
    status: 'Unfulfilled'
  },
  {
    id: 'CRQ-34441',
    initiator: { 
      name: 'Cash Officer', 
      code: 'T1-338-3737-2882' 
    },
    fromBranch: 'Odunowe Meshack',
    toBranch: 'Oke Arin Br',
    date: new Date('2022-07-19'),
    amount: 98995000,
    currency: { name: 'European Euro', code: 'EUR' },
    status: 'Pending'
  },
 
];

const CashRequestTable: React.FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [dateRange, setDateRange] = useState({
    start: new Date('2022-08-06'),
    end: new Date('2022-08-13')
  });

  const columnHelper = createColumnHelper<CashRequest>();

  const columns = [
    columnHelper.display({
      id: 'avatar',
      header: '',
      cell: ({ row }) => {
        const initial = row.original.initiator.name.charAt(0);
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-[#D2EAFF] text-[#052B4E] font-medium">
            {initial}
          </div>
        );
      },
      size: 60
    }),
    columnHelper.accessor('initiator', {
      header: 'originator',
      cell: info => (
        <div>
          <div className="font-medium text-[16px] text-[#353535]">{info.getValue().name}</div>
          <div className="text-[13px] font-[400] text-[#667085]">{info.getValue().code}</div>
        </div>
      )
    }),
    columnHelper.accessor('fromBranch', {
      header: 'from branch'
    }),
    columnHelper.accessor('toBranch', {
      header: 'to branch'
    }),
    columnHelper.accessor('id', {
      header: 'code'
    }),
    columnHelper.accessor('amount', {
      header: 'amount',
      cell: info => (
        <span>₦{info.getValue().toLocaleString()}</span>
      )
    }),
    columnHelper.accessor('currency', {
      header: 'currency',
      cell: info => (
        <div>
          <div className="text-[14px] font-400]">{info.getValue().name}</div>
          <div className="text-xs text-gray-500">({info.getValue().code})</div>
        </div>
      )
    }),
    columnHelper.accessor('status', {
      header: 'status',
      cell: info => {
        const status = info.getValue();
        let bgColor = 'bg-green-100';
        let textColor = 'text-green-800';
        
        if (status === 'Unfulfilled') {
          bgColor = 'bg-red-100';
          textColor = 'text-red-800';
        } else if (status === 'Pending') {
          bgColor = 'bg-yellow-100';
          textColor = 'text-yellow-800';
        }
        
        return (
          <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${bgColor} ${textColor}`}>
            {status}
          </span>
        );
      }
    }),
    columnHelper.display({
      id: 'actions',
      header: 'action',
      cell: () => (
        <button className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </button>
      )
    })
  ];

  const table = useReactTable({
    data: sampleData,
    columns,
    state: {
      sorting,
      globalFilter
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  return (
    <div className="bg-[#F5F5F5] pl-[275px] pt-[150px] rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-[36px] font-bold text-[#052B4E]">Cash Request</h1>
        <div className="flex gap-4">
          <button className="flex items-center bg-white rounded-[15px] gap-2 px-3 py-2 text-gray-700 border ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            Filter
          </button>
          <button className="px-[32px] py-[12px] bg-[#055DAE] text-white text-[16px] font-[700] rounded-[15px] hover:bg-[#055DAE]">
            New Request
          </button>
        </div>
      </div>
      
      {/* Search and Date Range */}
      <div className="p-4 flex justify-between items-center border-b">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Search for Amount, Code or Branch name"
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>Aug 6, 2022 - Aug 13, 2022</span>
          <div className="border px-3 py-1 rounded-md ml-4">
            <span>Type</span>
            <svg className="inline-block ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <span className="ml-1">
                          {header.column.getIsSorted() === 'asc' ? (
                            '▲'
                          ) : header.column.getIsSorted() === 'desc' ? (
                            '▼'
                          ) : (
                            '▲▼'
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 rounded border flex items-center gap-1 disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
        </div>
        
        <div className="flex gap-1">
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => table.setPageIndex(page - 1)}
              className={`w-8 h-8 rounded-full ${
                table.getState().pagination.pageIndex === page - 1
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <div>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 rounded border flex items-center gap-1 disabled:opacity-50"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashRequestTable;