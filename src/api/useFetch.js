// Define async fetchData func. that can be used to make HTTP req.
// it takes 3  parameters : `url` `method` and `data`.
export const fetchData = async (url, method = "GET", data = null) => {
	// Create an option object that will configure the fetch req.
	const options = {
		method,
		headers: {
			"Content-Type": "application/json", //this tells the server to expect JSON data
		},
	};
	// If data is provided convert it from javascript obj to JSON String
	// and add it to the options object under the body.. this is very important step
	// because the body of fetch req must be a string when you are sending JSON
	if (data) {
		options.body = JSON.stringify(data);
	}
	try {
		// Use the fetch to make the request with provided URL and options
		// awaits pause the req execution until the req completed and promise settles
		const response = await fetch(url, options);
		// if the response will not successful (not in range 200-299)
		// throw an error
		if (!response.ok) throw new Error("Network response is not OK");
		// if the response is successful then extract the JSON
		// and return it
		return await response.json();
	} catch (error) {
		console.error("Fetch Error: ", error);
		throw error;
	}
};
