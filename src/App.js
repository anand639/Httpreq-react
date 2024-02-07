import React, { useEffect, useState } from "react";
import { fetchData } from "./api/useFetch";
import { fetchDataWithXMLHttpRequest } from "./api/useXMLHttpRequest";
import {
	fetchData as fetchAxios,
	createData,
	updateData,
	deleteData,
} from "./api/useAxios";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);

	// useEffect hook  to perform side effects  in your components such as data fetching or manipulating the DOM. It can also be used to managed the dependencies change

	useEffect(() => {
		// Fetch data from the API
		fetchData("https://jsonplaceholder.typicode.com/posts")
			.then((data) => {
				console.log("Fetch Data: ", data); //log in the console
				setPosts(data); //update the posts state when data is fetched
			})
			.catch((error) => console.error(error)); //log any error that occur during fetching

		// Fetch the data using XMLHttpRequest
		fetchDataWithXMLHttpRequest(
			"https://jsonplaceholder.typicode.com/posts",
			"GET",
			(error, data) => {
				if (error) {
					console.error(error); //log any error
					return;
				}
				console.log("XMLHttpRequest Data: ", data); // log the response of XMLHttpRequst request
			}
		);

		// Fetch data using Axios.
		fetchAxios("/posts")
			.then((response) => {
				console.log("Axios data:", response.data); // Log the data fetched with Axios.
			})
			.catch((error) => console.error(error)); // Log any errors that occur.
	}, []);

	// UI component which will display the data on the web App
	return (
		<>
			<h1>Posts</h1>
			<ol>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</>
	);
}

export default App;
