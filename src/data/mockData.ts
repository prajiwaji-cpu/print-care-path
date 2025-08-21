import { WarrantyRequest } from "@/types/warranty";

export const mockWarrantyRequests: WarrantyRequest[] = [
  {
    id: "WR-2024-001",
    productModel: "ProPrint 5000X",
    serialNumber: "PP5X-2024-789456",
    purchaseDate: "2024-01-15",
    issueDescription: "Printer produces faded prints and makes unusual grinding noise during operation. Issue started occurring after 3 months of regular office use.",
    status: "approved",
    submittedDate: "2024-03-20",
    lastUpdated: "2024-03-25",
    assignedAgent: "Sarah Chen",
    resolution: "Approved for replacement under hardware warranty. New unit will be shipped within 3-5 business days.",
    timeline: [
      {
        date: "2024-03-20",
        status: "submitted",
        description: "Warranty request submitted by customer",
      },
      {
        date: "2024-03-21",
        status: "under-review",
        description: "Request assigned to technical review team",
        agent: "Mike Johnson"
      },
      {
        date: "2024-03-23",
        status: "under-review", 
        description: "Technical analysis completed. Hardware failure confirmed.",
        agent: "Sarah Chen"
      },
      {
        date: "2024-03-25",
        status: "approved",
        description: "Warranty claim approved. Replacement unit authorized.",
        agent: "Sarah Chen"
      }
    ]
  },
  {
    id: "WR-2024-002",
    productModel: "EcoJet 2500",
    serialNumber: "EJ25-2023-456123",
    purchaseDate: "2023-08-10",
    issueDescription: "Ink cartridge not recognized by printer. Tried multiple new cartridges but error persists.",
    status: "under-review",
    submittedDate: "2024-03-18",
    lastUpdated: "2024-03-22",
    assignedAgent: "David Park",
    timeline: [
      {
        date: "2024-03-18",
        status: "submitted",
        description: "Warranty request submitted by customer",
      },
      {
        date: "2024-03-19",
        status: "under-review",
        description: "Request received and assigned for technical review",
        agent: "David Park"
      },
      {
        date: "2024-03-22",
        status: "under-review",
        description: "Diagnostic tests requested. Awaiting customer response.",
        agent: "David Park"
      }
    ]
  },
  {
    id: "WR-2024-003",
    productModel: "LaserMax Pro",
    serialNumber: "LMP-2021-998877",
    purchaseDate: "2021-05-20",
    issueDescription: "Frequent paper jams and toner smearing on documents.",
    status: "denied",
    submittedDate: "2024-03-15",
    lastUpdated: "2024-03-20",
    assignedAgent: "Lisa Rodriguez",
    resolution: "Warranty claim denied. Device is beyond 3-year warranty period. Recommended maintenance service available at discounted rate.",
    timeline: [
      {
        date: "2024-03-15",
        status: "submitted",
        description: "Warranty request submitted by customer",
      },
      {
        date: "2024-03-16", 
        status: "under-review",
        description: "Request under review. Checking warranty coverage.",
        agent: "Lisa Rodriguez"
      },
      {
        date: "2024-03-20",
        status: "denied",
        description: "Warranty expired. Maintenance service recommended.",
        agent: "Lisa Rodriguez"
      }
    ]
  },
  {
    id: "WR-2024-004",
    productModel: "OfficeJet Elite",
    serialNumber: "OJE-2024-334455",
    purchaseDate: "2024-02-01",
    issueDescription: "WiFi connectivity issues. Cannot connect to network despite multiple troubleshooting attempts.",
    status: "submitted",
    submittedDate: "2024-03-26",
    lastUpdated: "2024-03-26",
    timeline: [
      {
        date: "2024-03-26",
        status: "submitted",
        description: "Warranty request submitted by customer",
      }
    ]
  }
];