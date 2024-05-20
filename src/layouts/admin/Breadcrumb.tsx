import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import menutree from './menutree.json';
export type BreadcrumbProps = {
	gnbIdx? : number,
	lnbD1Idx? : number,
	lnbD2Idx? : number | null
}
function Breadcrumb(props: BreadcrumbProps, ref: any) {
	const {
		gnbIdx = 0,
		lnbD1Idx = 0,
		lnbD2Idx = '',
		//...otherProps
	} = props;
	return (
		<ul className="fww-brd">
			<li><Link to="/admin/home/">홈</Link></li>
			<li><Link to={'/admin/'+ menutree.gnb[gnbIdx].path}>{menutree.gnb[gnbIdx].name}</Link></li>
			<li><Link to={'/admin/'+ menutree.gnb[gnbIdx].path.slice(0,8) + '/adm'+menutree.gnb[gnbIdx].sub[lnbD1Idx].sceenid}>{menutree.gnb[gnbIdx].sub[lnbD1Idx].name}</Link></li>
			{lnbD2Idx && <li><Link to="#">{menutree.gnb[gnbIdx].sub[lnbD1Idx].dep3[lnbD2Idx].name}</Link></li>}
		</ul>
	);	
}
export default forwardRef(Breadcrumb);