import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {

	const aside = [
		{
			name : "내정보",
			path : "/main/usr_1000/usr_1500"
		},
		{
			name : "내기업정보",
			path : "/main/usr_1000/usr_1501"
		},
		{
			name : "비밀번호 수정",
			path : "/main/usr_1000/usr_1502"
		},
		{
			name : "회원탈퇴",
			path : "/main/usr_1000/usr_1503"
		}
	];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">마이페이지</p>
			<ul className='d1'>
				{aside.map((aside,index) => (
					<li key={index} className={location.pathname === aside.path ? 'active' : ''}>
						<Link to={aside.path} className='no-sub'>{aside.name}</Link>
					</li>
				))}

			</ul>
		</aside>
	);
}
export default PortalAside;