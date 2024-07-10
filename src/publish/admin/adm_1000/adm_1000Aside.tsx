import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menutree from 'layouts/admin/menutree.json';
function PortalAside() {
	const location = useLocation(); 
	const gnb = menutree.gnb[0].path.slice(0,8);
	const lnb = menutree.gnb[0].sub;
	const toggleHandler = (event : any) => {
		var e = event;
		const toggleBtn = e.target.closest('.ctr');
		if(toggleBtn){
			toggleBtn.classList.toggle('active')
		}
	}
	return (
		
		// 20240710 - active 오류 이슈 발생
		//menutree.json
		/*
			변경전
			{"s_id":8, "sceenid":"1706", "name" : "통계관리", "dep3": []}

			변경후
			{"s_id":8, "sceenid":"1800", "name" : "통계관리", "dep3": []}
		*/

		<aside className='fww-aside'>
			<p className="tit-d1">{menutree.gnb[0].name}</p>
			<ul className='d1'>
				{lnb.map((lnb,index) => (
				<li key={lnb.s_id} className={location.pathname.slice(19,21) === lnb.sceenid.slice(0,2)  ? 'active' : ''} >
					{(lnb.dep3.length === 0) && <Link to={'/admin/'+gnb+'/adm'+lnb.sceenid} className='no-sub'>{lnb.name}</Link> }
					{(lnb.dep3.length !== 0) && 
						(<>
							<button type='button' className='ctr' onClick={(e)=>{toggleHandler(e)}}>{lnb.name}</button>
							<ul className='d2'>
								{lnb.dep3.map((depth3,index) => (
								<li key={index} className={location.pathname.slice(-4,24) === depth3.screenid ? 'active' : ''}><Link to={'/admin/'+gnb+'/adm'+depth3.screenid}>{depth3.name}</Link></li>
								))}
							</ul>
						</>)
					}
				</li>
				))}
			</ul>
		</aside>
	);
}
export default PortalAside;