
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
import useToggleState from 'components/hooks/useToggleState';
import { Tooltip } from "react-tooltip";
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const sectors1 = [
		'구매조건부신제품개발사업(공동R&D)','대·중소기업 혁신파트너십지원사업','대 중소 상생형 스마트공장','대·중소기업 해외동반진출 지원사업','동반성장몰_복지포인트 지원사업','성과공유제 확산 사업',
		'상생형 창업·벤처기업 지원사업','민간자율 기획사업','협력사 ESG 지원사업','동반성장 문화확산','동반성장 협력사 PR챌린지','지역사회 동반성장 지원사업','신용카드 영세가맹점 지원사업',
		'대·중소기업 안전보건 상생협력','기술유출 방지시스템','산업혁신운동','동반성장 복지포인트 지원사업','협력이 익공유제','원가절감 네트워크형 공동사업','상생협력기금조성·운영 관리 경비','기타 오입금(잘못 출연된 기금의 반환과제용)'
	]
	const sectors2 = [
		'상생협력 성과의 공평한 배분에 관한 사업','기술협력 촉진 사업','인력교류 확대 사업','환경경영협력 촉진사업','임금격차 완화 및 일자리 창출 지원사업','상생협력기금의 조성·운용 및 관리를 위한 경비',
		'중소기업의 생산성 향상을 위한 지원 사업','중소기업의 기술보호 지원사업','중소기업 및 벤처기업의 창업 지원 사업','국내외 판로확대를 위한 공동협력 사업','동반성장기반 구축 및 문화확산에 관한 사업','기금 사용용도 미지정'
	]
	const sectors3 = [
		'농업, 임업 및 어업','제조업','전기, 가스, 증기 및 수도사업','하수 페기물 처리, 원료재생 및 환경복원업','건설업','도매 및 소매업','운수업','숙박 및 음식점업','출판, 영상, 방송통신 및 정보서비스업',
		'금융 및 보험업','부동산업 및 임대업','전문, 과학 및 기술 서비스업','사업시설관리 및 사업지원 서비스업','공공행정, 국방 및 사회보장 행정','교육 서비스업','보건업 및 사회복지 서비스업',
		'예술, 스포츠 및 여가관련 서비스업','협회 및 단체, 수리 및 기타 개인 서비스업','가구 내 고용활동 및 달리 분류되지 않은 자가소비 생산활동','국제 및 외국기관','기타'
	]

	const sectors4 = [
		'공평한 성과배분','인력개발 및 교류','창업ㆍ벤처지원','국내 판로확대','해외 판로확대','생산성 향상','연구개발(R&D기술협력)','기술ㆍ지식재산권 이전','지역경제 활성화','기술보호',
		'복리후생(양극화해소 포함)','환경경영','안전재해 지원','저출산육아지원','기타 자발적 상생활동','상생협력기금조성 운영 관리 경비','오입금(잘못 출연된 기금의 반환과제용)',
	]
	const modalusr2102 = useToggleState({});
	const modalusr2103 = useToggleState({});
	const modalusr2104 = useToggleState({});
	const modalusr2105 = useToggleState({});
	const modalusr2139 = useToggleState({});
	const modalusr2149 = useToggleState({});
	const handleChange = (e) => {if( e.target.value === 'open') {modalusr2105.open();}}
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={0}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제승인신청</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<div className="fo-key">출연사업</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIInput className={'tf tf-md hz-item hz-fg'} value={'사업명'} placeholder={''} />
											<Button color='pri-o2' size="md" onClick={modalusr2139.open}>출연사업선택</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<div className="fo-key">과제신청 가능금액(원)</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span className="req">과제명</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip1">도움말</button>
										<Tooltip 
											id="tooltip1"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">출연기업의 지원과제계회 제목을 작성(연도 구분 있을 시 연도 표시)</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요'} />
									</div>
								</div>
								{/* 
								<div className="fo-item req">
									<p className="fo-key">과제신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''}  readOnly={true}/>
									</div>
								</div>
								v0.89 삭제*/}
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">과제기간</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip2">도움말</button>
										<Tooltip 
											id="tooltip2"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												<h6 className="tooltip-title">과제 운영기간(최대 1년), 사업기갑 변경 시 과제변경 신청 필수</h6>
												<span className="fc-pri">(사업기간 내 사업 운영 및 비용 집행)</span> <br />
												모든 제출 증빙자료의 발행일자가 고제 기간 내에 포함될 수 있도록 설정 바랍니다.<br />ex) 견적서, 세금계선서, 이체확인증 등<br />
												<p className="mt5">※ 해당연도 지급 요청 마감은 매년 11월 30일 18:00까지이며 이후 당해연도 내 추가 지급신청 불가.</p>
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">기금사용용도</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip3">도움말</button>
										<Tooltip 
											id="tooltip3"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">‘[참고] 상생협력기금 사용용도 분류표＇를 참조하여 해당하는 번호를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors2.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								{/* 
								<div className="fo-item req">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors1.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								v0.89 삭제 */}
								<div className="fo-item req">
									<p className="fo-key">과제분류(대분류)</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors4.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">과제분류(소분류)</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap5 mb15">
							<h3 className="section-title">지원내용 및 기대효과</h3>
							<button type="button" className="button-tooltip" data-tooltip-id="tooltip4">도움말</button>
							<Tooltip 
								id="tooltip4"  
								disableStyleInjection={true}
								place={"bottom-start"}
								className="tooltip-conts"
							>
								<div className="msg">지원계획 내용과 지원을 통해 기대되는 효과 기입</div>
							</Tooltip>
						</div>
						<form name="" action="" method="" className=" mb30">
							<div className="tb tb-narrow mb15">
								<table>
									<caption></caption>
									<colgroup>
									
										<col width="200px" />
										<col />
									</colgroup>
									<tbody>
										<tr>
											<th scope="row" ><span className="th-req">과제개요</span></th>
											<td>
												<div className="ta-group w100p">
													<textarea rows={3} className="ta-ip" placeholder="과제에 대한 개요내용을 자유롭게 입력하세요."/>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row" ><span className="th-req">정성효과</span></th>
											<td>
												<div className="ta-group w100p">
													<textarea rows={3} className="ta-ip" placeholder="거래관계 향상에 대한 의견을 자유롭게 입력하세요."/>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">기대효과</th>
											<td>
												<div className="fo fo-col2">
													<div className="inner">
														<div className="fo-item">
															<p className="fo-key">매출액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'기대되는 매출액을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">지식재산권</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'지식재산권을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">일자리창출</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'기대되는 일자리창출 수를 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">수출액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'수출액을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">판로처 확대</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'판로처 확대로 기대되는 내용을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">신규참여 수탁기업 수</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'수탁기업수를 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">신규 투자액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'신규 투자액을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">신설 창업기업 수</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'창업기업의 수를 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">생산성 향상</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'기대되는 생산성 향상 내용을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">중소기업 체감도</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'중소기업 체감도(%)를 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">예상 구매액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'예상구매액을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">기타 성과1</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'기타 성과를 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">예상 판매액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'예상판매액을 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item">
															<p className="fo-key">기타 성과2</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'기타 성과를 입력하세요.'} />
															</div>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tx-msg"><span className="fc-pri">※ 기대효과(정성), 기대효과(정량)에 최소 1개 이상의 항목에 입력해 주세요.</span></div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 대상</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">중소기업 지원 수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip5">도움말</button>
										<Tooltip 
											id="tooltip5"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수혜받는 중소기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} />	
											<p className="tx-msg hz-item">개사 (수해 받을 중소기업 수 입력)</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업 외 지원 수</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} />	
											<p className="tx-msg hz-item">개사 (수해 받을 중소기업 수 입력)</p>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span className="req">수행기관</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip6">도움말</button>
										<Tooltip 
											id="tooltip6"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												효율적인 사업수행을 위하여 출연기업이 선정한 대행기관(기업)을 의미하며, <br />
												협력재단이 수행기관에게 직접 지급하는 경우에만 사업자등록증의 상호명을 기입<br />
												(수행기관 변경 및 추가 시 사업변경 신청 필수)
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap10 w100p">
											<div className="sl sl-md w556">
												<select onChange={handleChange}>
													<option >수행기관 없음</option>
													<option value={'open'}>수행기관 선택</option>
												</select>
											</div>
											<div className="hz-root hz-gap5 w-auto">
												<UIInput className={'tf tf-md hz-item hz-fg w400'} value={'기업명'} placeholder={''} />
												<Button color='pri-o2' size="md" onClick={modalusr2102.open}>찾기</Button> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap10 hz-item">
								<h3 className="section-title">지원 항목 별 지원금</h3>
								<p className="tx-msg"><span className="fc-pri">※ 지원금은 최소 1개 이상을 입력해야 합니다.</span></p>
							</div>
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
							</div>
						</div>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="60px" />
										<col />
										<col />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th>
												<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-all" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</th>
											<th scope="col">지원항목</th>
											<th scope="col">산출근거</th>
											<th scope="col">증빙방법</th>
											<th scope="col">금액(원)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label htmlFor="ch-t1" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-t1" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'지원항목을 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'산출근거를 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'증빙방법을 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<div className="hz-root hz-gap5 w100p">
													<div className="tf-unit hz-item hz-fg">
														<UIInput className={'tf tf-md ta-right'} value={''} placeholder={'지원금액을 입력하세요(숫자만입력)'} />
														<span className="u">원</span>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tb-total">
								<div className="tb-total-items">지원 항목별 합계금액(원)</div>
								<div className="tb-total-items">
									<div className="fund-form-items tf-unit">
										<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
										<span className="u">원</span>
									</div>
									<p className="tx-msg"><span className="fc-pri">(일억원 한글금액출력)</span></p> 
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">법인사업자번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'1234-12-1234567'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'직급 출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'부서 출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'이메일 출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전화번호 출력'} placeholder={''} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
				</main>
			</div>
			{/* modal - 출연금액 선택 */}
			<ModalPopup
					open={modalusr2139.isShowing}
					title="출연금액 선택"
					size="mid"
					onClose={modalusr2139.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2 mb15" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-item fo-m-1-3">
									<p className="fo-key">출연기업</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIInput className={'tf tf-md hz-item hz-fg'} value={''} placeholder={'출연기업 찾기'} />
											<Button color='pri-o2' size="md"onClick={() => {modalusr2139.close(); modalusr2149.open()}}>출연기업찾기</Button> 
											<Button color='gray-o' size="md">삭제</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item fo-item fo-m-1-3">
									<p className="fo-key">출연사업</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>전체</option>
												{sectors1.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb30">
							<Button color="pri" size="md">조회</Button>
						</div>
						<div className="tb-top">
							<div>
								<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
							</div>
							<div className="hz-root hz-gap8">
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
							<p style={{height:"300px"}}>[D] IBSHEET 영역</p>
						</div>
						<div className="pg mt10">
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
					</div>
				</div>
			</ModalPopup>
			{/* modal - 기업검색 */}
			<ModalPopup
					open={modalusr2149.isShowing}
					title="기업검색"
					size="mid"
					onClose={modalusr2149.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<div className="tb-search-form bd mb30">
							<div className="hz-root hz-center hz-gap8">
								<div className="hz-item sl sl-md">
									<select>
										<option>기업명</option>
										<option>법인사업자번호</option>
										<option>사업자등록번호</option>
									</select>
								</div>
								<UIInput className={'hz-item tf tf-md'} value={''} placeholder={"입력하세요."} />
								<Button color="pri" size="md">조회</Button>
							</div>
						</div>
						{/* NO-data */}
						<div className="nd">
							<i className="ic"></i>
							<p className="tx tx-cp2 fc-666 ta-center">조회된 내역이 없습니다.</p>
						</div>
						<div className="tb-top">
							<div>
								<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
							</div>
							<div className="hz-root hz-gap8">
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
							<p style={{height:"200px"}}>[D] IBSHEET 영역</p>
						</div>
						<div className="pg mt10">
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
					</div>
				</div>
			</ModalPopup>
			{/* modal - 수행 기관 선택 */}
			<ModalPopup
					open={modalusr2105.isShowing}
					title="수행 기관 선택"
					size="lg"
					onClose={modalusr2105.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput type={'number'} className={'tf tf-md w100p'} value={''} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap8 mt30">
							<Button color="pri-o" size="md" onClick={() => {modalusr2105.close(); modalusr2103.open()}}>수행기관 신규등록</Button>
							<Button color="gray-o" size="md" >조회</Button>
						</div>
						<div className="approval-gen mt30">
							<div className="approval-gen-member">
								<h3 className="tx tx-bd1">수행기관목록</h3>
								<div className="box">
									<div className="ibsheet">[D] IBSHEET 영역</div>
								</div>
								<div className="pg mt8">
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
									</div>
									<div className="group">
										<button type="button" className="item next">다음</button>
										<button type="button" className="item last">끝</button>
									</div>
								</div>
							</div>
							<div className="approval-ctr">
								<button type="button" className="bt bt-left-ico" data-size="md" data-color="gray-o">&lt;</button>
								<button type="button" className="bt bt-right-ico" data-size="md" data-color="gray-o">&gt;</button>
							</div>
							<div className="approval-gen-selected">
								<div className="hz-root hz-sb">
									<h3 className="tx tx-bd1">선택된 수행기관</h3>
									<Button color="gray-o" size="sm" >선택초기화</Button>
								</div>
								<div className="box">
									<div className="ibsheet">[D] IBSHEET 영역</div>
								</div>
								<div className="pg mt8">
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
									</div>
									<div className="group">
										<button type="button" className="item next">다음</button>
										<button type="button" className="item last">끝</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">선택완료</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행 기관 찾기 */}
			<ModalPopup
					open={modalusr2102.isShowing}
					title="수행 기관 찾기"
					size="lg"
					onClose={modalusr2102.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput type={'number'} className={'tf tf-md w100p'} value={''} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap8 mb30">
							<Button color="pri" size="md" >조회</Button>
						</div>
						<div className="approval-gen">
							<div className="approval-gen-member">
								<h3 className="tx tx-bd1">수행기관목록</h3>
								<div className="box">
									<div className="ibsheet">[D] IBSHEET 영역</div>
									<Button color="gray-o" size="sm" onClick={() => {modalusr2102.close(); modalusr2104.open()}}>(임시)수행기관관리</Button>
								</div>
								<div className="pg mt8">
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
									</div>
									<div className="group">
										<button type="button" className="item next">다음</button>
										<button type="button" className="item last">끝</button>
									</div>
								</div>
							</div>
							<div className="approval-ctr">
								<button type="button" className="bt bt-left-ico" data-size="md" data-color="gray-o">&lt;</button>
								<button type="button" className="bt bt-right-ico" data-size="md" data-color="gray-o">&gt;</button>
							</div>
							<div className="approval-gen-selected">
								<div className="hz-root hz-sb">
									<h3 className="tx tx-bd1">선택된 수행기관</h3>
									<Button color="gray-o" size="sm" >선택초기화</Button>
								</div>
								<div className="box">
									<div className="ibsheet">[D] IBSHEET 영역</div>
								</div>
								<div className="pg mt8">
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
									</div>
									<div className="group">
										<button type="button" className="item next">다음</button>
										<button type="button" className="item last">끝</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri-o" size="md" onClick={() => {modalusr2102.close(); modalusr2103.open()}}>수행기관 신규등록</Button>
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">적용</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행기관 신규등록 */}
			<ModalPopup
					open={modalusr2103.isShowing}
					title="수행기관 신규등록"
					size="lg"
					onClose={modalusr2103.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<div className="ta-right mb10">
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업자등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">대표자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'대표자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">설립일자</p>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립형태</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>영리</option>
												<option>비영리 </option>
											</select>
										</div>		
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업규모</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>대기업</option>
												<option>공공기관</option>
												<option>중견기업</option>
												<option>중소기업</option>
												<option>기타</option>
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">업종</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors3.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'담당자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'메일주소를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">일반전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사업자 등록증</p>
									<div className="fo-value">
										File upload...
									</div>
								</div>
							</div>
							
						</form>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행기관 관리 */}
			<ModalPopup
					open={modalusr2104.isShowing}
					title="수행기관 관리"
					size="lg"
					onClose={modalusr2104.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<div className="ta-right mb8 tx-msg"><span className="fc-pri">＊</span> 필수 입력</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업자등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000-00-00000'} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">대표자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'대표자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">설립일자</p>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립형태</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>영리</option>
												<option>비영리 </option>
											</select>
										</div>		
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업규모</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>대기업</option>
												<option>공공기관</option>
												<option>중견기업</option>
												<option>중소기업</option>
												<option>기타</option>
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">업종</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors3.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자명명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'담당자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'메일주소를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">일반전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사업자 등록증</p>
									<div className="fo-value">
										File upload...
									</div>
								</div>
							</div>
						</form>
						<section className="fund-section mt30">
							<h3 className="section-title mb15">심사의견</h3>
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="120px" />
										<col />
										<col width="240px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">등록일시</th>
											<th scope="col">등록자</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>09</td>
											<td>YYYY-MM-DD HH:MM:SS</td>
											<td>홍길동</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="pg mt10">
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
						</section>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;