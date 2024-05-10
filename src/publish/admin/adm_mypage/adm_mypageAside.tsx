import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			s_id:1,
			s_name : " 내정보 수정",
			s_path : "/admin/adm_mypage"
		},
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">마이페이지</p>
			<ul className='d1'>
				{aside.map((aside) => (
					<li className={location.pathname.slice(0,-2) === aside.s_path.slice(0,-2) ? 'active' : ''} key={aside.s_id}>
						<Link to={aside.s_path} className='no-sub'>{aside.s_name}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;