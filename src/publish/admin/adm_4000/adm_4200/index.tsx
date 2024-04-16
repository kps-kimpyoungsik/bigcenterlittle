import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">사용자관리</a></li>
						<li className=""><a href="">기업관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">기업관리</h1>

						<div className="sf sf-1row">
							<div className="inner">
								<div className="sf-item">
									<p className="sf-key">기업규모</p>
									<div className="sf-value">
										<div className="sl sl-md">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">대기업</option>
												<option value="2">공공기관</option>
												<option value="3">중견기업</option>
												<option value="4">중소기업</option>
												<option value="5">기타</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">업종</p>
									<div className="sf-value">
										<div className="sl sl-md">											
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">농업</option>
												<option value="2">임업 및 어업</option>
												<option value="3">광업</option>
												<option value="4">제조업</option>
												<option value="5">전기, 가스, 증기 및 수도사업</option>
												<option value="6">하수 · 폐기물 처리, 원료재생 및 환경복원업</option>
												<option value="7">건설업</option>
												<option value="8">도매 및 소매업</option>
												<option value="9">운수업</option>
												<option value="10">숙박 및 음식점업</option>
												<option value="11">출판, 영상, 방송통신 및 정보서비스업</option>
												<option value="12">금융 및 보험업</option>
												<option value="13">전문, 과학 및 기술 서비스업</option>
												<option value="14">사업시설관리 및 사업지원 서비스업</option>
												<option value="15">공공행정, 국방 및 사업지원 서비스업</option>
												<option value="16">공공행정, 국방 및 사회보장 행정</option>
												<option value="17">교육 서비스업</option>
												<option value="18">보건업 및 사회복지 서비스업</option>
												<option value="19">예술, 스포츠 및 여가관련 서비스업</option>
												<option value="20">협회 및 단데, 수리 및 기타 개인 서비스업</option>
												<option value="21">가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동</option>
												<option value="22">국제 및 외국기관</option>
												<option value="23">기타</option>
											</select>
										</div>
									</div>						
								</div>
								<div className="sf-item">
									<p className="sf-key">기업명</p>
									<div className="sf-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="기업명" />
									</div>						
								</div>							
							</div> 
							{/* <button className="sf-btn bt bt-md bt-pri" type="button">조회</button> */}
							<Button color="pri" size="md">조회</Button>
						</div>											

						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<button className="bt bt-sm bt-gray-o" type="button">등록</button>
								<button className="bt bt-sm bt-gray-o" type="button">다운로드</button>
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="0">20개씩보기</option>
										<option value="0">50개씩보기</option>
										<option value="0">100개씩보기</option>
										<option value="0">200개씩보기</option>
										<option value="0">500개씩보기</option>
										<option value="0">1000개씩보기</option>
									</select>
								</div>									
							</div>
						</div>

						<div id='sheetDiv'>[D] IBSHEET 영역</div>
						<div className="pg">
							<div className="group">
								<button type="button" className="item first">처음</button>
								<button type="button" className="item prev">이전</button>
							</div>
							<div className="group">
								<button type="button" className="item">1</button>
								<button type="button" className="item active">2</button>
								<button type="button" className="item">3</button>
								<button type="button" className="item">4</button>
								<button type="button" className="item">5</button>
								<button type="button" className="item">99</button>
								<button type="button" className="item">999</button>
								<button type="button" className="item">9999</button>
							</div>
							<div className="group">
								<button type="button" className="item next">다음</button>
								<button type="button" className="item last">끝</button>
							</div>
						</div>						

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;