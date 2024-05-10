
import React, {useState} from "react";
import { Link, NavLink, useLocation  } from 'react-router-dom';
import logo from 'assets/img/logo/logo_blk.svg';
const global = {
	gnb:[
		{
			name:"기금관리",
			path:"adm_1000/adm1100",
			sub:[
				{s_id:1, sceenid:"1100", name : "통합정보조회" },
				{s_id:2, sceenid:"1200", name : "출연관리" },
				{s_id:3, sceenid:"1300", name : "과제관리" },
				{s_id:4, sceenid:"1400", name : "지급관리" },
				{s_id:5, sceenid:"1500", name : "환수관리" },
				{s_id:6, sceenid:"1600", name : "성과관리" },
				{s_id:7, sceenid:"1700", name : "수요조사관리" },
			]
		},
		{
			name:"계좌관리",
			path:"adm_2000/adm2100",
			sub:[
				{s_id:1, sceenid:"2100", name : "가상계좌조회" },
				{s_id:2, sceenid:"2200", name : "모계좌조회" },
				
			]
		},
		{
			name:"공시/발급",
			path:"adm_3000/adm3100",
			sub:[
				{s_id:1, sceenid:"3100", name : "법인세공시" },
				{s_id:2, sceenid:"3200", name : "기부영수증" },
				
			]
		},
		{
			name:"사용자관리",
			path:"adm_4000/adm4100",
			sub:[
				{s_id:1, sceenid:"4100", name : "회원관리" },
				{s_id:2, sceenid:"4200", name : "기업관리" },
				{s_id:3, sceenid:"4310", name : "한도금액 통제" },
			]
		},
		{
			name:"게시판관리",
			path:"adm_5000/adm5100",
			sub:[
				{s_id:1, sceenid:"5100", name : "공지사항" },
				{s_id:2, sceenid:"5210", name : "FAQ관리" },
				{s_id:3, sceenid:"5310", name : "팝업관리" },
				{s_id:4, sceenid:"5320", name : "우수사례관리" },
			]
		},
		{
			name:"시스템관리",
			path:"adm_6000/adm6100",
			sub:[
				{s_id:1, sceenid:"6100", name : "메일발송관리" },
				{s_id:2, sceenid:"6200", name : "SMS 발송관리" },
				{s_id:3, sceenid:"6310", name : "사업관리" },
				{s_id:4, sceenid:"6410", name : "코드관리" },
				{s_id:5, sceenid:"6421", name : "메뉴관리" },
				{s_id:6, sceenid:"6431", name : "권한관리" },
				{s_id:7, sceenid:"6510", name : "풍선도움말" },
				{s_id:8, sceenid:"6520", name : "명칭관리" },
				{s_id:9, sceenid:"6610", name : "통계목관리" },
				{s_id:10, sceenid:"6710", name : "펌뱅킹관리" },
			]
		},
		{
			name:"결재함",
			path:"adm_7000/adm7100",
			sub:[
				{s_id:1, sceenid:"7000", name : "결재선 설정" },
				{s_id:2, sceenid:"7100", name : "결재함 리스트" },
				{s_id:3, sceenid:"7101", name : "결재함 상세" },
			]
		},
		{
			name:"보고서",
			path:"adm_8000/adm8100",
			sub:[
				{s_id:1, sceenid:"8100", name : "누적 현황통계" },
				{s_id:2, sceenid:"8200", name : "연도별 현황통계" },
			]
		},
	],
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
		sub8: [
			{
				g_id:1,
				name : "누적 현황통계",
				path : "/admin/adm_8000/adm8100"
			},
			{
				g_id:2,
				name : "연도별 현황통계",
				path : "/admin/adm_8000/adm8200"
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
						<Link to="/main/" className="home" target="_blank">홈페이지</Link>
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
							{global.gnb.map((gnb, index) => (
								<li key={index} className={location.pathname.includes(gnb.path.slice(0,8)) ? 'd1 active' : 'd1'}>
									<NavLink to={"/admin/" + gnb.path }>{gnb.name}</NavLink>
									<ul className='d2' >
										{gnb.sub.map((depth2) => (
											<li key={depth2.s_id} className={location.pathname.slice(-4,23) === depth2.sceenid? 'active' : ''}>
												<Link to={"/admin/" + gnb.path.slice(0,8) + "/adm" + depth2.sceenid}>{depth2.name}</Link>
											</li>
										))}
									</ul>
								</li>
							))}
							{/* <li className={location.pathname.includes('adm_8') ? 'd1 active' : 'd1'}>
								<NavLink to="#">보고서</NavLink>
							</li> */}
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
}
export default LayoutHeader;