
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
				<main className="fww-main" data-layout="usr">
					<div className="member-join">
						<h1 className="tx tx-hd2">회원가입</h1>
						<ul className="join-step">
							<li className="pass">STEP 1. 약관동의 및 인증</li>
							<li className="pass">STEP 2. 회원정보 입력</li>
							<li className="active">STEP 3. 가입완료</li>
						</ul>
						<div className="join-complete">
							<h3><span className="fc-pri">회원가입</span> 요청이 완료되었습니다.</h3>
							<p className="sub-txt">
								입력하신 메일로 <span className="fc-pri">인증메일</span>이 발송되었습니다.<br />
								인증메일의 링크를 <span className="fc-pri">클릭</span>하여 인증을 완료하시면 이용이 가능합니다.
							</p>
							<div className="hz-root hz-center">
								<Button color='pri' size="big" href="/main/usr_1000/usr_1300">로그인 페이지로 이동</Button>
							</div>
						</div>

					</div>
				</main>
			</div>				
		</PageContainer>
	);
}
export default ContentsContainer;