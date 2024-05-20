import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menutree from 'layouts/admin/menutree.json';
function PortalAside() {
	const location = useLocation(); 
	const gnb = menutree.gnb[7].path.slice(0,8);
	const lnb = menutree.gnb[7].sub;
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">{menutree.gnb[7].name}</p>
			<ul className='d1'>
				{lnb.map((lnb) => (
				<li key={lnb.s_id} className={location.pathname.slice(-4,21) === lnb.sceenid.slice(0,2)? 'active' : ''}>
					<Link to={'/admin/'+gnb+'/adm'+lnb.sceenid} className='no-sub'>{lnb.name}</Link>
				</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;