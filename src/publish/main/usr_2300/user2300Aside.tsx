import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			a_id:1,
			a_name : "안내사항",
			a_path : "/main/usr_2300/usr_2300"
		},
		{
			a_id:2,
			a_name : "자주묻는질문",
			a_path : "/main/usr_2300/usr_2302"
		},
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">고객지원</p>
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