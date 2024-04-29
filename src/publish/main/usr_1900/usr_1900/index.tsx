
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
					<li><Link to="#">제도소개</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr" data-width="mid">
					<h1 className="tx tx-hd2">제도소개</h1>
					<div className="fww-intro">
						<h2>대ㆍ중소기업 상생협력기금은,</h2>
						<section className="fww-intro-section">
							<h3 className="title">개요</h3>
							<p>내국법인이 중소기업과의 지속가능한 발전, 상생협력을 위하여 대‧ 중소기업‧농어업협력재단에 출연하는 민간기금(근거법령 : 상생협력법 제20조의5(대·중소기업상생협력기금의 설치 등))</p>
						</section>
						<section className="fww-intro-section">
							<h3 className="title">운영기관</h3>
							<div className="agency">
							<strong>대ㆍ중소기업ㆍ농어업협력재단</strong>
							<ul>
								<li>* 기관명 변경 : (‘04~’16) 대ㆍ중소기업협력재단 → (~‘17.1) 대ㆍ중소기업ㆍ농어업협력재단(FTA법 시행)</li>
								<li>* 대·중소기업·농어업협력재단은 공익법인으로 기획재정부 지정 법정기부금 단체</li>
							</ul>
							</div>
							<div className="card-group">
								<div className="card">
									<h6>출연주제</h6>
									<strong>대기업·중견기업, 중소기업, 공공기관 등 <br />내국법인</strong>
								</div>
								<div className="card">
									<h6>지원대상</h6>
									<strong>「중소기업기본법」 제2조에 따른 중소기업</strong>
									<p className="txt">지원제외 : 「법인세법」 제2조 제12호에 따른 특수관계인, 「중견기업법」 제2조에 따른 중견기업, 공정위 공시 상호출자제한집단으로 지정된 대기업</p>
								</div>
								<div className="card">
									<h6>출연시 세제혜택</h6>
									<ul className="list-group">
										<li>출연금의 10%를 법인세에서 공제<span>(조특법 제8조의3)</span></li>
										<li>출연금 100%까지 기부금 인정하여 소득금액의10% 범위 <br />내 손금산입<span>(법인세법 제24조)</span></li>
										<li>상호출자제한기업집단의 유휴자금에 대한 ‘투자상생협력촉진세제’ 부과시 상생협력기금 출연액의 3배를 비용으로 공제<span>(조특법 100조의32)</span></li>
									</ul>
								</div>
							</div>
						</section>
						<section className="fww-intro-section">
							<h3 className="title">대ㆍ중소기업 상생협력기금 법률안내</h3>
							<div className="fww-law">
								<h6>상생협력법 제20조의 5</h6>
								<p className="mb18">
									20조의5(대ㆍ중소기업상생협력기금의 설치 등) <br />
									① 대ㆍ중소기업 간의 지속가능한 발전, 상생협력 촉진 및 동반성장을 통한 국민경제의 지속성장 기반을 마련하기 위하여 재단에 <br />
									대ㆍ중소기업상생협력기금(이하 “상생협력기금”이라 한다)을 설치한다.<br />
									② 재단은 상생협력기금을 다른 회계와 구분하여 별도 회계로 관리ㆍ운용하여야 한다.<br />
									③ 상생협력기금은 내국법인 출연금 등으로 조성한다.<br />
									④ 제3항에 따라 출연하는 자는 그 용도와 사업을 지정할 수 있다. 이 경우 재단은 그 지정된 용도와 사업에 출연금 등을 사용하여야 한다.<br />
									⑤ 상생협력기금은 다음 각 호의 용도에 사용하여야 한다.<br />
									1. 대ㆍ중소기업 간 상생협력 성과의 공평한 배분에 관한 사업<br />
									2. 대ㆍ중소기업 간 기술협력 촉진 사업<br />
									3. 대ㆍ중소기업 간 인력교류 확대 사업<br />
									4. 대ㆍ중소기업 간 환경경영협력 촉진 사업<br />
									5. 대ㆍ중소기업 간 임금격차 완화 및 일자리 창출 지원 사업<br />
									6. 상생협력기금의 조성ㆍ운용 및 관리를 위한 경비<br />
									7. 그 밖에 대ㆍ중소기업 간 협력을 위한 것으로서 대통령령으로 정하는 사업
								</p>
								<h6>상생협력법 시행령 제13조의 4</h6>
								<p>
									「대ㆍ중소기업 상생협력 촉진에 관한 법률」 시행령 제13조의4(대ㆍ중소기업상생협력기금의 용도) 법 제20조의5제5항제7호에서 <br />
									“대통령령으로 정하는 사업”이란 다음 각 호의 사업을 말한다.<br />
									1. 중소기업의 생산성 향상을 위한 지원 사업<br />
									2. 중소기업의 기술 보호 지원 사업<br />
									3. 중소기업 및 벤처기업의 창업 지원 사업<br />
									4. 대ㆍ중소기업의 국내외 판로 확대를 위한 공동 협력 사업<br />
									5. 대ㆍ중소기업 간 거래 공정화 지원 사업<br />
									6. 대ㆍ중소기업 간 동반성장 기반 구축 및 문화 확산에 관한 사업<br />
								</p>
							</div>
							
						</section>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;