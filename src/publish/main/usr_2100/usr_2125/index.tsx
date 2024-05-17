import React, { useState} from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import { Tooltip } from "react-tooltip";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const modalusr2126 = useToggleState({});
	const modalusr2127 = useToggleState({});
	const [checked, setChecked] = useState(true);
	const checkHandled = ({target}) => {
		if (target.checked) {setChecked(true)} else {setChecked(false)}
	}
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급현황 상세</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">제출</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2129">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2123">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap15 mb15">
							<h3 className="section-title">지급 신청 정보</h3>
							<div className="switch-button">
								<input type="checkbox" id="switch-chk" checked={checked} onChange={(e) => checkHandled(e)} />
								<label htmlFor="switch-chk">
									<span className="toggle"></span>상세보기
								</label>
							</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">지급신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">진행상태</p>
									<div className="fo-value">
										<span className="badge badge-22 blue">신청</span>
										<span className="badge badge-22 skyblue">접수중</span>
										<span className="badge badge-22 yellow">수정요청</span>
										<span className="badge badge-22 red">반려</span>
										<span className="badge badge-22 green">최종접수</span>
										<span className="badge badge-22 gray">집행완료</span>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">지급신청일</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">집행완료일</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">과제 정보</h3>
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
									<div className="fo-key">
										<span>과제신청번호</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip11">도움말</button>
										<Tooltip 
											id="tooltip11"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">tooltip...</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전자인증 여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전자인증 / 서면'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
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
								<div className="fo-item">
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
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>수행기관</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip31">도움말</button>
										<Tooltip 
											id="tooltip31"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												효율적인 사업수행을 위하여 출연기업이 선정한 대행기관(기업)을 의미하며,<br />
												협력재단이 수행기관에게 직접 지급하는 경우에만 사업자등록증의 상호명을 기입<br />
												(수행기관 변경 및 추가 시 사업변경 신청 필수)
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[수행기관명] [수행기관명] [수행기관명] [수행기관명]'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원금 지급 방식</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										<span>지원금 지급방식</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip9">도움말</button>
										<Tooltip 
											id="tooltip9"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												<h6 className="tooltip-title">하기 해당되는 상생협력기금 지급방식을 체크하고 관련 내용을 기입</h6>
												<ul className="list-group">
													<li>(일괄정산) 출연기업이 협력재단에 제출한 지급신청서 및 정산서류를 확인하여 1회 지원금 지급하여 종료하는 과제</li>
													<li>(분할정산) 2회 이상 지급이 필요한 과제 또는 선지급이 필요한 경우</li>
													<li>(선지급여부)  과제 내용에 따라 선지급 요청 가능, 최대 70%로 제한</li>
												</ul>
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'사후정산'} placeholder={''} readOnly={true} />	
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>총 지급신청금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip8">도움말</button>
										<Tooltip 
											id="tooltip8"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												지원(중소)기업을 직·간접적으로 지원하는 전체 금액<br />
												(수행기관에 지급하는 경우, 수행기관에 지급되는 금액 포함)
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>지원기업수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip10">도움말</button>
										<Tooltip 
											id="tooltip10"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수혜받는 중소기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 hz-sb w100p">
											<div className="hz-root hz-gap5">
												<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
												<p className="tx-msg hz-item">개사</p>
											</div>
											<Button color='gray-o' size="sm" onClick={modalusr2126.open}>지원기업 목록</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>중소기업 지원금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip12">도움말</button>
										<Tooltip 
											id="tooltip12"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">지원(중소)기업에 직접 지급되는 금액</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>수행기관 수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip11">도움말</button>
										<Tooltip 
											id="tooltip11"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수행기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 hz-sb w100p">
											<div className="hz-root hz-gap5">
												<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
												<p className="tx-msg hz-item">개사</p>
											</div>
											<Button color='gray-o' size="sm" onClick={modalusr2127.open}>수행기업 목록</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>수행기관 지급금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip13">도움말</button>
										<Tooltip 
											id="tooltip13"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수행기관이 있는경우, 수행기관에 지급되는 금액</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원내용 및 기대효과</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제내용</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'생산성 향상을 위한 자동화 설비 도입'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">기대효과(정성)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'자동화 설비 도입을 통한 원가절감 및 품질 향상'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">기대성과(정량)</p>
									<div className="fo-value">
										<div className="col-group w100p">
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">지표1</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">지표2</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">지표3</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">지표4</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">지표5</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
											<div className="col-2 hz-root hz-gap15">
												<span className="tx-msg">기&nbsp;&nbsp;타</span>
												<UIInput className={'tf tf-md hz-item hz-fg'} value={'[과제등록시 등록했던 내용 출력]'} placeholder={''} readOnly={true} />
											</div>
										</div>

									</div>
								</div>
							</div>
						</form>
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
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">지급신청서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 전자인증을 하시거나 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요..</p>
											</div>
											<Button color='pri-o' size="md">전자인증</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">선지급 요청서(선지급시만)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						{/* 파일 제출 완료*/}
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">지급신청서</p>
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
									<p className="fo-key">선지급 요청서(선지급시만)</p>
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
									<p className="fo-key">세금계산서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<UIInput className={'tf tf-md w100p'} value={'파일이 첨부되었습니다.'} placeholder={''} readOnly={true} />
											</div>
											{/* <Button color='gray-o' size="md">미리보기</Button> */}
										</div>
									</div>
								</div>
							</div>
						</form>
						{/* FileUpload... */}
						<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
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
						<h3 className="section-title hz-item mb15">심사 의견</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col width="230px" />
										<col width="230px" />
										<col />
										<col width="130px" />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">심사진행상태</th>
											<th scope="col">심사일시</th>
											<th scope="col">심사의견</th>
											<th scope="col">담당자명</th>
											<th scope="col">담당자 수정일시</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">09</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'최종접수되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td className="ta-center">08</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수완료되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={6}>
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
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2129">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2123">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 지원 기업 목록 */}
			<ModalPopup
				open={modalusr2126.isShowing}
				title="지원 기업 목록"
				size="mid"
				onClose={modalusr2126.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap10 mb15">
						<Button color='pri-o' size="sm">다운로드</Button>
					</div>
					<div className="tb-top">
						<div className="hz-root hz-gap15">
							<div className="hz-item">
								<p className="tx fc-black">총 <em className="fw500">1103</em>건</p></div>
							<div className="hz-item">
								<em className="fc-black">지원 금액 합계 : </em>
								<span className="price">1,000,000</span>원
							</div>
							<div className="hz-item">
								<em className="fc-black">집행 금액 합계 : </em>
								<span className="price fc-pri">800,000</span>원
							</div>
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
				</div> 
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
			{/* modal - 수행 기업 목록 */}
			<ModalPopup
				open={modalusr2127.isShowing}
				title="수행 기업 목록"
				size="mid"
				onClose={modalusr2127.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap10 mb15">
						<Button color='pri-o' size="sm">다운로드</Button>
					</div>
					<div className="tb-top">
						<div className="hz-root hz-gap15">
							<div className="hz-item">
								<p className="tx fc-black">총 <em className="fw500">1103</em>건</p></div>
							<div className="hz-item">
								<em className="fc-black">지급 금액 합계 : </em>
								<span className="price">1,000,000</span>원
							</div>
							<div className="hz-item">
								<em className="fc-black">집행 금액 합계 : </em>
								<span className="price fc-pri">800,000</span>원
							</div>
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
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;