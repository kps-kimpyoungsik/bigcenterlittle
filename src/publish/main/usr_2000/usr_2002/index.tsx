
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIDatePicker from "components/datepicker";
//import UIInput from 'components/input/input';
import Button from 'components/buttons/';
function ContentsContainer() {
	const sectors = [
		'구매조건부신제품개발사업(공동R&D)','대·중소기업 혁신파트너십지원사업','대 중소 상생형 스마트공장','대·중소기업 해외동반진출 지원사업','동반성장몰_복지포인트 지원사업',
		'성과공유제 확산 사업','상생형 창업·벤처기업 지원사업','민간자율 기획사업','협력사 ESG 지원사업','동반성장 문화확산','동반성장 협력사 PR챌린지','지역사회 동반성장 지원사업',
		'신용카드 영세가맹점 지원사업','대·중소기업 안전보건 상생협력','기술유출 방지시스템','상생협력기금조성·운영 관리 경비','기타 오입금(잘못 출연된 기금의 반환과제용'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연현황</h1>
					<form className="sf sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-4">
								<p className="sf-key">출연 신청기간</p>
								<div className="sf-value">
									<div className="fund-datepicker">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
										<div className="hz-root hz-gap5">
											<Button color="pri-o2" size="md">이전 3개월</Button>
											<Button color="pri" size="md">이전 6개월</Button>
											<Button color="pri-o2" size="md">이전 12개월</Button>
											<Button color="pri-o2" size="md">이전 24개월</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연사업</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											{sectors.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">신청</option>
											<option value="">입금확인</option>
											<option value="">수납완료</option>
										</select>
									</div>
								</div>
							</div>
							
							<div className="sf-item">
								<p className="sf-key mt0">기부영수증 <br />발급여부</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">발급</option>
											<option value="">미발급</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>
					{/* NO-data */}
					<div className="nd">
						<i className="ic"></i>
						<p className="tx tx-cp2 fc-666">조회된 내역이 없습니다.</p>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap5">
							<Button color="pri-o" size="sm">등록</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
							<div className="sl sl-sm w120">
								<select>
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
					<div className="ibsheet">
						<p style={{height:"200px", background:"#f4f4f4"}}>
							[D] IBSHEET 영역<br />
							<Link to="/main/usr_2000/usr_2004" style={{color:"#333", padding:"5px", textDecoration:"underline"}}>[임시] 상세페이지 이동</Link>
						</p>
					</div>
					{/* Badge */}
					<div style={{margin:'20px 0 0'}}>
						<strong>Badge</strong>
						<br />
						출연상태<br />
						<label className="badge badge-22 blue">신청</label>
						<label className="badge badge-22 green">입금확인</label>
						<label className="badge badge-22 gray">수납완료</label>
						<br /><br />
						과제현황<br />
						<label className="badge badge-22 blue">신청</label>
						<label className="badge badge-22 purple">변경심사</label>
						<label className="badge badge-22 green">접수완료</label>
						<label className="badge badge-22 yellow">수정요청</label>
						<label className="badge badge-22 red">반려</label>
						<label className="badge badge-22 gray">심사완료</label>
						<br /><br />
						지급현황<br />
						<label className="badge badge-22 blue">신청</label>
						<label className="badge badge-22 skyblue">접수중</label>
						<label className="badge badge-22 yellow">수정요청</label>
						<label className="badge badge-22 red">반려</label>
						<label className="badge badge-22 green">최종접수</label>
						<label className="badge badge-22 gray">지급완료</label>
					</div>
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
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">기부금영수증 바로가기</Button>
						<Button color="pri" size="md">출연신청</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;