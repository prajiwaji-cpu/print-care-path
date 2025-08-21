import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

interface NewRequestFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function NewRequestForm({ onSubmit, onCancel }: NewRequestFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productModel: "",
    serialNumber: "",
    purchaseDate: "",
    issueDescription: "",
    category: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productModel || !formData.serialNumber || !formData.issueDescription) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    onSubmit(formData);
    toast({
      title: "Request Submitted",
      description: "Your warranty request has been submitted successfully.",
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Warranty Request
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="productModel">Product Model *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({...prev, productModel: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select printer model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ProPrint 5000X">ProPrint 5000X</SelectItem>
                  <SelectItem value="ProPrint 3000">ProPrint 3000</SelectItem>
                  <SelectItem value="EcoJet 2500">EcoJet 2500</SelectItem>
                  <SelectItem value="LaserMax Pro">LaserMax Pro</SelectItem>
                  <SelectItem value="OfficeJet Elite">OfficeJet Elite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="serialNumber">Serial Number *</Label>
              <Input
                id="serialNumber"
                value={formData.serialNumber}
                onChange={(e) => setFormData(prev => ({...prev, serialNumber: e.target.value}))}
                placeholder="Enter serial number"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="purchaseDate">Purchase Date</Label>
              <Input
                id="purchaseDate"
                type="date"
                value={formData.purchaseDate}
                onChange={(e) => setFormData(prev => ({...prev, purchaseDate: e.target.value}))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Issue Category</Label>
              <Select onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="print-quality">Print Quality</SelectItem>
                  <SelectItem value="hardware-failure">Hardware Failure</SelectItem>
                  <SelectItem value="connectivity">Connectivity</SelectItem>
                  <SelectItem value="software">Software Issues</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issueDescription">Issue Description *</Label>
            <Textarea
              id="issueDescription"
              value={formData.issueDescription}
              onChange={(e) => setFormData(prev => ({...prev, issueDescription: e.target.value}))}
              placeholder="Please describe the issue you're experiencing with your printer..."
              rows={4}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Submit Request
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}