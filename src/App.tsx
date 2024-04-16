import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './assets/styles/fww.css';
import Main from "./publish/main/mainRoutes";
import Admin from "./publish/admin/AdminRoutes";
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/main" render={ Main} />
				<Route path="/admin" render={ Admin} />
			</Switch>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				draggable={false}
				hideProgressBar
				newestOnTop
				closeOnClick
				pauseOnHover
			/>
		</BrowserRouter>
	);
}
export default App;