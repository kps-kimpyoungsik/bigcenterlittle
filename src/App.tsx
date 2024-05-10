import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './assets/styles/fww.css';
import Main from "./publish/main/mainRoutes";
import Admin from "./publish/admin/AdminRoutes";
import NotFound from "./publish/norfound";
import PageLoading from "./publish/loading";
function App() {
	return (
		<Suspense fallback={<PageLoading />}>
			<BrowserRouter>
				<Switch>
					<Route path="/main" render={ Main} />
					<Route path="/admin" render={ Admin} />
					<Route path="/*" render={NotFound} />
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
		</Suspense>
	);
}
export default App;