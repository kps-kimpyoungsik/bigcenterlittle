import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import menutree from './menutree.json';
export type BreadcrumbProps = {
	gnbIdx? : number,
	lnbIdx? : number
}
function Breadcrumb(props: BreadcrumbProps, ref: any) {
	const {
		gnbIdx = 0,
		lnbIdx = 0,
		//...otherProps
	} = props;
	return (
		<ul className="fww-brd">
			<li><Link to="/main/">홈</Link></li>
			<li><Link to="#">{menutree.gnb[gnbIdx].name}</Link></li>
			<li><Link to="#">{menutree.gnb[gnbIdx].sub[lnbIdx].name}</Link></li>
		</ul>
	);	
}
export default forwardRef(Breadcrumb);