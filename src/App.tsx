import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './assets/styles/fww.css';
import Main from "./publish/main/mainRoutes";
import Admin from "./publish/admin/AdminRoutes";
import Guide from "./publish/guide/PartRoutes";
import PageLoading from "./publish/loading";
import NotFound from "./publish/notfound";
function App() {
	return (
		<Suspense fallback={<PageLoading />}>
			<BrowserRouter>
				<Switch>
					<Route path="/main" render={ Main} /> {/* 관리자페이지 */}
					<Route path="/admin" render={ Admin} /> {/* 사용자페이지 */}
					<Route path="/guide" render={ Guide} /> {/* 퍼블리셔 관리 파일 */} 
					{/* <Route path={"*"} component={NotFound}/> */}
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