// types.ts
export type RequestStatus = 'Approved' | 'Pending';

export interface RequestData {
  id: string;
  status: RequestStatus;
  type: string;
  destination: string;
  branch: string;
}

export type CashRequest = {
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