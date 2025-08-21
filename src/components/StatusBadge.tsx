import { Badge } from "@/components/ui/badge";
import { WarrantyStatus } from "@/types/warranty";

interface StatusBadgeProps {
  status: WarrantyStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusConfig = (status: WarrantyStatus) => {
    switch (status) {
      case 'submitted':
        return { text: 'Submitted', variant: 'secondary' as const };
      case 'under-review':
        return { text: 'Under Review', variant: 'default' as const };
      case 'approved':
        return { text: 'Approved', variant: 'default' as const, className: 'bg-success text-success-foreground hover:bg-success/80' };
      case 'denied':
        return { text: 'Denied', variant: 'destructive' as const };
      case 'completed':
        return { text: 'Completed', variant: 'default' as const, className: 'bg-info text-info-foreground hover:bg-info/80' };
      default:
        return { text: status, variant: 'secondary' as const };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge 
      variant={config.variant} 
      className={config.className}
    >
      {config.text}
    </Badge>
  );
}