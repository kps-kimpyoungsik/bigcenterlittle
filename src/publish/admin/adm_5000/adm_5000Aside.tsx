import React from 'react';
import { Link } from 'react-router-dom';
function PortalAside() {
	const aside = [
		{
			s_id:1,
			s_name : "공지사항",
			s_path : "/admin/adm_5000/adm5100"
		},
		{
			s_id:2,
			s_name : "FAQ관리",
			s_path : "/admin/adm_5000/adm5210"
		},
		{
			s_id:3,
			s_name : "팝업관리",
			s_path : "/admin/adm_5000/adm5310"
		},
		{
			s_id:4,
			s_name : "우수사례관리",
			s_path : "/admin/adm_5000/adm5320"
		}		
	];	
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">게시판관리</p>
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