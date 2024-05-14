import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menutree from 'layouts/main/menutree.json';
function PortalAside() {
	const gnb = menutree.gnb[3].path.slice(0,8);
	const lnb = menutree.gnb[3].sub;
	// const aside = [
	// 	{
	// 		a_id:1,
	// 		a_name : "자주 묻는 질문(FAQ)",
	// 		a_path : "/main/user_2000/user_2100"
	// 	},
	// 	{
	// 		a_id:2,
	// 		a_name : "매뉴얼",
	// 		a_path : "/main/user_2000/user_2200"
	// 	},
	// ];
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">{menutree.gnb[3].name}</p>
			<ul className='d1'>
				{lnb.map((lnb) => (
				<li key={lnb.s_id} className={location.pathname.slice(-4,23) === lnb.sceenid? 'active' : ''}>
					<Link to={'/main/'+gnb+'/usr_'+lnb.sceenid} className='no-sub'>{lnb.name}</Link>
				</li>
				))}
				{/* 
				{aside.map((aside) => (
					<li className={location.pathname === aside.a_path ? 'active' : ''} key={aside.a_id}>
						<Link to={aside.a_path} className='no-sub'>{aside.a_name}</Link>
					</li>
				))} */}
			</ul>
		</aside>
	);
}
export default PortalAside;