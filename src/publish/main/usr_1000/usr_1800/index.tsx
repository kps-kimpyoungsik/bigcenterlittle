
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
					<li><Link to="#">이메일무단수집거부</Link></li>
				</ul>
				<main className="fww-main">
					<div className="member-join">
						<h1 className="tx tx-hd2">이메일무단수집거부</h1>
						<div className="fw-policy">
							<div className="top-box">
								동반성장위원회 및 대·중소기업·농어업협력재단에서 운영하는 "대·중소기업상생협력기금 관리시스템"를 이용하는 회원 및 이용자에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해, 본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 
								이를 위반 시 정보통신망 법에 의해 형사 처벌됨을 유의하시기 바랍니다.<br />
								<span className="date">(게시일: 2021년 4월 1일)</span>
							</div>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;