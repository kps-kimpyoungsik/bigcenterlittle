import React from "react";
//import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from '../PageContainer';
function ContentsContainer() {
	return (
		<PageContainer>
			
			<div className="adm-dash">
				{/* 1.상생협력기금 현황 */}
				<div className="adm-dash-section adm-dash-section-01">
					<div className="tit-date">
						<h2 className="tit hide">상생협력기금 현황</h2>
					</div>
					<ul className="main-list">
						<li>
							<Link to="#" >
								<p className="tit-d2">출연금 현황</p>
								<p className="value"><em>3,000,000,000,000</em> 원</p>
							</Link>
						</li>
						<li>
							<Link to="#" >
								<p className="tit-d2">출연금 현황</p>
								<p className="value"><em>3,000,000,000,000</em> 원</p>
							</Link>
						</li>
						<li>
							<Link to="#" >
								<p className="tit-d2">출연금 현황</p>
								<p className="value"><em>3,000,000,000,000</em> 원</p>
							</Link>
						</li>
						<li>
							<Link to="#" >
								<p className="tit-d2">출연금 현황</p>
								<p className="value"><em>3,000,000,000,000</em> 원</p>
							</Link>
						</li>
					</ul>
				</div>

				<div className="pt">
					<div className="row">
						<div className="col col-5 mr10">
							{/* 2.출연기업 현황 */}
							<div className="adm-dash-section adm-dash-section-02">
								<div className="tit-date">
									<h2 className="tit">출연기업 현황</h2>
									<p className="date">2024-04-01(월) 기준</p> 
								</div>
								<ul className="main-list">
									<li>
										<p className="tit-d2">대기업</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
									<li>
										<p className="tit-d2">중견기업</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
									<li>
										<p className="tit-d2">중소기업</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
									<li>
										<p className="tit-d2">공공기관</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
									<li>
										<p className="tit-d2">기타</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
									<li className="tot">
										<p className="tit-d2">총</p>
										<p className="value"><em>999</em> 개사</p>
									</li>
								</ul>
							</div>

							{/* 3.결재함 */}
							<div className="adm-dash-section adm-dash-section-03">
								<div className="tit-date">
									<h2 className="tit">결재함</h2>
									<p className="date">2024년</p> 
								</div>
								<ul className="main-list">
									<li>
										<Link to="#" >
											<p className="tit-d2">집행완료</p>
											<p className="value"><em>999</em> 건</p>
										</Link>
									</li>
									<li>
										<Link to="#" >
											<p className="tit-d2">결재중</p>
											<p className="value"><em>999</em> 건</p>
										</Link>
									</li>
									<li>
										<Link to="#" >
											<p className="tit-d2">전결</p>
											<p className="value"><em>999</em> 건</p>
										</Link>
									</li>
								</ul>
							</div>						
						</div>
						<div className="col col-5 ml10">
							{/* 4.사업별 출연현황 */}
							<div className="adm-dash-section adm-dash-section-04">
								<div className="tit-date">
									<h2 className="tit">사업별 출연현황</h2>
									<p className="date">2024-04-01(월) 기준</p> 
								</div>
								<div>[D]Chart 영역</div>
							</div>
						</div>
					</div>
				</div>				
			</div>

		</PageContainer>
	);
}
export default ContentsContainer;