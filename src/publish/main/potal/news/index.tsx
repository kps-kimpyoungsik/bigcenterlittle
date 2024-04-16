
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../PortalAside";
function NoticeContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="/main/">Depth1</Link></li>
					<li><Link to="#">Depth2</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd1">HD1 타이틀 영역</h1>
				</main>
			</div>			
		</PageContainer>
	);
}
export default NoticeContainer;