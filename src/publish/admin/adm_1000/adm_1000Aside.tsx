import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PortalAside() {
	const aside = {
		depth : {
			// 1.통합정보조회 --> 1depth
			// 2.출연관리
			sub2 : [ 
				{
					s_id:1,
					s_name : "출연신청안내관리",
					s_path : "/admin/adm_1000/adm1200"
				},
				{
					s_id:2,
					s_name : "출연현황",
					s_path : "/admin/adm_1000/adm1205"
				},
				{
					s_id:3,
					s_name : "출연금관리",
					s_path : "/admin/adm_1000/adm1212"
				}
			],
			 // 3.과제관리
			sub3 : [
				{
					s_id:1,
					s_name : "과제신청안내관리",
					s_path : "/admin/adm_1000/adm1300"
				},
				{
					s_id:2,
					s_name : "과제신청현황",
					s_path : "/admin/adm_1000/adm1305"
				},
			],
			// 4.지급관리
			sub4 : [ 
				{
					s_id:1,
					s_name : "지급신청안내관리",
					s_path : "/admin/adm_1000/adm1400"
				},
				{
					s_id:2,
					s_name : "지급신청현황",
					s_path : "/admin/adm_1000/adm1405"
				},
			],
			// 5.환수관리 --> 1depth로 변경
			/*
			sub5 : [ 
				{
					s_id:1,
					s_name : "환수신청현황",
					s_path : "/admin/adm_1000/adm1500"
				},
			],
			*/
			// 6.성과관리
			// 7. 수요조사관리 --> 2depth로 변경
			sub7: [ 
				{
					s_id:1,
					s_name : "수요조사관리",
					s_path : "/admin/adm_1000/adm1700"
				},
				{
					s_id:2,
					s_name : "수요조사모집현황",
					s_path : "/admin/adm_1000/adm1704"
				},
			],			
			// 8. 성과관리 --> 추가
		}
	}
	const location = useLocation(); 
	const toggleHandler = (event : any) => {
		var e = event;
		const toggleBtn = e.target.closest('.ctr');
		if(toggleBtn){
			toggleBtn.classList.toggle('active')
		}
	}
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">기금관리</p>
			<ul className='d1'>
				<li className={location.pathname.includes('adm11') ? 'active' : ''}>
					<Link to="/admin/adm_1000/adm1100" >통합정보조회</Link>
				</li>
				<li>
					<button className={location.pathname.includes('adm12') ? 'ctr active' : 'ctr'} type="button" onClick={(e)=>{toggleHandler(e)}}>출연관리</button>
					<ul className='d2'>
						{aside.depth.sub2.map((sub) => (
							<li className={location.pathname.slice(-4,23) === sub.s_path.slice(-4,23) ? 'active' : ''} key={sub.s_id}>
								<Link to={sub.s_path}>{sub.s_name}</Link>
							</li>
						))}
					</ul>
				</li>
				<li>
					<button className="ctr" type="button" onClick={(e)=>{toggleHandler(e)}}>과제관리</button>
					<ul className='d2'>
						{aside.depth.sub3.map((sub) => (
							<li key={sub.s_id}>
								<Link to={sub.s_path}>{sub.s_name}</Link>
							</li>
						))}
					</ul>
				</li>
				<li>
					<button className="ctr" type="button" onClick={(e)=>{toggleHandler(e)}}>지급관리</button>
					<ul className='d2'>
						{aside.depth.sub4.map((sub) => (
							<li key={sub.s_id}>
								<Link to={sub.s_path}>{sub.s_name}</Link>
							</li>
						))}
					</ul>
				</li>
				{/*
				<li>
					<button className="ctr" type="button" onClick={(e)=>{toggleHandler(e)}}>환수관리</button>
					<ul className='d2'>
						{aside.depth.sub5.map((sub) => (
							<li key={sub.s_id}>
								<Link to={sub.s_path}>{sub.s_name}</Link>
							</li>
						))}
					</ul>
				</li>
				*/}
				<li className={location.pathname.includes('adm15') ? 'active' : ''}>
					<Link to="/admin/adm_1000/adm1500" >환수관리</Link>
				</li>				
				<li className={location.pathname.includes('adm16') ? 'active' : ''}>
					<Link to="/admin/adm_1000/adm1600" >성과관리</Link>
				</li>
				{/* 
				<li className={location.pathname.includes('adm17') ? 'active' : ''}>
					<Link to="/admin/adm_1000/adm1700" >수요조사관리</Link>
				</li>
				 */}
				<li>
					<button className="ctr" type="button" onClick={(e)=>{toggleHandler(e)}}>수요조사관리</button>
					<ul className='d2'>
						{aside.depth.sub7.map((sub) => (
							<li key={sub.s_id}>
								<Link to={sub.s_path}>{sub.s_name}</Link>
							</li>
						))}
					</ul>
				</li>				
				{/* 
				{aside.depth2.map((sub) => (
					<li  key={sub.s_id}>
						<Link to={sub.s_path} className='no-sub'>{sub.s_name}</Link>
					</li>
				))} */}
				<li className={location.pathname.includes('adm17') ? 'active' : ''}>
					<Link to="/admin/adm_1000/adm1706" >통계관리</Link>
				</li>

				
			</ul>
		</aside>
	);
}
export default PortalAside;