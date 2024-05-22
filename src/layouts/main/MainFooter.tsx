import React from 'react';
import { Link } from 'react-router-dom';
function LayoutFooter() {
  	return (
		<footer className='fww-footer'>
			<ul className="fww-footer-menu">
				<li><Link to="/main/usr_1000/usr_1600">개인정보처리방침</Link></li>
				<li><Link to="/main/usr_1000/usr_1700">이용약관</Link></li>
				<li><Link to="/main/usr_1000/usr_1800">이메일무단수집거부</Link></li>
				<li><Link to="/main/usr_1000/usr_1810">보안설치프로그램</Link></li>
			</ul>
			<div className='fww-footer-info'>
				<div className='info'>
					<address>04554 서울특별시 중구 퇴계로 173 남산스퀘어빌딩 7층</address>
					<p>Tel : 02-368-8771</p>
					<p>Fax : 02-368-8709</p>
					<p>E-mail : <a href="mailto:fund@win-win.or.kr" className='tx tx-link'>fund@win-win.or.kr</a></p>
				</div>
				<div>시스템 관련 문의처 : 02-368-8979</div>
				<div className='copyright'>Copyright ⓒ 2024 대·중소기업·농어업협력재단. All Rights Reserved.</div>
			</div>
		</footer>
  	);
}
export default LayoutFooter;