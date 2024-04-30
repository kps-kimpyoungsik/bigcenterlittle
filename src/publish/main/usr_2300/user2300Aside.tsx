import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function PortalAside() {
	const location = useLocation(); 
	return (
		<aside className='fww-aside'>
			<p className="tit-d1">고객지원</p>
			<ul className='d1'>
				<li className={location.pathname.slice(-4,23) === '2300' || location.pathname.slice(-4,23) === '2301' ? 'active' : ''}>
					<Link to="/main/usr_2300/usr_2300" className='no-sub'>안내사항</Link>
				</li>
				<li className={location.pathname.slice(-4,23) === '2302' || location.pathname.slice(-4,23) === '2303' ? 'active' : ''}>
					<Link to="/main/usr_2300/usr_2302" className='no-sub'>자주묻는질문</Link>
				</li>
			</ul>
		</aside>
	);
}
export default PortalAside;