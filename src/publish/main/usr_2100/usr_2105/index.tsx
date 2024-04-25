import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금운영</Link></li>
					<li><Link to="#">과제현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제승인신청</h1>
					
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;