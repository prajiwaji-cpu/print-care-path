import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TimelineEvent, WarrantyStatus } from "@/types/warranty";
import { CheckCircle, Clock, XCircle, AlertCircle, User } from "lucide-react";

interface RequestTimelineProps {
  timeline: TimelineEvent[];
  currentStatus: WarrantyStatus;
}

export function RequestTimeline({ timeline, currentStatus }: RequestTimelineProps) {
  const getStatusIcon = (status: WarrantyStatus, isCompleted: boolean) => {
    if (!isCompleted) {
      return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
    
    switch (status) {
      case 'approved':
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'denied':
        return <XCircle className="h-4 w-4 text-destructive" />;
      case 'under-review':
        return <AlertCircle className="h-4 w-4 text-warning" />;
      default:
        return <CheckCircle className="h-4 w-4 text-primary" />;
    }
  };

  const getStatusText = (status: WarrantyStatus) => {
    switch (status) {
      case 'submitted': return 'Submitted';
      case 'under-review': return 'Under Review';
      case 'approved': return 'Approved';
      case 'denied': return 'Denied';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timeline.map((event, index) => {
            const isLast = index === timeline.length - 1;
            const isCompleted = true; // All timeline events are completed
            
            return (
              <div key={index} className="relative flex gap-4">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-5 top-8 w-0.5 h-12 bg-border" />
                )}
                
                {/* Status icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center">
                  {getStatusIcon(event.status, isCompleted)}
                </div>
                
                {/* Event content */}
                <div className="flex-grow min-w-0 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {getStatusText(event.status)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <p className="text-sm text-foreground mb-2">{event.description}</p>
                  
                  {event.agent && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>Handled by {event.agent}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}