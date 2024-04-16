import React from 'react';
import { Link } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			s_id:1,
			s_name : "공지사항",
			s_path : "/main/portal/news/noti"
		},
		{
			s_id:2,
			s_name : "지원사례",
			s_path : "/main/portal/news/excellet"
		},
		{
			s_id:3,
			s_name : "기금소개",
			s_path : "/main/portal/fund/info/"
		},
		{
			s_id:3,
			s_name : "출연혜택",
			s_path : "/main/portal/fund/benefit/"
		},
		{
			s_id:3,
			s_name : "오시는 길",
			s_path : "/main/portal/fund/path/"
		}
	];	
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">기금안내</p>
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