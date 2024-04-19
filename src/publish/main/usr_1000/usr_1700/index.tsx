
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
//import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">이용약관</Link></li>
				</ul>
				<main className="fww-main">
					<div className="member-join">
						<h1 className="tx tx-hd2">이용약관</h1>
						최신화된 문서 수급 필요
					</div>
				</main>
				
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;