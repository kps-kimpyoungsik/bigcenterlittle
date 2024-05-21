
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import Terms from './term'
import Policy from './policy'
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
							<li className="active">STEP 1. 약관동의 및 인증</li>
							<li>STEP 2. 회원정보 입력</li>
							<li>STEP 3. 가입완료</li>
						</ul>
						<section className="join-section">
							<div className="join-top">
								<h3 className="section-title">이용약관 동의</h3>
								<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
									<input name="ch-all" id="ch-all" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">전체동의</span>
								</label>
							</div>
							<div className="terms-conts">
								<Terms />
							</div>
							<div className="join-agree">
								<label htmlFor="ch-1" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-1" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">동의합니다.</span>
								</label>
							</div>
						</section>
						<section className="join-section">
							<div className="join-top">
								<h3 className="section-title">개인정보수집 및 이용 안내</h3>
							</div>
							<div className="terms-conts">
								<Policy />
							</div>
							<div className="join-agree">
								<label htmlFor="ch-2" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-2" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">동의합니다.</span>
								</label>
							</div>
						</section>
						<div className="certification">
							<h3>본인 인증 확인</h3>
							<ul className="list-group">
								<li>이용자의 개인정보 보호를 위해 본인확인 절차가 필요합니다.</li>
								<li>정보통신망(2012.08.18 시행) 제23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을 제한합니다.</li>
								<li>입력하신 정보는 본인확인 용도 외 사용되거나 저장되지 않습니다.</li>
							</ul>
						</div>
						<div className="hz-root hz-center hz-gap10">
							<Button color='gray-o' size="big">취소</Button>
							<Button color='pri' size="big" href="/main/usr_1000/usr_1202">휴대폰 인증하기</Button>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;