
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const sectors = [
		'전체','투자재원','창업벤처기업지원','공동투자형 기술개발','산업혁신운동','상생형 스마트공장','파트너십','성과공유제','협력이익공유제','동반진출 지원사업','문화확산-신용카드',
		'문화확산-ESG','문화확산-동반성장','분사기업(스핀오프)상생협력 사업','상생결제','지역사회','통합출연','운영비(투자재원)','운영비(기업자융형상생','운영비(공동투자형기술개발)',
		'운영비(산업혁신운동)','운영비(상생형 스마트공장)','운영비(파트너십)','운영비(성과공유제)','운영비(협력이익공유제)','운영비(동반진출 지원사업)','운영비(문화확산-신용카드)',
		'운영비(문화확산-ESG)','운영비(문화확산-동반성장)','운영비(분사기업(스핀오프)상생협력 사업)','운영비(통합출연)','입금오류출연',
	]		
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금출연</Link></li>
					<li><Link to="#">전용현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용현황</h1>
					<form className="sf sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-4">
								<p className="sf-key">전용 신청기간</p>
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
								<p className="sf-key">전용상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">선택하세요.</option>
											{sectors.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연사업</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">신청중</option>
											<option value="">접수중</option>
											<option value="">반려</option>
											<option value="">승인완료</option>
										</select>
									</div>
								</div>
							</div>
							{/* 
							<div className="sf-item">
								<p className="sf-key">환원여부</p>
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
											<span className="txt">예</span>
										</label>
										<label htmlFor="rd-1-3" className="ip-rd-label">
											<input name="rd-1" id="rd-1-3" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">아니오</span>
										</label>
									</div>
								</div>
							</div>
							 */}
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
						<p style={{height:"200px", background:"#f4f4f4"}}>
							[D] IBSHEET 영역<br />
							<Link to="/main/usr_2000/usr_2011" style={{color:"#333", padding:"5px", textDecoration:"underline"}}>[임시] 상세페이지 이동</Link>
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
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">전용신청</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;