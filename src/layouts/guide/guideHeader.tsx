
import React from "react";
import { Link, useLocation  } from 'react-router-dom';
function LayoutHeader() {
	const location = useLocation();
	return (
		<header className="stk-header">
			<div className="inner">
				<h1>INDEX-관리자페이지 (대·중소기업 상생협력기금 종합관리시스템 퍼블리싱)</h1>
				<nav>
					<ul>
						<li className={location.pathname === '/guide' ? 'active' : ''}><Link to="/guide" >사용자 페이지</Link></li>
						<li className={location.pathname === '/guide/admin' ? 'active' : ''}><Link to="/guide/admin" >관리자 페이지</Link></li>
						<li className={location.pathname === '/guide/part' ? 'active' : ''}><Link to="/guide/part" >퍼블부품</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
export default LayoutHeader;