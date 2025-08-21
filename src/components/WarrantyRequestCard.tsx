import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { WarrantyRequest } from "@/types/warranty";
import { Eye, Calendar, Package } from "lucide-react";

interface WarrantyRequestCardProps {
  request: WarrantyRequest;
  onViewDetails: (id: string) => void;
}

export function WarrantyRequestCard({ request, onViewDetails }: WarrantyRequestCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{request.productModel}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">ID: {request.id}</p>
          </div>
          <StatusBadge status={request.status} />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>Serial: {request.serialNumber}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Submitted: {new Date(request.submittedDate).toLocaleDateString()}</span>
          </div>
          
          <p className="text-sm line-clamp-2">{request.issueDescription}</p>
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-muted-foreground">
              Last updated: {new Date(request.lastUpdated).toLocaleDateString()}
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onViewDetails(request.id)}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}