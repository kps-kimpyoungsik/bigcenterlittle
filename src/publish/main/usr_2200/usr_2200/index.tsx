import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2200Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
//import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const sectors = [
		'구매조건부신제품개발사업(공동R&D)','대·중소기업 혁신파트너십지원사업','대 중소 상생형 스마트공장','대·중소기업 해외동반진출 지원사업','동반성장몰_복지포인트 지원사업','성과공유제 확산 사업',
		'상생형 창업·벤처기업 지원사업','민간자율 기획사업','협력사 ESG 지원사업','동반성장 문화확산','동반성장 협력사 PR챌린지','지역사회 동반성장 지원사업','신용카드 영세가맹점 지원사업',
		'대·중소기업 안전보건 상생협력','기술유출 방지시스템','산업혁신운동','동반성장 복지포인트 지원사업','협력이 익공유제','원가절감 네트워크형 공동사업','상생협력기금조성·운영 관리 경비','기타 오입금(잘못 출연된 기금의 반환과제용)'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={3} lnbIdx={0}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">통합정보조회</h1>
					<form className="sf sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item ">
								<p className="sf-key">과제년도</p>
								<div className="sf-value">
									<div className="sl sl-md w200">
										<select>
											<option>2014</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">수행기관</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'수행기업명을 입력하세요.'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">재단담당자</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'담당자를 입력하세요.'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요(키워드 검색 가능)'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제신청번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제신청번호를 입력하세요.'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연사업</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option>전체</option>
											{sectors.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item ">
								<p className="sf-key">조회조건</p>
								<div className="sf-value">
									<div className="hz-root hz-gap5 ">
										<div className="sl sl-md w180">
											<select>
												<option value="">전체</option>
												<option value="">기대효과</option>
												<option value="">지원분야</option>
												<option value="">과제분야</option>
											</select>
										</div>
										<UIInput className={'tf tf-md hz-item hz-fg'} value={''} placeholder={'담당자를 입력하세요.'} />
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
						<p className="tx tx-cp2 fc-666 ta-center">조회된 내역이 없습니다.<br />다른 선택을 이용해 주세요.</p>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap5">
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
						<p style={{height:"300px", background:"#f4f4f4"}}>
							[D] IBSHEET 영역<br /><br />
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