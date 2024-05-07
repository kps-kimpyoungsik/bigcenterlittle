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
					</div>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
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
								<div className="fo-item req">
									<p className="fo-key">과제신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2024-04-30(화)'} placeholder={''}  readOnly={true}/>
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
								<div className="fo-item req">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
											</select>
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
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">지원분야</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">과제분야</p>
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
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">지원내용 입력</p>
									<div className="fo-value">
										<div className="ta-group w100p">
											<textarea rows={3} className="ta-ip" placeholder="지원내용을 입력하세요(입력 제한 없음)"></textarea>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기대효과 입력</p>
									<div className="fo-value">
										<div  className="ta-group w100p">
											<textarea rows={3} className="ta-ip" placeholder="기대효과를 입력하세요(입력 제한 없음)"></textarea>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기대성과 선택</p>
									<div className="fo-value flex-wrap">
										<div className="fo-item w100p">
											<p className="fo-key">지표1</p>
											<div className="fo-value">
												<UIInput className={'tf tf-md w100p'} value={''} placeholder={'입력하세요'} />
											</div>
										</div>
										<div className="fo-item w100p">
											<p className="fo-key">지표2</p>
											<div className="fo-value">
												<UIInput className={'tf tf-md w100p'} value={''} placeholder={'입력하세요'} />
											</div>
										</div>
										<div className="fo-item w100p">
											<p className="fo-key">지표3</p>
											<div className="fo-value">
												<UIInput className={'tf tf-md w100p'} value={''} placeholder={'입력하세요'} />
											</div>
										</div>
										<div className="fo-item w100p">
											<p className="fo-key">지표4</p>
											<div className="fo-value">
												<UIInput className={'tf tf-md w100p'} value={''} placeholder={'입력하세요'} />
											</div>
										</div>
										<div className="fo-item w100p">
											<p className="fo-key">지표5</p>
											<div className="fo-value">
												<UIInput className={'tf tf-md w100p'} value={''} placeholder={'입력하세요'} />
											</div>
										</div>
									</div>
								</div>
							</div>
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
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={''} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap5 w120 ">
														<Button color='pri-o2' size="md">찾기</Button>
														<Button color='gray-o' size="md">삭제</Button>
													</div>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								{/* 과제신청서 전자인증을 한 경우 */}
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 신청서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전자인증을 완료하였습니다.'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 계획서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={''} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap5 w120 ">
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
									<p className="fo-key">과제 계획서 또는 완료 보고서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={''} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap5 w120 ">
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
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={''} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap5 w120 ">
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
										<col width="33%"/>
										<col width="33%"/>
										<col />
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
													<textarea rows={3} className="ta-ip" placeholder="변경사유를 입력하세요."></textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="tx-msg">※ 안내사항 : 위에서 변경될 내용에 대해 변경하시고 체크박스를 선택하시면 변경내용이 자동으로 적용됩니다.</p>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>						
					</div>				
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;