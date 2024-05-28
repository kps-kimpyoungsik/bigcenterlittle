import React, {useState} from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
//import Button from 'components/buttons/';
function HomeContainer(){
	const [sidebar, setSidebar] = useState(false);
	const [checked, setChecked] = useState(true);
	const checkHandled = ({target}) => {
		if (target.checked) {setChecked(true)} else {setChecked(false)}
	}
	const bnr = [
		{src:'usr_bnr01.png',alt:'상생누리',url:'https://www.winwinnuri.or.kr/'},
		{src:'usr_bnr02.png',alt:'상생결제 제도',url:'https://www.winwinpay.or.kr/'},
		{src:'usr_bnr03.png',alt:'대중소 기업 농어업 협력재단 기술자료 임치센터',url:'https://www.kescrow.or.kr/'},
		{src:'usr_bnr04.png',alt:'대중소 기업 농어업 협력재단 원본 증명서비스',url:'https://proof.kescrow.or.kr/verification/'},
		{src:'usr_bnr05.png',alt:'농어촌 상생협력기금',url:'https://www.winwinfund.or.kr/'},
		{src:'usr_bnr06.png',alt:'협력이익공유제 종합정보시스템',url:'https://www.winplus.or.kr/'},
	];
  	// useEffect(() => { 
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 68) setFixed(true);
	// 		else setFixed(false)
	// 	};
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);
	return (
		<PageContainer>
			<div className='fww-con'>
				<main className="usr-home">
					<div className={checked ? 'usr-direct' : 'usr-direct no-bg'}>
						<h4>업무별 바로가기</h4>
						<div className="switch-button">
							<input type="checkbox" id="switch-chk" checked={checked} onChange={(e) => checkHandled(e)}/>
							<label htmlFor="switch-chk" >
								<span className="toggle"></span>
							</label>
						</div>
						<div className={checked ? 'direct-links' : 'direct-links hidden'}>
							<div className="direct-items">
								<h3>출연관리</h3>
								<ul>
									<li><Link to="/main/usr_2000/usr_2000" className="item-link"><i className="ico don1"></i>출연신청</Link></li>
									<li><Link to="/main/usr_2000/usr_2002" className="item-link"><i className="ico don2"></i>출연현황</Link></li>
								</ul>
							</div>
							<div className="direct-items">
								<h3>과제관리</h3>
								<ul>
									<li><Link to="/main/usr_2100/usr_2100" className="item-link"><i className="ico tsk1"></i>과제승인신청</Link></li>
									<li><Link to="/main/usr_2100/usr_2105" className="item-link"><i className="ico tsk2"></i>과제현황</Link></li>
								</ul>
							</div>
							<div className="direct-items">
								<h3>지급관리</h3>
								<ul>
									<li><Link to="/main/usr_2100/usr_2114" className="item-link"><i className="ico pay1"></i>지급정산신청</Link></li>
									<li><Link to="/main/usr_2100/usr_2123" className="item-link"><i className="ico pay2"></i>지급현황</Link></li>
								</ul>
							</div>
						</div>
					</div>
					
					<section className="home-section" data-section="visual">
						<div className="inner">
							<div className="visual-box">
								<p className="sub-tx">대·중소기업농·어업협력재단</p>
								<h1>상생협력기금</h1>
								<div className="tx-cont">
									<strong>기업간의 상생협력 촉진을 통해 국민경제의 지속성장 기반을 마련합니다.</strong><br />
									본 홈페이지는 상생협력기금의 제도를 소개하고 <br />
									실제 출연부터 과제신청이 가능한 종합시스템입니다.
								</div>
								<Link to="#" className="tx tx-link">상생협력기금 출연기업 담당자 로그인 바로가기</Link>
							</div>
							
						</div>
					</section>
					<section className="home-section"  data-section="board">
						<div className="inner">
							<div className="board-group">
								<div className="bd-card notice">
									<h3 className="bd-title">안내사항</h3>
									<ul className="bd-list">
										<li>
											<label className="badge red">공지</label>
											<div className="subject"><Link to="/main/usr_2300/usr_2301"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">공지</label>
											<div className="subject"><Link to="/main/usr_2300/usr_2301"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">공지</label>
											<div className="subject"><Link to="/main/usr_2300/usr_2301"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">공지</label>
											<div className="subject"><Link to="/main/usr_2300/usr_2301"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
										<li>
											<label className="badge red">공지</label>
											<div className="subject"><Link to="/main/usr_2300/usr_2301"  className="tx tx-link">대·중소기업상생협력기금 운영·관리 규정</Link></div>
											<div className="date">2024.03.30</div>
										</li>
									</ul>
									<Link to="/main/usr_2300/usr_2300" className="button-more">더보기</Link>
								</div>
								<div className="bd-card research">
									<h3 className="bd-title">수요조사</h3>
									<ul className="bd-list">
										<li>
											<label className="badge green">모집중</label>
											<div className="subject"><Link to="/main/usr_1900/usr_1908"  className="tx tx-link">대중소기업상생협력기금 운영안내</Link></div>
											<div className="date">2024.05.30 ~ 2025.01.30</div>
										</li>
										<li>
											<label className="badge green">모집중</label>
											<div className="subject"><Link to="/main/usr_1900/usr_1908"  className="tx tx-link">대중소기업상생협력기금 운영안내</Link></div>
											<div className="date">2024.05.30 ~ 2025.01.30</div>
										</li>
										<li>
											<label className="badge green">모집중</label>
											<div className="subject"><Link to="/main/usr_1900/usr_1908"  className="tx tx-link">대중소기업상생협력기금 운영안내</Link></div>
											<div className="date">2024.05.30 ~ 2025.01.30</div>
										</li>
										<li>
											<label className="badge gray">모집완료</label>
											<div className="subject"><Link to="/main/usr_1900/usr_1908"  className="tx tx-link">대중소기업상생협력기금 운영안내</Link></div>
											<div className="date">2024.05.30 ~ 2025.01.30</div>
										</li>
										<li>
											<label className="badge gray">모집완료</label>
											<div className="subject"><Link to="/main/usr_1900/usr_1908"  className="tx tx-link">대중소기업상생협력기금 운영안내</Link></div>
											<div className="date">2024.05.30 ~ 2025.01.30</div>
										</li>
									</ul>
									<Link to="/main/usr_1900/usr_1904" className="button-more">더보기</Link>
								</div>
							</div>
						</div>
					</section>
					<section className="home-section" data-section="banner">
						<div className="inner">
							<div className="banner-group">
								{bnr.map((bnr, index) =>
									<a key={index} href={bnr.url} target="_blank" rel="noreferrer"><img src={require('assets/img/pages/'+bnr.src+'')} alt={bnr.alt} /></a>			
								)}
							</div>
						</div>
					</section>
					<div className={sidebar ? 'home-sidebar' : 'home-sidebar closed'}>
						<div className="sidebar-list">
							<div className="direct-items">
								<h3>출연관리</h3>
								<ul>
									<li><Link to="/main/usr_2000/usr_2000" className="item-link"><i className="ico don1"></i>출연신청</Link></li>
									<li><Link to="/main/usr_2000/usr_2002" className="item-link"><i className="ico don2"></i>출연현황</Link></li>
								</ul>
							</div>
							<div className="direct-items">
								<h3>과제관리</h3>
								<ul>
									<li><Link to="/main/usr_2100/usr_2100" className="item-link"><i className="ico tsk1"></i>과제승인신청</Link></li>
									<li><Link to="/main/usr_2100/usr_2105" className="item-link"><i className="ico tsk2"></i>과제현황</Link></li>
								</ul>
							</div>
							<div className="direct-items">
								<h3>지급관리</h3>
								<ul>
									<li><Link to="/main/usr_2100/usr_2114" className="item-link"><i className="ico pay1"></i>지급정산신청</Link></li>
									<li><Link to="/main/usr_2100/usr_2123" className="item-link"><i className="ico pay2"></i>지급현황</Link></li>
								</ul>
							</div>
							<button type="button" className="sidebar-closed" onClick={() => setSidebar(false)} >바로가기 닫기</button>
						</div>
						<button type="button" className="sidebar-open" onClick={() => setSidebar(true)}><span>업무별<br />바로가기</span></button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default HomeContainer;