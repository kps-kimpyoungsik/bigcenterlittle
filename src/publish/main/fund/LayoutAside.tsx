import React from 'react';
import { Link } from 'react-router-dom';

function LayoutAside() {
	return (
		<aside className='fww-aside'>
			<p className='tit-d1'>카테고리명</p>
			<ul className='d1'>
				<li>
					<button type='button'>메뉴1(하위있음)</button>
					<ul className='d2'>
						<li><Link to="#">메뉴1-1</Link></li>
						<li><Link to="#">메뉴1-2</Link></li>
					</ul>
				</li>
				<li className='active'>
					<button type='button'>메뉴2(하위있음)</button>
					<ul className='d2'>
						<li><Link to="#">메뉴2-1</Link></li>
						<li><Link to="#">메뉴2-2</Link></li>
					</ul>
				</li>
				<li>
					<Link to="#" className='no-sub'>메뉴3(하위없음)</Link>
				</li>
			</ul>
		</aside>
	);
}
export default LayoutAside;