import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menutree from 'layouts/admin/menutree.json';
function PortalAside() {
	const location = useLocation();
	const gnb = menutree.gnb[5].path.slice(0,8);
	const lnb = menutree.gnb[5].sub;
	//console.log(location.pathname.slice(19,22) )
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">{menutree.gnb[5].name}</p>
			<ul className='d1'>
				{lnb.map((lnb) => (
				<li key={lnb.s_id} className={location.pathname.slice(19,22) === lnb.sceenid.slice(0,3)? 'active' : ''}>
					<Link to={'/admin/'+gnb+'/adm'+lnb.sceenid} className='no-sub'>{lnb.name}</Link>
				</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;