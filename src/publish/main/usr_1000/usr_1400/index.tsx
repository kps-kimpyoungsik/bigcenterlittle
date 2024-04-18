
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
function ContentsContainer() {
	const [activeIndex, setActiveIndex]=useState(0);
	const tabClickHandler=(index:number)=>{
		setActiveIndex(index);
	};
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">로그인</Link></li>
				</ul>
				<main className="fww-main find-idpw-main">
					<div className="find-idpw">
						<h1 className="tx tx-hd2">아이디/비밀번호 찾기</h1>
						<ul className="tab-menu">
							<li className={activeIndex===0 ? "active" : ""} onClick={()=>tabClickHandler(0)}><button type="button">아이디찾기</button></li>
							<li className={activeIndex===1 ? "active" : ""} onClick={()=>tabClickHandler(1)}><button type="button">비밀번호찾기</button></li>
						</ul>
						<div className={ 'tab-cont' + (activeIndex===0 ? ' active' : '') }>
							<form name="" action="" method="">
								<div className="sub-txt">
									본인 명의의 휴대폰으로 인증번호를 받은 후,<br/> 서비스를 이용하실 수 있습니다.
								</div>
								<Link to="/main/usr_1000/usr_1402" className="button-certify">
									휴대폰 인증하기
								</Link>
							</form>
							<div className="information">
								<h3>안내</h3>
								<ul className="list-group">
									<li>이용자의 개인정보 보호를 위해 본인확인 절차가 필요합니다.</li>
									<li>정보통신망(2012.08.18 시행) 제23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을 제한합니다.</li>
									<li>입력하신 정보는 본인확인 용도 외 사용되거나 저장되지 않습니다.</li>
								</ul>
							</div>
						</div>
						<div className={ 'tab-cont' + (activeIndex===1 ? ' active' : '') }>
							<form name="" action="" method="">
								<div className="sub-txt">
									본인 명의의 휴대폰으로 인증번호를 받은 후,<br/> 서비스를 이용하실 수 있습니다.
								</div>
								<button type="button" className="button-certify">
									휴대폰 인증하기
								</button>
							</form>
							<div className="information">
								<h3>안내</h3>
								<ul className="list-group">
									<li>이용자의 개인정보 보호를 위해 본인확인 절차가 필요합니다.</li>
									<li>정보통신망(2012.08.18 시행) 제23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을 제한합니다.</li>
									<li>입력하신 정보는 본인확인 용도 외 사용되거나 저장되지 않습니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;