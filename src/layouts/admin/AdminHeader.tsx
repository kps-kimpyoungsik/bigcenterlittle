
import React, {useState} from "react";
import { Link, NavLink, useLocation  } from 'react-router-dom';
import logo from 'assets/img/logo/logo_blk_new.svg'; // [M.20240709] 수정
import menutree from './menutree.json';
function LayoutHeader() {
	const location = useLocation(); 
	const [hidden, setHidden] = useState(true);
	return (
		<>
			<div className='fww-util'>
				<ul>
					{/* Login 전 */}
					<li><Link to="/admin/adm_login" className="login">로그인</Link></li>
					<li><Link to="/main/home/usr_1200" className="join">회원가입</Link></li>
					<li>
						<span>
							<em className='user-name'>홍길동</em>님
							(남은시간 세션 <em className='user-session'>58:31</em>)
						</span>
						<button className='btn-session-extend' type='button'>연장</button>
					</li>
					{/* Login 후 */}
					<li>
						<Link to="#" className="logout">로그아웃</Link>
					</li>
					<li>
						<Link to="/main/usr_1000/usr_1500" className="mypage">마이페이지</Link>
					</li>
					<li>
						<Link to="/main/" className="home" target="_blank">사용자페이지</Link>
					</li>
				</ul>
			</div>
			<header className={hidden ? 'fww-header adm' : 'fww-header adm active'}>
				<Link to="/admin/home" className='logo'>
					<img src={logo} alt="대·중소기업 상생협력기금 종합시스템" />
				</Link>
				<nav 
					className='fww-gnb' 
					onMouseEnter={() => setHidden(false)}
					onMouseLeave={() => setHidden(true)}
				>
					<ul>
						{menutree.gnb.map((gnb, index) => (
							<li key={index} className={location.pathname.includes(gnb.path.slice(0,8)) ? 'd1 active' : 'd1'}>
								<NavLink to={"/admin/" + gnb.path }>
									<span>{gnb.name}</span>
									</NavLink>
								<ul className='d2' >
									{gnb.sub?.map((depth2) => (
										<li key={depth2.s_id} className={location.pathname.slice(-4,23) === depth2.sceenid? 'active' : ''}>
											<Link to={"/admin/" + gnb.path.slice(0,8) + "/adm" + depth2.sceenid}>{depth2.name}</Link>	
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</nav>
			</header>			

		</>
	);
}
export default LayoutHeader;