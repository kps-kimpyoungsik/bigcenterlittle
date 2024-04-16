import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			s_id:1,
			s_name : " 메일발송관리",
			s_path : "/admin/adm_6000/adm6100"
		},
		{
			s_id:2,
			s_name : "SMS 발송관리",
			s_path : "/admin/adm_6000/adm6200"
		},
		{
			s_id:3,
			s_name : "사업관리",
			s_path : "/admin/adm_6000/adm6310"
		},
		{
			s_id:4,
			s_name : "코드관리",
			s_path : "/admin/adm_6000/adm6410"
		},
		{
			s_id:5,
			s_name : "메뉴관리",
			s_path : "/admin/adm_6000/adm6421"
		},
		{
			s_id:6,
			s_name : "권한관리",
			s_path : "/admin/adm_6000/adm6431"
		},
		{
			s_id:7,
			s_name : "풍선도움말",
			s_path : "/admin/adm_6000/adm6510"
		},
		{
			s_id:8,
			s_name : "명칭관리",
			s_path : "/admin/adm_6000/adm6520"
		},
		{
			s_id:9,
			s_name : "통계목관리",
			s_path : "/admin/adm_6000/adm6610"
		},
		{
			s_id:10,
			s_name : "펌뱅킹관리",
			s_path : "/admin/adm_6000/adm6710"
		}	
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">시스템관리</p>
			<ul className='d1'>
				{aside.map((aside) => (
					<li className={location.pathname === aside.s_path ? 'active' : ''} key={aside.s_id}>
						<Link to={aside.s_path} className='no-sub'>{aside.s_name}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;