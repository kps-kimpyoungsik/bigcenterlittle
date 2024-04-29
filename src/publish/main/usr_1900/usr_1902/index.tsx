import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">상생협력기금안내</Link></li>
					<li><Link to="#">기관안내</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">기관안내</h1>
					<div className="fww-intro">
						<section className="fww-intro-section"></section>
						<section className="fww-intro-section">
							<h3 className="title">직원검색</h3>
						</section>
						<section className="fww-intro-section">
							<h3 className="title">오시는 길</h3>
							<div className="location">
								<div className="map">

								</div>
								<div className="loc-items address">
									<h6>주소</h6>
									04554 서울특별시 중구 퇴계로 173 남산스퀘어빌딩 7층, (fax: 02-368-8709) 
								</div>
								<div className="loc-items bus">
									<h6>버스</h6>
									남산스퀘어 앞 하차
									<ul className="b-line">
										<li>104, 105, 140, 421, 463, 507, 604번</li>
										<li>7011번</li>
										<li>N16번</li>
									</ul>
								</div>
								<div className="loc-items subway">
									<h6>지하철 </h6>
									3호선, 4호선 충무로역 5번출구에서 도보 500m
									<div className="s-line">
										<span className="line3">3호선</span>
										<span className="line4">4호선</span>
									</div>
								</div>
								
								
							</div>
						</section>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;