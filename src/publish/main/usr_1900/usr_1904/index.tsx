import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">상생협력기금안내</Link></li>
					<li><Link to="#">수요조사</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">수요조사</h1>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;