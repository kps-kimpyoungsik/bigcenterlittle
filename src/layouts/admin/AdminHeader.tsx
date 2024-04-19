
import React, {useState} from "react";
import { Link, NavLink, useLocation  } from 'react-router-dom';
import logo from 'assets/img/logo/logo_blk.svg';
const global = {
	content: {
		sub1: [
			{
				g_id:1,
				name : "통합정보조회",
				path : "/admin/adm_1000/adm1100"
			},
			{
				g_id:2,
				name : "출연관리",
				path : "/admin/adm_1000/adm1200"
			},
			{
				g_id:3,
				name : "과제관리",
				path : "/admin/adm_1000/adm1300"
			},
			{
				g_id:4,
				name : "지급관리",
				path : "/admin/adm_1000/adm1400"
			},
			{
				g_id:5,
				name : "환수관리",
				path : "/admin/adm_1000/adm1500"
			},
			{
				g_id:6,
				name : "성과관리",
				path : "/admin/adm_1000/adm1600"
			},
			{
				g_id:7,
				name : "수요조사관리",
				path : "/admin/adm_1000/adm1700"
			},
		],
		sub2: [
			{
				g_id:1,
				name : "가상계좌조회",
				path : "/admin/adm_2000/adm2100"
			},
			{
				g_id:2,
				name : "모계좌조회",
				path : "/admin/adm_2000/adm2200"
			},
		],
		sub3: [
			{
				g_id:1,
				name : "법인세공시",
				path : "/admin/adm_3000/adm3100"
			},
			{
				g_id:2,
				name : "기부영수증",
				path : "/admin/adm_3000/adm3200"
			},
		],
		sub4: [
			{
				g_id:1,
				name : "회원관리",
				path : "/admin/adm_4000/adm4100"
			},
			{
				g_id:2,
				name : "기업관리",
				path : "/admin/adm_4000/adm4200"
			},
			{
				g_id:3,
				name : "한도금액 통제",
				path : "/admin/adm_4000/adm4310"
			},
		],
		sub5: [
			{
				g_id:1,
				name : "공지사항",
				path : "/admin/adm_5000/adm5100"
			},
			{
				g_id:2,
				name : "FAQ관리",
				path : "/admin/adm_5000/adm5210"
			},
			{
				g_id:3,
				name : "팝업관리",
				path : "/admin/adm_5000/adm5310"
			},
			{
				g_id:4,
				name : "우수사례관리",
				path : "/admin/adm_5000/adm5320"
			}
		],
		sub6: [
			{
				g_id:1,
				name : "메일발송관리",
				path : "/admin/adm_6000/adm6100"
			},
			{
				g_id:2,
				name : "SMS 발송관리",
				path : "/admin/adm_6000/adm6200"
			},
			{
				g_id:3,
				name : "사업관리",
				path : "/admin/adm_6000/adm6310"
			},
			{
				g_id:4,
				name : "코드관리",
				path : "/admin/adm_6000/adm6410"
			},
			{
				g_id:5,
				name : "메뉴관리",
				path : "/admin/adm_6000/adm6421"
			},
			{
				g_id:6,
				name : "권한관리",
				path : "/admin/adm_6000/adm6431"
			},
			{
				g_id:7,
				name : "풍선도움말",
				path : "/admin/adm_6000/adm6510"
			},
			{
				g_id:8,
				name : "명칭관리",
				path : "/admin/adm_6000/adm6520"
			},
			{
				g_id:9,
				name : "통계목관리",
				path : "/admin/adm_6000/adm6610"
			},
			{
				g_id:10,
				name : "펌뱅킹관리",
				path : "/admin/adm_6000/adm6710"
			}
		],
		sub7: [
			{
				g_id:1,
				name : "결재선 설정",
				path : "/admin/adm_7000/adm7000"
			},
			{
				g_id:2,
				name : "결재함 리스트",
				path : "/admin/adm_7000/adm7100"
			},
			{
				g_id:3,
				name : "결재함 상세",
				path : "/admin/adm_7000/adm7101"
			},
		],
	}
};
function LayoutHeader() {
	const location = useLocation(); 
	const [hidden, setHidden] = useState(true);
	return (
		<div className='fww-header-util'>
			<div className='fww-util'>
				<ul>
					{/* Login 전 */}
					<li><Link to="/main/home/usr_1300" className="login">로그인</Link></li>
					<li><Link to="/main/home/usr_1200" className="join">회원가입</Link></li>
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
						<Link to="#" className="mypage">마이페이지</Link>
					</li>
					<li>
						<Link to="/main/" className="home">홈페이지</Link>
					</li>
				</ul>
			</div>
			<header className={hidden ? 'fww-header adm' : 'fww-header adm active'}>
				<div className='left-area'>
					<Link to="/admin" className='logo'>
						<img src={logo} alt="대·중소기업 상생협력기금 종합시스템" />
					</Link>
				</div>
				<div className='right-area'>
					<nav 
						className='fww-gnb' 
						onMouseEnter={() => setHidden(false)}
						onMouseLeave={() => setHidden(true)}
					>
						<ul>
							<li className={location.pathname.includes('adm_1') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_1000/adm1100">기금관리</NavLink>
								<ul className='d2'>
									{global.content.sub1.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_2') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_2000/adm2100">계좌관리</NavLink>
								<ul className='d2'>
									{global.content.sub2.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_3') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_3000/adm3100">공시/발급</NavLink>
								<ul className='d2'>
									{global.content.sub3.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_4') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_4000/adm4100">사용자관리</NavLink>
								<ul className='d2'>
									{global.content.sub4.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_5') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_5000/adm5100">게시판관리</NavLink>
								<ul className='d2'>
									{global.content.sub5.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_6') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_6000/adm6100">시스템관리</NavLink>
								<ul className='d2'>
									{global.content.sub6.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_7') ? 'd1 active' : 'd1'}>
								<NavLink to="/admin/adm_7000/adm7100">결재함</NavLink>
								<ul className='d2'>
									{global.content.sub7.map((block) => (
										<li className={location.pathname === block.path ? 'active' : ''} key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>
							</li>
							<li className={location.pathname.includes('adm_8') ? 'd1 active' : 'd1'}>
								<NavLink to="#">보고서</NavLink>
							</li>
						</ul>
					</nav>
					<nav className='fww-gnb-depth2'>
						<ul>
							<li>
								<p className='hide'>기금관리</p>
								<ul className='d2'>
									{global.content.sub1.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
									))}
								</ul>								
								
							</li>
							<li>
								<p className='hide'>계좌관리</p>
								<ul className='d2'>
									{global.content.sub2.map((block) => (
										<li key={block.g_id}><Link to={block.path}>{block.name}</Link></li>
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