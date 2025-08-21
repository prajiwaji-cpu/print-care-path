import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { WarrantyRequestCard } from "@/components/WarrantyRequestCard";
import { NewRequestForm } from "@/components/NewRequestForm";
import { RequestDetails } from "@/components/RequestDetails";
import { StatusBadge } from "@/components/StatusBadge";
// ELEPHANTPANTS: Replace with API call to fetch warranty requests
import { mockWarrantyRequests } from "@/data/mockData";
import { WarrantyRequest } from "@/types/warranty";
import { Plus, Search, FileText, Clock, CheckCircle, XCircle } from "lucide-react";

const Index = () => {
  // ELEPHANTPANTS: Replace mockWarrantyRequests with API call
  const [requests, setRequests] = useState<WarrantyRequest[]>(mockWarrantyRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  const filteredRequests = requests.filter(request =>
    request.productModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedRequest = selectedRequestId 
    ? requests.find(r => r.id === selectedRequestId)
    : null;

  const handleNewRequest = (formData: any) => {
    // ELEPHANTPANTS: Replace with API call to submit new warranty request
    const newRequest: WarrantyRequest = {
      id: `WR-2024-${String(requests.length + 1).padStart(3, '0')}`,
      ...formData,
      status: "submitted" as const,
      submittedDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      timeline: [{
        date: new Date().toISOString().split('T')[0],
        status: "submitted" as const,
        description: "Warranty request submitted by customer"
      }]
    };
    
    setRequests(prev => [newRequest, ...prev]);
    setShowNewForm(false);
  };

  const getStatusCounts = () => {
    return {
      total: requests.length,
      submitted: requests.filter(r => r.status === 'submitted').length,
      underReview: requests.filter(r => r.status === 'under-review').length,
      approved: requests.filter(r => r.status === 'approved').length,
      denied: requests.filter(r => r.status === 'denied').length,
    };
  };

  if (selectedRequest) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <RequestDetails 
            request={selectedRequest}
            onBack={() => setSelectedRequestId(null)}
          />
        </div>
      </div>
    );
  }

  if (showNewForm) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <NewRequestForm
            onSubmit={handleNewRequest}
            onCancel={() => setShowNewForm(false)}
          />
        </div>
      </div>
    );
  }

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Warranty Portal
              </h1>
              <p className="text-muted-foreground mt-1">Manage your printer warranty requests</p>
            </div>
            <Button onClick={() => setShowNewForm(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-bold">{statusCounts.total}</div>
              <p className="text-sm text-muted-foreground">Total Requests</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold">{statusCounts.submitted}</div>
              <p className="text-sm text-muted-foreground">Submitted</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Search className="h-5 w-5 text-warning" />
              </div>
              <div className="text-2xl font-bold">{statusCounts.underReview}</div>
              <p className="text-sm text-muted-foreground">Under Review</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div className="text-2xl font-bold">{statusCounts.approved}</div>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
              <div className="text-2xl font-bold">{statusCounts.denied}</div>
              <p className="text-sm text-muted-foreground">Denied</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRequests.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No requests found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first warranty request"}
              </p>
              {!searchTerm && (
                <Button onClick={() => setShowNewForm(true)} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Request
                </Button>
              )}
            </div>
          ) : (
            filteredRequests.map((request) => (
              <WarrantyRequestCard
                key={request.id}
                request={request}
                onViewDetails={setSelectedRequestId}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
