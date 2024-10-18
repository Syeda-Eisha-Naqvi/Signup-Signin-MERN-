// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import SignUp from "./components/SignUp";
// import LogIn from "./components/Login";

// function App() {
// 	const user = localStorage.getItem("token");

// 	return (
// 		<Routes>
// 			{user && <Route path="/" exact element={<Main />} />}
// 			<Route path="/signup" exact element={<SignUp />} />
// 			<Route path="/login" exact element={<LogIn />} />
// 			<Route path="/" element={<Navigate replace to="/login" />} />
// 		</Routes>
// 	);
// }

// export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" element={user ? <Main /> : <Navigate to="/login" />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<LogIn />} />
			{/* Catch-all route to redirect to login if route doesn't exist */}
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
}

export default App;
