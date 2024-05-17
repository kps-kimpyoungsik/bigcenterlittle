
import React, { useState} from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import { Tooltip } from "react-tooltip";
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const [checked, setChecked] = useState(true);
	const checkHandled = ({target}) => {
		if (target.checked) {setChecked(true)} else {setChecked(false)}
	}
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제현황</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">제출</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2108">수정</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2105">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap15 mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<div className="switch-button">
								<input type="checkbox" id="switch-chk" checked={checked} onChange={(e) => checkHandled(e)} />
								<label htmlFor="switch-chk" >
									<span className="toggle"></span>
									상세보기
								</label>
							</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>과제명</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip1">도움말</button>
										<Tooltip 
											id="tooltip1"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">출연기업의 지원과제계획 제목을 작성(연도 구분 있을 시 연도 표시)</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다.'} placeholder={''} readOnly={true} />
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
										<span>과제신청일</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip2">도움말</button>
										<Tooltip 
											id="tooltip2"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">Tooltip...</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>과제기간</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip3">도움말</button>
										<Tooltip 
											id="tooltip3"  
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
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day) (MM월DD일)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">제출여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'예'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전자인증 여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전자인증 / 서면'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제종료여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">과제종료일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2024-01-31(월)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								{/* 유형 type */}
								<div className="fo-rs-tit row6">유형</div>
								<div className="fo-item fo-item-rs">
									<p className="fo-key">사업분류</p>
									<div className="fo-value"><UIInput className={'tf tf-md w100p'} value={'[사업분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} /></div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>기금사용용도</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip4">도움말</button>
										<Tooltip 
											id="tooltip4"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">[참고] 상생협력기금 사용용도 분류표’를 참조하여 해당하는 번호를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[중소기업의 생산성 향상을 위한 지원 사업]'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-item-rs">
									<p className="fo-key">과제분야(대분류)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[지원분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제분야(소분류)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[과제분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap5 mb15">
							<h3 className="section-title">지원내용 및 기대효과</h3>
							<button type="button" className="button-tooltip" data-tooltip-id="tooltip5">도움말</button>
							<Tooltip 
								id="tooltip5"  
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
													<textarea rows={3} className="ta-ip" placeholder="과제에 대한 개요를 입력하세요." defaultValue="입력된 과제개요 내용이 출력됩니다." />
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row" rowSpan={2} className="bd-r bd-nb">기대<br />효과</th>
											<th scope="row"><span className="th-req">정성</span></th>
											<td>
												<div className="fo fo-col2">
													<div className="inner">
														<div className="fo-item fo-m-1-3">
															<p className="fo-key">거래관계 향상</p>
															<div className="fo-value">
																<UIInput className={'tf tf-md  w100p'} value={'거래관계가 향상되어 매출이 향상됩니다.'} placeholder={'거래관계 향상에 대한 의견을 자유롭게 입력하세요.'} />
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
																<UIInput className={'tf tf-md  w100p'} value={'1,000억'} placeholder={'기대되는 매출액을 입력하세요.'} />
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
						</form>
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
						<h3 className="section-title mb15">지원대상</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										<span>중소기업 지원 수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip6">도움말</button>
										<Tooltip 
											id="tooltip6"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수혜받는 중소기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업 지원 수</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>수행기관</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip61">도움말</button>
										<Tooltip 
											id="tooltip61"  
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
										<UIInput className={'tf tf-md w100p'} value={'수행기관 없음'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 항목 별 지원금</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="400px" />
										<col width="400px" />
										<col width="400px" />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">지원항목</th>
											<th scope="col">산출근거</th>
											<th scope="col">증빙방법</th>
											<th scope="col">금액(원)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'설비구매비'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'자동화 생산 공정 기계 설비'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'견적서'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<div className="tf-unit d-block ">
													<UIInput className={'tf tf-md w100p ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
													<span className="u">원</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<div className="tb-total">
							<div className="tb-total-items">지원 항목별 합계금액(원)</div>
							<div className="tb-total-items">
								<div className="fund-form-items tf-unit">
									<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
									<span className="u">원</span>
								</div>
								<p className="tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></p> 
							</div>
						</div>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap5">
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
							<Button color='gray-o' size="sm">첨부파일수정</Button> 
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">과제 신청서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 전자인증을 하시거나 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
											</div>
											<Button color='pri-o' size="md">전자인증</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">과제 계획서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관 사업자 등록증<br />(수행기관 해당시만)</p>
									<div className="fo-value">
										<p className="tx-msg">제출이 완료되지 않았습니다. 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
									</div>
								</div>
							</div>
						</form>
						{/* 파일 제출 완료*/}
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">과제 신청서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<UIInput className={'tf tf-md w100p'} value={'파일명.확장자(0,000kb)'} placeholder={''} readOnly={true} />
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">과제 계획서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<UIInput className={'tf tf-md w100p'} value={'파일명.확장자(0,000kb)'} placeholder={''} readOnly={true} />
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관 사업자 등록증<br />(수행기관 해당시만)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<UIInput className={'tf tf-md w100p'} value={'파일명.확장자(0,000kb)'} placeholder={''} readOnly={true} />
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						{/* FileUpload... */}
						<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
						<h3 className="section-title mb15">변경이력</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col />
										<col width="33%" />
										<col width="33%" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">기존</th>
											<th scope="col">증빙방법</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'지원기간 변경'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											</td>
										</tr>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'기타 변경사유'} placeholder={''} readOnly={true} />
											</td>
											<td className="ta-left" colSpan={2}>
												변경사유가 입력되면 입력된 내용이 출력됩니다.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
						<h3 className="section-title mb15">내부검토사항</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">내용</th>
											<th scope="col">담당자명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf tf-md w100p'} value={'수정요청한 내용이 있으면 출력됨 없으면 출력되지 않음.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'재단 담당자명'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={3}>
												<div className="nd">
													<i className="ic"></i>
													<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
						<h3 className="section-title mb15">반려사유</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">내용</th>
											<th scope="col">담당자명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf tf-md w100p'} value={'반려사유가 있으면 출력됨 없으면 출력되지 않음.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'등록 담당자명'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={3}>
												<div className="nd">
													<i className="ic"></i>
													<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
						<h3 className="section-title mb15">심사의견</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col width="230px" />
										<col />
										<col width="130px" />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">심사진행상태</th>
											<th scope="col">심사의견</th>
											<th scope="col">담당자명</th>
											<th scope="col">담당자 수정일시</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">09</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td className="ta-center">08</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={5}>
												<div className="nd">
													<i className="ic"></i>
													<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className={checked ? 'fund-section' : 'fund-section simply'}>
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
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'직급 출력'} placeholder={''} readOnly={true}  />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'부서 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'이메일 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전화번호 출력'} placeholder={''} readOnly={true}  />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">제출</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2108">수정</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2105">목록</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;