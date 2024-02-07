// define a function fetchDataWithXMLHttpRequest for making HTTP request
// it accept three parameters: url, method, callback
export const fetchDataWithXMLHttpRequest = (url, method = "GET", callback) => {
	// create a new XMLHttpReq object. this will allow to make the http req.
	const xhr = new XMLHttpRequest();
	// initialize the req with open() method that we are ready to send the req.
	xhr.open(method, url);
	// Set a request header to tell the server the format of data that i need or that to be sent by the server
	xhr.setRequestHeader("Content-Type", "application/JSON");
	// define what happen when the state change the req.
	xhr.onreadystatechange = () => {
		// check if req. is completed
		if (xhr.readyState === XMLHttpRequest.DONE) {
			// req fullfil status code is 200 then parse the JSON  and call back the function
			if (xhr.status === 200) {
				callback(null, JSON.parse(xhr.response));
			} else {
				// if req. failed
				callback(new Error("Request  failed with status" + xhr.status), null);
			}
		}
	};
	xhr.send();
};
