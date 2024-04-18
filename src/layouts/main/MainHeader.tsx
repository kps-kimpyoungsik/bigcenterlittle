
import React, {} from "react";
import { Link, NavLink, useLocation  } from 'react-router-dom';
import logo from 'assets/img/logo/logo_blk.svg';
const global = {
	content: {
		sub1: [
			{
				g_id:1,
				name : "제도소개청",
				path : "/main/usr_1900/usr_1900"
			},
			{
				g_id:2,
				name : "투명한기금운영",
				path : "/main/portal/news/usr_1901"
			},
			{
				g_id:3,
				name : "기관안내",
				path : "/main/portal/fund/usr_1902"
			},
			{
				g_id:4,
				name : "우수사례",
				path : "/main/portal/fund/usr_1903"
			},
			{
				g_id:5,
				name : "수요조사",
				path : "/main/portal/fund/usr_1904"
			}
		],
		sub2: [
			{
				g_id:1,
				name : "출연신청",
				path : "/main/usr_2000/usr_2000"
			},
			{
				g_id:2,
				name : "출연현황",
				path : "/main/usr_2000/usr_2002"
			},
			{
				g_id:3,
				name : "전용신청",
				path : "/main/usr_2000/usr_2007"
			},
			{
				g_id:4,
				name : "전용현황",
				path : "/main/usr_2000/usr_2009"
			}
		],
		sub3: [
			{
				g_id:1,
				name : "출연신청",
				path : "/main/usr_2000/usr_2000"
			},
			{
				g_id:2,
				name : "출연현황",
				path : "/main/usr_2000/usr_2002"
			},
			{
				g_id:3,
				name : "전용신청",
				path : "/main/usr_2000/usr_2007"
			},
			{
				g_id:4,
				name : "전용현황",
				path : "/main/usr_2000/usr_2009"
			}
		],
		sub4: [
			{
				g_id:1,
				name : "출연신청",
				path : "/main/usr_2000/usr_2000"
			},
			{
				g_id:2,
				name : "출연현황",
				path : "/main/usr_2000/usr_2002"
			},
			{
				g_id:3,
				name : "전용신청",
				path : "/main/usr_2000/usr_2007"
			},
			{
				g_id:4,
				name : "전용현황",
				path : "/main/usr_2000/usr_2009"
			}
		],
		sub5: [
			{
				g_id:1,
				name : "출연신청",
				path : "/main/usr_2000/usr_2000"
			},
			{
				g_id:2,
				name : "출연현황",
				path : "/main/usr_2000/usr_2002"
			},
			{
				g_id:3,
				name : "전용신청",
				path : "/main/usr_2000/usr_2007"
			},
			{
				g_id:4,
				name : "전용현황",
				path : "/main/usr_2000/usr_2009"
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
					{/* Login 전 */}
					<li><Link to="/main/usr_1000/usr_1300" className="login">로그인</Link></li>
					<li><Link to="/main/usr_1000/usr_1200" className="join">회원가입</Link></li>
					<li>
						<span>
							<em className='user-name'>홍길동</em>님
							(남은시간 세션 <em className='user-session'>58:31</em>)
						</span>&nbsp;
						<button className='btn-session-extend' type='button'>연장</button>
					</li>
					{/* Login 후 */}
					<li>
						<Link to="#" className="logout">로그아웃</Link>
					</li>
					<li>
						<Link to="/main/usr_1000/usr_1500" className="mypage">마이페이지</Link>
					</li>
					<li>
						<Link to="/admin/home" className="admin" target="_blank">관리자페이지</Link>
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
							<li className={location.pathname.includes('usr_190') ? 'd1 active' : 'd1'}><NavLink to="/main/usr_1900/usr_1900">상생협력기금 안내</NavLink></li>
							<li className={location.pathname.includes('usr_200') ? 'd1 active' : 'd1'}><NavLink to="/main/usr_2000/usr_2000">기금출연</NavLink></li>
							<li className={location.pathname.includes('usr_210') ? 'd1 active' : 'd1'}><NavLink to="/main/usr_2100/usr_2100">기금운영</NavLink></li>
							<li className={location.pathname.includes('usr_220') ? 'd1 active' : 'd1'}><NavLink to="/main/usr_2200/usr_2200">통합정보조회</NavLink></li>
							<li className={location.pathname.includes('usr_230') ? 'd1 active' : 'd1'}><NavLink to="/main/usr_2300/usr_2300">고객지원</NavLink></li>
						</ul>
					</nav>
					<nav className='fww-gnb-depth2'>
						<ul>
							<li>
								<p className='hide'>상생협력기금 안내</p>
								<ul className='d2'>
									{global.content.sub1.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>								
								
							</li>
							<li>
								<p className='hide'>기금출연</p>
								<ul className='d2'>
									{global.content.sub2.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li>
								<p className='hide'>기금운영</p>
								<ul className='d2'>
									{global.content.sub3.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li>
								<p className='hide'>통합정보조회</p>
								<ul className='d2'>
									{global.content.sub4.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li>
								<p className='hide'>고객지원</p>
								<ul className='d2'>
									{global.content.sub5.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
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