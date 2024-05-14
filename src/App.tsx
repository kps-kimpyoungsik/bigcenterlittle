import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './assets/styles/fww.css';
import Main from "./publish/main/mainRoutes";
import Admin from "./publish/admin/AdminRoutes";
import Part from "./publish/part/PartRoutes";
import PageLoading from "./publish/loading";
function App() {
	return (
		<Suspense fallback={<PageLoading />}>
			<BrowserRouter>
				<Switch>
					<Route path="/main" render={ Main} /> {/* 관리자페이지 */}
					<Route path="/admin" render={ Admin} /> {/* 사용자페이지 */}
					<Route path="/part" render={ Part} /> {/* 퍼블리셔 관리 파일 */}
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