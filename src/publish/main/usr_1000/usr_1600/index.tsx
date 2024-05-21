
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Policy from './policy'
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">개인정보처리방침</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="member-join">
						<h1 className="tx tx-hd2">개인정보처리방침</h1>
						<Policy />
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;