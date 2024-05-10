import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const sectors1 = [
		'구매조건부신제품개발사업(공동R&D)','대·중소기업 혁신파트너십지원사업','대 중소 상생형 스마트공장','대·중소기업 해외동반진출 지원사업','동반성장몰_복지포인트 지원사업','성과공유제 확산 사업',
		'상생형 창업·벤처기업 지원사업','민간자율 기획사업','협력사 ESG 지원사업','동반성장 문화확산','동반성장 협력사 PR챌린지','지역사회 동반성장 지원사업','신용카드 영세가맹점 지원사업',
		'대·중소기업 안전보건 상생협력','기술유출 방지시스템','산업혁신운동','동반성장 복지포인트 지원사업','협력이 익공유제','원가절감 네트워크형 공동사업','상생협력기금조성·운영 관리 경비','기타 오입금(잘못 출연된 기금의 반환과제용)'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급현황</h1>
					<form className="sf sf-2col sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">지급신청기간</p>
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
											<option>전체</option>
											{sectors1.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">진행상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">신청</option>
											<option value="">반려</option>
											<option value="">접수중</option>
											<option value="">최종접수</option>
											<option value="">수정요청</option>
											<option value="">집행완료</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">제출여부</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">제출</option>
											<option value="">미제출</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요.'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">조회조건</p>
								<div className="sf-value">
									<div className="hz-root hz-gap5">
										<div className="sl sl-md">
											<select>
												<option value="">전체</option>
												<option value="">지급신청번호</option>
												<option value="">담당자</option>
											</select>
										</div>
										<UIInput className={'tf tf-md hz-item hz-fg'} value={''} placeholder={''} />
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
							<p className="tx fc-black"></p>총 <em className="fw500">1103</em>건
						</div>
						<div className="hz-root hz-gap8">
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
							[D] IBSHEET 영역<br /><br />

							<span className="badge badge-22 blue">신청</span>
							<span className="badge badge-22 skyblue">접수중</span>
							<span className="badge badge-22 yellow">수정요청</span>
							<span className="badge badge-22 red">반려</span>
							<span className="badge badge-22 green">최종접수</span>
							<span className="badge badge-22 gray">집행완료</span><br /><br />

							<Link to="/main/usr_2100/usr_2125" style={{color:"#333", padding:"5px", textDecoration:"underline"}}>[임시] 상세페이지 이동</Link>
						</p>
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
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;