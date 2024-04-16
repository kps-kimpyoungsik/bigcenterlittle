
import React, {} from "react";
import { Link, NavLink  } from 'react-router-dom';
import logo from '../../assets/img/logo/logo_blk.svg';
const global = {
	content: {
		sub1: [
			{
				s_id:1,
				name : "통합정보조회",
				path : "/admin"
			},
			{
				s_id:2,
				name : "모집관리",
				path : "/admin"
			},
			{
				s_id:3,
				name : "출연관리",
				path : "/admin"
			},
			{
				s_id:4,
				name : "과제관리",
				path : "/admin"
			},
			{
				s_id:5,
				name : "지급관리",
				path : "/admin"
			},
			{
				s_id:6,
				name : "환수관리",
				path : "/admin"
			},
			{
				s_id:7,
				name : "성과관리",
				path : "/admin"
			},
		],
		sub2: [
			{
				s_id:1,
				name : "가상계좌조회",
				path : "/admin"
			},
			{
				s_id:2,
				name : "모계좌조회",
				path : "/admin"
			},
		],
	}
};
function LayoutHeader() {
	//const { location } = useHistory();
	return (
		<div className='fww-header-util'>
			<div className='fww-util'>
				<ul>
					<li><Link to="#">로그인</Link></li>
					<li><Link to="#">회원가입</Link></li>
					<li>
						<span>
							<em className='user-name'>김주경</em>님
							(남은시간 세션 <em className='user-session'>58:31</em>)
						</span>
						<button className='btn-session-extend' type='button'>연장</button>
					</li>
					<li>
						<Link to="#">로그아웃</Link>
					</li>
					<li>
						<Link to="#">마이페이지</Link>
					</li>
					<li>
						<Link to="#">관리자페이지</Link>
					</li>
					<li>
						<Link to="#">홈페이지</Link>
					</li>
				</ul>
			</div>
			<header className='fww-header'>
				<div className='left-area'>
					<Link to="/admin" className='logo'>
						<img src={logo} alt="대·중소기업 상생협력기금 종합시스템" />
					</Link>
				</div>
				<div className='right-area'>
					<nav className='fww-gnb'>
						<ul>
							<li className='d1'><NavLink to="#">기금관리</NavLink></li>
							<li className='d1'><NavLink to="#">계좌관리</NavLink></li>
							<li className='d1'><NavLink to="#">공시/발급</NavLink></li>
							<li className='d1 active'><NavLink to="/admin/adm_4000/adm4100">사용자관리</NavLink></li>
							<li className='d1'><NavLink to="/admin/adm_5000/adm5100">게시판관리</NavLink></li>
							<li className='d1'><NavLink to="/admin/adm_6000/adm6100">시스템관리</NavLink></li>
							<li className='d1'><NavLink to="#">결재함</NavLink></li>
							<li className='d1'><NavLink to="#">보고서</NavLink></li>
						</ul>
					</nav>
					<nav className='fww-gnb-depth2'>
						<ul>
							<li>
								<p className='hide'>기금관리</p>
								<ul className='d2'>
									{global.content.sub1.map((block) => (
										<li key={block.s_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>								
								
							</li>
							<li>
								<p className='hide'>계좌관리</p>
								<ul className='d2'>
									{global.content.sub2.map((block) => (
										<li key={block.s_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li>
								<p className='hide'>공시/발급</p>
								<ul className='d2'>
								</ul>
							</li>
							<li>
								<p className='hide'>사용자관리</p>
								<ul className='d2'>
								</ul>
							</li>
							<li>
								<p className='hide'>게시판관리</p>
								<ul className='d2'>
								</ul>
							</li>
							<li>
								<p className='hide'>시스템관리</p>
								<ul className='d2'>
								</ul>
							</li>
							<li>
								<p className='hide'>결재함</p>
								<ul className='d2'>
								</ul>
							</li>
							<li>
								<p className='hide'>보고서</p>
								<ul className='d2'>
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