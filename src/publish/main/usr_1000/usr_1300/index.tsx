
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				{/* 
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">로그인</Link></li>
				</ul>
				 */}
				<main className="fww-main sign-in-main">
					<div className="sign-in">
						<div className="left-box">
							<div className="middle">
								<ul className="list-group">
									<li>출연기업 담당자별로 개별 회원가입이 가능합니다.</li>
									<li>출연기업(사업자등록번호)가 일치하면 담당자가 다르더라도<br />출연현황, 과제신청현황, 지급현황 등 조회가 가능합니다.</li>
								</ul>
								<div className="sign-in-info">
									시스템 사용 에러 문의 고객센터: <span className="fc-333">02-368-8@@@</span><br />
									상생협력기금 출연,사용 신청 등 문의사항 : 사업별 담당자 <Link to="/main/usr_1900/usr_1902"><span  className="fc-333 underline">조직도 바로가기</span></Link>
								</div>
							</div>
						</div>
						<div className="right-box">
							<h1 className="tx tx-hd1">로그인</h1>
							<p className="tx-doc">승인된 상생협력기금 (예비)출연기업 담당자에게<br />서비스를 제공합니다</p>
							<h4 className="sign-in-title">MEMBERSHIP LOGIN</h4>
							<form className="sign-form" name="" action="" method="">
								<div className="form-items mb12">
									<UIInput className={'tf tf-big w100p tf-error'} value={''} placeholder={'아이디를 입력하세요'} />
								</div>
								<p className="tx-invalid mb12">에러 안내 메세지</p>
								<div className="form-items mb12">
									<UIInputPW className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} />

									{/* P24(usr_1300) 로그인 패스워드 입력 edit 에 마우스 디자인 제거 */}
									{/* <div className="kpd-check"><input type="checkbox" id="kpd-chk" defaultChecked/><label htmlFor="kpd-chk">키보드 보안입력</label></div> */}
									
								</div>
								<div className="mb30">
									<label htmlFor="ch-id" className="hz-item ip-ch-label ip-ch-18">
										<input id="ch-id" className="ip-ch" type="checkbox" />
										<span className="check"></span> 
										<span className="txt">아이디 저장</span>
									</label>
								</div>
								<div className="hz-root hz-center hz-gap10">
									<Button color='pri' size="big">로그인</Button>
								</div>
								<div className="sign-link">
									<Link className="tx tx-link" to="/main/usr_1000/usr_1200">회원가입</Link>
									<Link className="tx tx-link" to="/main/usr_1000/usr_1400">아이디/비밀번호 찾기</Link>
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;