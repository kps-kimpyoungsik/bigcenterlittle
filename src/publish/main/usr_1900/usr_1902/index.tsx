import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import map from 'assets/img/pages/usr_map.png';
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
						<section className="fww-intro-section">
							<div className="fw-org">
								<div className="org-wrap">
									<label>기관 조직도</label>
									<h1>사무총장</h1>
									<div className="mid-group">
										<h2>검사실</h2>
										<h2>정책협력TF</h2>
										<h2 className="skyblue">동반위 운영처</h2>
									</div>
									<div className="part-group">
										<ul className="part">
											<li>
												<h3>기획조정본부</h3>
												<ul>
													<li>기획운영부</li>
													<li>경영지원부</li>
													<li>상생기금부</li>
												</ul>
											</li>
											<li>
												<h3>상생협력본부</h3>
												<ul>
													<li>상생정책지원부</li>
													<li>협력성과확산부</li>
													<li>판로지원부</li>
													<li>혁신성장지원부</li>
												</ul>
											</li>
											<li>
												<h3>상생거래본부</h3>
												<ul>
													<li>상생조정지원부</li>
													<li>납품대금연동확산지원TF</li>
													<li>기술보호지원부</li>
													<li>기술임치운영부</li>
													<li>상생결제운영부</li>
												</ul>
											</li>
											<li>
												<h3>농어촌상생기금운영본부</h3>
												<ul>
													<li>농어촌기금운영부</li>
													<li>농어촌기금관리부</li>
												</ul>
											</li>
										</ul>
										<ul className="part skyblue">
											<li>
												<ul className="dir">
													<li>적합업종지원실</li>
													<li>위원회운영부</li>
													<li>홍보팀</li>
													<li>동반성장평가부</li>
													<li>동반성장전략팀</li>
												</ul>
											</li>
											<li>
												<h3>적합업종지원실</h3>
												<ul>
													<li>적합업종부</li>
													<li>상생협력지원부</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
						<section className="fww-intro-section">
							<h3 className="title">직원검색</h3>
							<div className="tb-search-form">
								<div className="tb-search-items">
									<label>사업별 직원 검색</label>
									<div className="sl sl-big">
										<select>
											<option>사업명</option>
										</select>
									</div>
									<div className="sl sl-big">
										<select>
											<option>부서명</option>
										</select>
									</div>
									<UIInput className={'tf tf-big ml10'} value={''} placeholder={""} />
								</div>
								<Button color="pri" size="big">조회</Button>
							</div>
							<div className="tb tb-narrow" data-bg="white">
								<table>
									<caption></caption>
									<colgroup>
										<col width="190px" />
										<col width="190px" />
										<col width="190px" />
										<col width="190px" />
										<col width="190px" />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">이름</th>
											<th scope="col">직위</th>
											<th scope="col">부서</th>
											<th scope="col">작성자</th>
											<th scope="col">전화번호</th>
											<th scope="col">이메일</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>홍길동</td>
											<td>과장</td>
											<td>납풉대금연동확산지원 TF</td>
											<td>이협력</td>
											<td>009-4567-7890</td>
											<td>hwanghee0504@win-win.or.kr</td>
										</tr>
										<tr>
											<td colSpan={6}>
												<div className="nd">
													<p className="tx tx-cp2 fc-666">검색된 정보가 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
						<section className="fww-intro-section">
							<h3 className="title">오시는 길</h3>
							<div className="location">
								<div className="map">
									<img src={map} alt="location" />
								</div>
								<div className="loc-items address">
									<h6>주소</h6>
									04554 서울특별시 중구 퇴계로 173 남산스퀘어빌딩 7층, (fax: 02-368-8709) 
								</div>
								<div className="loc-items bus">
									<h6>버스</h6>
									남산스퀘어 앞 하차
									<ul className="b-line">
										<li className="blue">104, 105, 140, 421, 463, 507, 604번</li>
										<li className="green">7011번</li>
										<li className="night">N16번</li>
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