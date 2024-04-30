import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			a_id:1,
			a_name : "제도소개",
			a_path : "/main/usr_1900/usr_1900"
		},
		{
			a_id:2,
			a_name : "투명한기금운영",
			a_path : "/main/usr_1900/usr_1901"
		},
		{
			a_id:3,
			a_name : "기관안내",
			a_path : "/main/usr_1900/usr_1902"
		},
		// {
		// 	a_id:4,
		// 	a_name : "우수사례",
		// 	a_path : "/main/usr_1900/usr_1903"
		// },
		// {
		// 	a_id:5,
		// 	a_name : "수요조사",
		// 	a_path : "/main/usr_1900/usr_1904"
		// },
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">상생협력기금 안내</p>
			<ul className='d1'>
				{aside.map((aside) => (
					<li className={location.pathname === aside.a_path ? 'active' : ''} key={aside.a_id}>
						<Link to={aside.a_path} className='no-sub'>{aside.a_name}</Link>
					</li>
				))}
				<li className={location.pathname.slice(-4,23) === '1903' || location.pathname.slice(-4,23) === '1906' ? 'active' : ''}>
					<Link to="/main/usr_1900/usr_1903" className='no-sub'>우수사례</Link>
				</li>
				<li className={location.pathname.slice(-4,23) === '1904' || location.pathname.slice(-4,23) === '1908' || location.pathname.slice(-4,23) === '1905' || location.pathname.slice(-4,23) === '1909' || location.pathname.slice(-4,23) === '1910' ? 'active' : ''}>
					<Link to="/main/usr_1900/usr_1904" className='no-sub'>수요조사</Link>
				</li>
			</ul>
		</aside>
	);
}
export default PortalAside;