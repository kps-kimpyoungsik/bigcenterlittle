import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			a_id:1,
			a_name : "자주 묻는 질문(FAQ)",
			a_path : "/main/user_2000/user_2100"
		},
		{
			a_id:2,
			a_name : "매뉴얼",
			a_path : "/main/user_2000/user_2200"
		},
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">기금안내</p>
			<ul className='d1'>
				{aside.map((aside) => (
					<li className={location.pathname === aside.a_path ? 'active' : ''} key={aside.a_id}>
						<Link to={aside.a_path} className='no-sub'>{aside.a_name}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;