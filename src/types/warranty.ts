export type WarrantyStatus = 'submitted' | 'under-review' | 'approved' | 'denied' | 'completed';

export interface WarrantyRequest {
  id: string;
  productModel: string;
  serialNumber: string;
  purchaseDate: string;
  issueDescription: string;
  status: WarrantyStatus;
  submittedDate: string;
  lastUpdated: string;
  assignedAgent?: string;
  resolution?: string;
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  date: string;
  status: WarrantyStatus;
  description: string;
  agent?: string;
}