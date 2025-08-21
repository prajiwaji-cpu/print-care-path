// ELEPHANTPANTS: Replace with your actual API configuration
export const API_CONFIG = {
  // ELEPHANTPANTS: Put your API key here - this should be your internal tool's API key
  API_KEY: "YOUR_API_KEY_HERE",
  
  // ELEPHANTPANTS: Replace with your actual API base URL
  BASE_URL: "https://your-internal-api.company.com/api",
  
  // API endpoints for warranty requests
  ENDPOINTS: {
    // ELEPHANTPANTS: Replace these endpoint paths with your actual API routes
    GET_REQUESTS: "/warranty-requests",
    CREATE_REQUEST: "/warranty-requests",
    GET_REQUEST_DETAILS: "/warranty-requests/{id}",
    UPDATE_REQUEST: "/warranty-requests/{id}",
    GET_TIMELINE: "/warranty-requests/{id}/timeline"
  },
  
  // Request headers configuration
  HEADERS: {
    "Content-Type": "application/json",
    // ELEPHANTPANTS: The API key will be added to headers in the API service
  }
};

// ELEPHANTPANTS: This is where you'll configure authentication
export const getAuthHeaders = () => ({
  ...API_CONFIG.HEADERS,
  "Authorization": `Bearer ${API_CONFIG.API_KEY}`, // Adjust format as needed
  // or "X-API-Key": API_CONFIG.API_KEY, // if your API uses this format
});