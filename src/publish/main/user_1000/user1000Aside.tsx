import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			a_id:1,
			a_name : "공지사항",
			a_path : "/main/user_1000/user_1100"
		},
		{
			a_id:2,
			a_name : "지원사례",
			a_path : "/main/user_1000/user_1200"
		},
		{
			a_id:3,
			a_name : "기금소개",
			a_path : "/main/user_1000/user_1300"
		},
		{
			a_id:4,
			a_name : "출연혜택",
			a_path : "/main/user_1000/user_1400"
		},
		{
			a_id:5,
			a_name : "오시는 길",
			a_path : "/main/user_1000/user_1500"
		}
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