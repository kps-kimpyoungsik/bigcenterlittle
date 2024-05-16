import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import Button from 'components/buttons/';
function HomeContainer(){
	return (
		<PageContainer>
			<div className='fww-con'>
				<main className="usr-home">
					<section className="home-section" data-section="visual">
						<div className="inner">
							<div className="visual-box">
								<p className="sub-tx">대·중소기업상생협력기금</p>
								<h1>상생협력</h1>
								<h3>지속 가능한 발전, 상생협력 촉진, 동반성장</h3>
								<div className="tx-cont">
									대·중소기업·농어업 협력재단에 출연하는 민간 기금으로 대·중소기업 간의 지속가능한 발전,<br />
									상생협력 촉진 및 동반성장을 통한 국민경제의 지속성장 기반 마련에 이바지합니다.
								</div>
								<Button color='pri' size="big">기금소개 바로가기</Button>
							</div>
							
						</div>
					</section>
					<section className="home-section" data-section="business">
						<div className="inner">
							<h2 className="section-title">대·중소기업상생협력기금 활용 사업</h2>
							<ul className="business-group">
								<li><Link to="#"><i className="ico bs01"></i>동반성장투자재원</Link></li>
								<li><Link to="#"><i className="ico bs02"></i>공동투자형기술개발</Link></li>
								<li><Link to="#"><i className="ico bs03"></i>산업혁신운동</Link></li>
								<li><Link to="#"><i className="ico bs04"></i>대·중소 상생형스마트공장</Link></li>
								<li><Link to="#"><i className="ico bs05"></i>대·중소기업 혁신파트너</Link></li>
								<li><Link to="#"><i className="ico bs06"></i>대중소기업 동반진출</Link></li>
								<li><Link to="#"><i className="ico bs07"></i>기업자율형 상생프로그램</Link></li>
								<li><Link to="#"><i className="ico bs08"></i>성과 공유제</Link></li>
								<li><Link to="#"><i className="ico bs09"></i>협력이익 공유제</Link></li>
								<li><Link to="#"><i className="ico bs10"></i>협력사ESG 평가지원</Link></li>
							</ul>
						</div>
					</section>
					<section className="home-section"  data-section="board">
						<div className="inner">
							<div className="board-group">
								<div className="bd-card notice">
									<h3 className="bd-title">안내사항</h3>
									<ul className="bd-list">
										<li>
											<label className="badge red">중요</label>
											<div className="subject"><Link to="#"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">중요</label>
											<div className="subject"><Link to="#"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">중요</label>
											<div className="subject"><Link to="#"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">중요</label>
											<div className="subject"><Link to="#"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">중요</label>
											<div className="subject"><Link to="#"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
									</ul>
									<button type="button" className="button-more">더보기</button>
								</div>
								<div className="bd-group">
									<div className="bd-card faq">
										<h3 className="bd-title">자주하는 질문</h3>
										<ul className="bd-list">
											<li>
												<label className="badge yellow">Q.</label>
												<div className="subject"><Link to="#"  className="tx tx-link">상생협력기금이란 무엇인가요?</Link></div>
												<div className="date">2024.03.30</div>
											</li>
											<li>
												<label className="badge yellow">Q.</label>
												<div className="subject"><Link to="#"  className="tx tx-link">상생협력기금 현황 등 보고는 어디에서 확인하나요?</Link></div>
												<div className="date">2024.03.30</div>
											</li>
										</ul>
										<button type="button" className="button-more">더보기</button>
									</div>
									<div className="bd-card excellet">
										<h3 className="bd-title">지원사례</h3>
										<ul className="bd-list">
											<li>
												<label className="badge green">사례</label>
												<div className="subject"><Link to="#"  className="tx tx-link">생협력기금 지원사례_임금격차완화, 일자리창출, 벤처창업</Link></div>
												<div className="date">2024.03.30</div>
											</li>
											<li>
												<label className="badge green">사례</label>
												<div className="subject"><Link to="#"  className="tx tx-link">상생협력기금 지원사례_동반성장 기반 구축 및 문화 확산편</Link></div>
												<div className="date">2024.03.30</div>
											</li>
										</ul>
										<button type="button" className="button-more">더보기</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="home-section" data-section="banner">
						<div className="inner">
							<div className="banner-group">
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr01.png')} alt="상생누리" /></Link>
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr02.png')} alt="상생결제 제도" /></Link>
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr03.png')} alt="대중소 기업 농어업 협력재단 기술자료 임치센터" /></Link>
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr04.png')} alt="대중소 기업 농어업 협력재단 원본 증명서비스" /></Link>
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr05.png')} alt="농어촌 상생협력기금" /></Link>
								<Link to="#" target="_blank"><img src={require('assets/img/pages/usr_bnr06.png')} alt="협력이익공유제 종합정보시스템" /></Link>
							</div>
						</div>
					</section>
				</main>
			</div>
		</PageContainer>
	);
}
export default HomeContainer;