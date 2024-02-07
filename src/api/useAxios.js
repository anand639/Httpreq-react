import axios from "axios";
// create a custom instance of axios with predefined configuration
// this makes it easier to reuse and manage common setting across all request that you make
const apiClient = axios.create({
	// baseURL this is the starting point of every request
	baseURL: "https://jsonplaceholder.typicode.com",

	// headers are sent with every req to provide addEventListener. info to the server
	// here we will tell the server i req some data and expecting the res in JSON
	headers: {
		"Content-Type": "application/json",
	},
});
// Export a function to fetch data from specific path
export const fetchData = (path) => apiClient.get(path);

// Export a function to create new data on the server
export const createData = (path, data) => apiClient.post(path, data);

// Export a function to update existing data on the server
export const updateData = (path, data) => apiClient.put(path, data);

// Export a function to delete data from the specific path.
export const deleteData = (path) => apiClient.delete(path);
