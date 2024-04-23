
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import UIDatePicker from "components/datepicker";
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
function ContentsContainer() {
	const sectors = [
		'전체','동반성장 투자재원','상생형 창법 밴처기업 지원사업','공동투자형 기술개발','산업혁신운동','대중소 상생형 스마트공장','대중소기업 혁신 파트너십','성과공유제',
		'협력이익공유제','대중소깅버 동반진출','동반성장 문화확산-신용카드 영세가맹점 지원사업','동반성장 문화확산-협력시ESG 평가지원사업','동반성장 문화확산-혁신주도형 동반성장',
		'분사기업(스핀오프) 상생협력 사업','상생결제제도 운영','지역사회 동반성장 지원사업'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금출연</Link></li>
					<li><Link to="#">출연신청</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연신청</h1>
					<form className="sf sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
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
								<p className="sf-key">출연상태</p>
								<div className="sf-value">
									<div className="hz-root hz-gap15">
										<label htmlFor="rd-1-1" className="ip-rd-label">
											<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio" defaultChecked/>
											<span className="check"></span>
											<span className="txt">전체</span>
										</label>
										<label htmlFor="rd-1-2" className="ip-rd-label">
											<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">신청</span>
										</label>
										<label htmlFor="rd-1-3" className="ip-rd-label">
											<input name="rd-1" id="rd-1-3" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">입금확인중</span>
										</label>
										<label htmlFor="rd-1-4" className="ip-rd-label">
											<input name="rd-1" id="rd-1-4" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">수납완료</span>
										</label>

									</div>


								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연사업</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">업종</option>
											{sectors.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={"출연번호를 입력하세요"} />
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">1103</em>건
						</div>
						<div className="hz-root hz-gap8">
							<Button color="gray-o" size="sm">등록</Button>
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
						[D] IBSHEET 영역
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
						<label className="badge badge-22 green">접수중</label>
						<label className="badge badge-22 yellow">수정요청</label>
						<label className="badge badge-22 red">반려</label>
						<label className="badge badge-22 green">최종접수</label>
						<label className="badge badge-22 gray">지급완료</label>
					</div>
					{/* NO-data */}
					<div className="nd">
						<i className="ic"></i>
						<p className="tx tx-cp2 fc-666">조회된 내역이 없습니다.</p>
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