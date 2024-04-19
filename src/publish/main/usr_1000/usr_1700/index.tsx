
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">회원가입</Link></li>
				</ul>
				<main className="fww-main">
					
				</main>
			</div>				
		</PageContainer>
	);
}
export default ContentsContainer;