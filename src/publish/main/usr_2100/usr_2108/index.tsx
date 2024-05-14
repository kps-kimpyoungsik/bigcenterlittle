import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputFile from 'components/input/inputFile';
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
	const sectors4 = [
		'공평한 성과배분','인력개발 및 교류','창업ㆍ벤처지원','국내 판로확대','해외 판로확대','생산성 향상','연구개발(R&D기술협력)','기술ㆍ지식재산권 이전','지역경제 활성화','기술보호',
		'복리후생(양극화해소 포함)','환경경영','안전재해 지원','저출산육아지원','기타 자발적 상생활동','상생협력기금조성 운영 관리 경비','오입금(잘못 출연된 기금의 반환과제용)',
	]
	const modalusr2139 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제 내용 수정</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<div className="fo-key">출연사업</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIInput className={'tf tf-md hz-item hz-fg'} value={'동반성장'} placeholder={''} />
											<Button color='gray-o' size="md" onClick={modalusr2139.open}>출연사업선택</Button> 
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
										<UIInput className={'tf tf-md w100p'} value={'동반성장 투자재원 과제'} placeholder={'과제명을 입력하세요'} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">진행상태</p>
									<div className="fo-value">
										{/* <UIInput className={'tf tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /> */}
										<span className="badge badge-23 blue">신청</span>
										<span className="badge badge-23 green">접수완료</span>
										<span className="badge badge-23 yellow">수정요청</span>
										<span className="badge badge-23 red">반려</span>
										<span className="badge badge-23 gray">심사완료</span>
									</div>
								</div>
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
										<col width="80px" />
										<col width="120px" />
										<col />
									</colgroup>
									<tbody>
										<tr>
											<th scope="row" colSpan={2}><span className="th-req">과제개요</span></th>
											<td>
												<div className="ta-group w100p">
													<textarea rows={3} className="ta-ip" placeholder="과제에 대한 개요를 입력하세요." defaultValue={'과제신청에서 입력한 과제에 대한 개요내용이 출력됩니다.'}/>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row" rowSpan={2} className="bd-r bd-nb">기대효과</th>
											<th scope="row"><span className="th-req">정성</span></th>
											<td>
												<div className="fo fo-col2">
													<div className="inner">
														<div className="fo-item fo-m-1-3">
															<p className="fo-key">거래관계 향상</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'거래관계 향상에 대한 의견을 자유롭게 입력하세요.'} />
															</div>
														</div>
														<div className="fo-item fo-m-1-3">
															<p className="fo-key">협력관계 향상</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'협력관계 향상에 대한 의견을 자유롭게 입력하세요.'} />
															</div>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row"><span className="th-req">정량</span></th>
											<td>
												<div className="fo fo-col2">
													<div className="inner">
														<div className="fo-item">
															<p className="fo-key">매출액</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={'1000억'} placeholder={'기대되는 매출액을 입력하세요.'} />
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
											<UIInput className={'tf tf-md ta-right w100p'} value={'3'} placeholder={''} />	
											<p className="tx-msg hz-item">개사 (수해 받을 중소기업 수 입력)</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업 외 지원 수</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'3'} placeholder={''} />	
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
												<select>
													<option >수행기관 없음</option>
													<option>수행기관 선택</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap10">
								<h3 className="section-title">지원 항목 별 지원금</h3>
								<p className="tx-msg"><span className="fc-pri">※ 지원금은 최소 1개 이상을 입력해야 합니다. </span></p>
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
										<col width="385px" />
										<col width="385px" />
										<col width="385px" />
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
												<UIInput className={'tf tf-md ta-center w100p'} value={'설비구매비'} placeholder={'지원항목을 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'자동화 생산 공정 기계 설비'} placeholder={'산출근거를 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'견적서'} placeholder={'증빙방법을 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<div className="tf-unit w100p">
													<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}/>
													<span className="u">원</span>
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
						<div className="hz-root hz-gap5 mb15">
							<h3 className="section-title">첨부파일</h3>
							<button type="button" className="button-tooltip" data-tooltip-id="tooltip7">도움말</button>
							<Tooltip 
								id="tooltip7"  
								disableStyleInjection={true}
								place={"bottom-start"}
								className="tooltip-conts"
							>
								<div className="msg">
									<h6 className="tooltip-title">과제 신청 시 첨부 서류</h6>
									<ul>
										<li>1. 운영규정 별지 제2호 동반성장 투자재원 과제신청서(과제요약서 포함)
											<ul className="list-group">
												<li>서면 : 지급신청서(서면) 클릭하여 지급신청서 출력 후 직인을 찍고 스캔하여 첨부문서에 등록하셔야 합니다.</li>
												<li>전자인증 : 기업용 공인인증서를 이용하여 지급신청서(전자인증) 을 클릭하여 인증이 완료 되면 됩니다. <br />별도 첨부 문서는 없습니다.</li>
											</ul>
										</li>
										<li>2. 세부사업계획서(완료심사의 경우, 사업완료보고서)</li>
										<li>3. 수행기관 사업자등록증(해당시)</li>
										<li>4. 기타 심사에 필요하다고 판단되는 경우, 추가 서류를 요청 드릴 수 있습니다.</li>
									</ul>
								</div>
							</Tooltip>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 신청서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<UIInputFile  placeholder={'파일을 첨부해 주세요.'}/>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 계획서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<UIInputFile  placeholder={'파일을 첨부해 주세요.'}/>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								{/* 
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 계획서 또는 완료 보고서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={''} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap5 w120 ">
														<Button color='pri-o2' size="md">찾기</Button>
													</div>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								v0.89 삭제 */}
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관 사업자 등록증<br />(수행기관 해당시만)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<UIInputFile  placeholder={'파일을 첨부해 주세요.'}/>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						{/* 과제 신청서 전자인증한 상태*/}
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 신청서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p '} value={'과제신청서.pdf(67.58KB)'} placeholder={'파일을 첨부해 주세요.'}  readOnly={true}/>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 계획서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<div className="hz-root hz-gap8 w100p">
													<UIInput className={'tf tf-md hz-item grow'} value={'과제신청서.pdf(67.58KB)'} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap8">
														<Button color='pri-o2' size="md">찾기</Button>
														<Button color='gray-o' size="md">삭제</Button>
													</div>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관 사업자 등록증<br />(수행기관 해당시만)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<div className="hz-root hz-gap8 w100p">
													<UIInput className={'tf tf-md hz-item grow'} value={'사업자등록증.pdf(67.58KB)'} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap8 ">
														<Button color='pri-o2' size="md">찾기</Button>
														<Button color='gray-o' size="md">삭제</Button>
													</div>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
							</div>
						</form>

						<p className="tx-msg mb15"><span className="fc-pri">※ 항목 외 기타 파일들은 아래 파일 첨부를 이용해 주세요.</span></p>

						<div>file upload...</div>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap10 mb25">
							<h3 className="section-title">변경이력 선택</h3>
							<p className="tx-msg"><span className="fc-pri">※ 아래 항목 중 수정하신 내용을 선택하시면 수정된 내역을 확인하실 수 있습니다.</span></p>
						</div>
						<form name="" action="" method="">
							<div className="hz-root hz-gap24 mb15">
								<label htmlFor="ch-1" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-1" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">지원금액 변경</span>
								</label>
								<label htmlFor="ch-2" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-2" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">지원기간 변경</span>
								</label>
								<label htmlFor="ch-3" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-3" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">기타 변경사유</span>
								</label>
							</div>
							<div className="tb tb-narrow mb15">
								<table>
									<caption></caption>
									<colgroup>
										<col />
										<col width="40%"/>
										<col width="40%"/>
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">기준</th>
											<th scope="col">변경</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>지원금액 변경</td>
											<td>
												<div className="tf-unit w100p">
													<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}/>
													<span className="u">원</span>
												</div>
											</td>
											<td>
												<div className="tf-unit w100p">
													<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}/>
													<span className="u">원</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>지원기간 변경</td>
											<td>
												<div className="hz-root hz-gap5 w100p">
													<UIDatePicker className="hz-item"/>
													<span className="hz-item">~</span>
													<UIDatePicker className="hz-item"/>
												</div>
											</td>
											<td>
												<div className="hz-root hz-gap5 w100p">
													<UIDatePicker className="hz-item"/>
													<span className="hz-item">~</span>
													<UIDatePicker className="hz-item"/>
												</div>
											</td>
										</tr>
										<tr>
											<td>기타 변경 사유</td>
											<td colSpan={2}>
												<div className="ta-group w100p">
													<textarea rows={3} className="ta-ip" placeholder="변경사유를 입력하세요." />
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="tx-msg">※ 안내사항 : 위에서 변경될 내용에 대해 변경하시고 체크박스를 선택하시면 변경내용이 자동으로 적용됩니다.</p>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원기간 변경 이력</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px"/>
										<col />
										<col />
										<col width="240px"/>
									</colgroup>
									<thead>
										<tr>
											<th scope="col">NO</th>
											<th scope="col">기존</th>
											<th scope="col">변경</th>
											<th scope="col">변경일</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf tf-md ta-center w100p'} value={'YYYY-MM-DD(Day)'} readOnly={true} />
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>	
						<Button color="gray-o" size="md">목록</Button>					
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
		</PageContainer>
	);
}
export default ContentsContainer;