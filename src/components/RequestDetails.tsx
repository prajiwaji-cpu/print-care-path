import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RequestTimeline } from "./RequestTimeline";
import { StatusBadge } from "./StatusBadge";
import { WarrantyRequest } from "@/types/warranty";
import { ArrowLeft, Package, Calendar, User, FileText } from "lucide-react";

interface RequestDetailsProps {
  request: WarrantyRequest;
  onBack: () => void;
}

export function RequestDetails({ request, onBack }: RequestDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">Request Details</h1>
          <p className="text-muted-foreground">ID: {request.id}</p>
        </div>
        <StatusBadge status={request.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Request Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Product Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Product Model</label>
                  <p className="text-lg font-semibold">{request.productModel}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Serial Number</label>
                  <p className="font-mono text-sm bg-muted px-2 py-1 rounded">{request.serialNumber}</p>
                </div>
              </div>
              
              {request.purchaseDate && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Purchase Date</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(request.purchaseDate).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Issue Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{request.issueDescription}</p>
            </CardContent>
          </Card>

          {request.resolution && (
            <Card className={request.status === 'approved' ? 'border-success/20 bg-success/5' : 'border-destructive/20 bg-destructive/5'}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{request.resolution}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Timeline and Status */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Request Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <StatusBadge status={request.status} />
              </div>
              
              <Separator />
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submitted:</span>
                  <span>{new Date(request.submittedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>{new Date(request.lastUpdated).toLocaleDateString()}</span>
                </div>
                {request.assignedAgent && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Assigned Agent:</span>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span className="text-sm">{request.assignedAgent}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <RequestTimeline timeline={request.timeline} currentStatus={request.status} />
        </div>
      </div>
    </div>
  );
}