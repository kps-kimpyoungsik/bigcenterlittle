import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			a_id:1,
			a_name : "출연신청",
			a_path : "/main/user_2000/usr_2000"
		},
		{
			a_id:2,
			a_name : "출연현황",
			a_path : "/main/user_2000/user_2002"
		},
		{
			a_id:3,
			a_name : "전용신청",
			a_path : "/main/user_2000/usr_2007"
		},
		{
			a_id:4,
			a_name : "전용현황",
			a_path : "/main/user_2000/usr_2009"
		},
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">기금출연</p>
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