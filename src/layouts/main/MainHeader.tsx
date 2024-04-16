
import React, {} from "react";
import { Link, NavLink, useLocation  } from 'react-router-dom';
import logo from 'assets/img/logo/logo_blk.svg';
const global = {
	content: {
		sub1: [
			{
				g_id:1,
				name : "공지사항",
				path : "/main/user_1000/user_1100"
			},
			{
				g_id:2,
				name : "지원사례",
				path : "/main/portal/news/excellet"
			},
			{
				g_id:3,
				name : "기금소개",
				path : "/main/portal/fund/info/"
			},
			{
				g_id:4,
				name : "출연혜택",
				path : "/main/portal/fund/benefit/"
			},
			{
				g_id:5,
				name : "오시는 길",
				path : "/main/portal/fund/path/"
			}
		],
		sub2: [
			{
				g_id:1,
				name : "자주 묻는 질문",
				path : "/main/portal/support/faq"
			},
			{
				g_id:2,
				name : "매뉴얼",
				path : "/main/portal/support/manual/"
			}
		],
	}
};
function LayoutHeader() {
	const location = useLocation(); 
	return (
		<div className='fww-header-util'>
			<div className='fww-util'>
				<ul>
					<li><Link to="#" className="login">로그인</Link></li>
					<li><Link to="#" className="join">회원가입</Link></li>
					<li>
						<span>
							<em className='user-name'>김주경</em>님
							(남은시간 세션 <em className='user-session'>58:31</em>)
						</span>
						<button className='btn-session-extend' type='button'>연장</button>
					</li>
					<li>
						<Link to="#" className="logout">로그아웃</Link>
					</li>
					<li>
						<Link to="#" className="mypage">마이페이지</Link>
					</li>
					<li>
						<Link to="#" className="admin">관리자페이지</Link>
					</li>
					<li>
						<Link to="#" className="home">홈페이지</Link>
					</li>
				</ul>
			</div>
			<header className='fww-header'>
				<div className='left-area'>
					<Link to="/main" className='logo'>
						<img src={logo} alt="대·중소기업 상생협력기금 종합시스템" />
					</Link>
				</div>
				<div className='right-area'>
					<nav className='fww-gnb'>
						<ul>
							<li className={location.pathname.includes('user_1') ? 'd1 active' : 'd1'}><NavLink to="/main/user_1000/user_1100">기금안내</NavLink></li>
							<li className={location.pathname.includes('user_2') ? 'd1 active' : 'd1'}><NavLink to="/main/user_2000/user_2100">고객지원</NavLink></li>
							<li className='d1'><NavLink to="#">출연관리</NavLink></li>
							<li className='d1'><NavLink to="#">과제관리</NavLink></li>
							<li className='d1'><NavLink to="#">지급관리</NavLink></li>
							<li className='d1'><NavLink to="#">환수관리</NavLink></li>
							<li className='d1'><NavLink to="#">통합정보조회</NavLink></li>
						</ul>
					</nav>
					<nav className='fww-gnb-depth2'>
						<ul>
							<li>
								<p className='hide'>기금안내</p>
								<ul className='d2'>
									{global.content.sub1.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>								
								
							</li>
							<li>
								<p className='hide'>고객지원</p>
								<ul className='d2'>
									{global.content.sub2.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li>
								<p className='hide'>출연관리</p>
								<ul className='d2'>
									<li><Link to="#">출연신청</Link></li>
									<li><Link to="#">출연현황</Link></li>
								</ul>
							</li>
							<li>
								<p className='hide'>과제관리</p>
								<ul className='d2'>
									<li><Link to="#">과제신청</Link></li>
									<li><Link to="#">과제현황</Link></li>
								</ul>
							</li>
							<li>
								<p className='hide'>지급관리</p>
								<ul className='d2'>
									<li><Link to="#">지급신청</Link></li>
									<li><Link to="#">지급현황</Link></li>
									
								</ul>
							</li>
							<li>
								<p className='hide'>환수관리</p>
								<ul className='d2'>
									<li><Link to="#">환수신청</Link></li>
									<li><Link to="#">환수현황</Link></li>
								</ul>
							</li>
							<li>
								<p className='hide'>통합정보조회</p>
								<ul className='d2'>
									<li><Link to="#">통합정보조회</Link></li>
									<li><Link to="#">입출금내역조회</Link></li>
									<li><Link to="#">기부금영수증조회</Link></li>
								</ul>
							</li>
						</ul>
					</nav>

				</div>
			</header>
		</div>
	);
}
export default LayoutHeader;