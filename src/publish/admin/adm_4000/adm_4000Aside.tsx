import React from 'react';
import { Link } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			s_id:1,
			s_name : "회원관리",
			s_path : "/admin/adm_4000/adm4100"
		},
		{
			s_id:2,
			s_name : "기업관리",
			s_path : "/admin/adm_4000/adm4200"
		},
		{
			s_id:3,
			s_name : "한도금액통제",
			s_path : "/admin/adm_4000/adm4310"
		}
	];	
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">사용자관리</p>
			<ul className='d1'>
				{aside.map((aside) => (
					<li key={aside.s_id}>
						<Link to={aside.s_path} className='no-sub'>{aside.s_name}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;