import { API_CONFIG, getAuthHeaders } from "@/config/api";
import { WarrantyRequest } from "@/types/warranty";

// ELEPHANTPANTS: Replace all these functions with actual API calls to your internal tool

export const warrantyApi = {
  // ELEPHANTPANTS: Fetch all warranty requests for the user
  async getRequests(): Promise<WarrantyRequest[]> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_REQUESTS}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch requests: ${response.statusText}`);
    }
    
    return response.json();
  },

  // ELEPHANTPANTS: Create a new warranty request
  async createRequest(requestData: Partial<WarrantyRequest>): Promise<WarrantyRequest> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CREATE_REQUEST}`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(requestData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create request: ${response.statusText}`);
    }
    
    return response.json();
  },

  // ELEPHANTPANTS: Get detailed information for a specific request
  async getRequestDetails(requestId: string): Promise<WarrantyRequest> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_REQUEST_DETAILS.replace("{id}", requestId)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch request details: ${response.statusText}`);
    }
    
    return response.json();
  },

  // ELEPHANTPANTS: Get timeline events for a specific request
  async getRequestTimeline(requestId: string) {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_TIMELINE.replace("{id}", requestId)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch timeline: ${response.statusText}`);
    }
    
    return response.json();
  }
};