
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import { Tooltip } from "react-tooltip";
function ContentsContainer() {
	const modaladm2121 = useToggleState({});
	const modaladm2122 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 등록</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2114">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">지급 신청 정보 확인</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">지급신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
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
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>과제신청번호</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip2">도움말</button>
										<Tooltip 
											id="tooltip2"  
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
										<div className="hz-root hz-left hz-gap5">
											<UIInput className={'w280 hz-fg tf tf-md'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											<div className="hz-item tx-msg">(MM월DD일)</div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업분류</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[출연사업에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
									</div>
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
										<UIInput className={'tf tf-md w100p'} value={'[과제분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
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
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip5">도움말</button>
										<Tooltip 
											id="tooltip5"  
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
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip6">도움말</button>
										<Tooltip 
											id="tooltip6"  
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
										<div className="hz-root hz-gap15">
											<label htmlFor="rd-1-1" className="ip-rd-label">
												<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio" defaultChecked/>
												<span className="check"></span>
												<span className="txt">사후정산</span>
											</label>
											<label htmlFor="rd-1-2" className="ip-rd-label">
												<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio" />
												<span className="check"></span>
												<span className="txt">선지급</span>
											</label>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">총 지급신청금액</p>
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
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">지원금 지원 기업</h3>
							<div className="hz-root hz-gap8">
								<Button color='gray-o' size="sm" onClick={modaladm2122.open}>수행기업 목록 수정</Button> 
								<Button color='gray-o' size="sm" onClick={modaladm2121.open}>지원기업 목록 수정</Button> 
							</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										<span>지원기업수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip7">도움말</button>
										<Tooltip 
											id="tooltip7"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수혜받는 중소기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 ">
											<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''} readOnly={true}/>	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>중소기업 지원금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip8">도움말</button>
										<Tooltip 
											id="tooltip8"  
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
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip9">도움말</button>
										<Tooltip 
											id="tooltip9"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">수행기업 수를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''} readOnly={true}/>	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span>수행기관 지급금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip10">도움말</button>
										<Tooltip 
											id="tooltip10"  
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
								{/* 
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>총 지원금액</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip11">도움말</button>
										<Tooltip 
											id="tooltip11"  
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
												<UIInput className={'tf tf-md  ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>										
									</div>
								</div>
								v0.89 삭제 */}
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
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2114">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 지원기업 목록 수정 */}
			<ModalPopup
				open={modaladm2121.isShowing}
				title="지원기업 목록 수정"
				size="mid"
				onClose={modaladm2121.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap5 mb15">
						<Button color='pri' size="sm">예금주조회</Button> 
						<Button color='pri-o' size="sm">행추가</Button> 
						<Button color='gray-o' size="sm">행삭제</Button> 
						<Button color='gray-o' size="sm">지원기업목록 양식받기</Button> 
						<Button color='gray-o' size="sm">지원기업목록 Upload</Button>
					</div>
					<div className="tb-total mb15">
						<div className="tb-total-items">지원 금액 합계(원)</div>
						<div className="tb-total-items">
							<div className="fund-form-items tf-unit">
								<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
								<span className="u">원</span>
							</div>
							<p className="tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></p> 
						</div>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap5">
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
					<p className="tx-msg mt10">※ [지원기업 목록]의 지원금액합계와 [수행금액 목록]의 지급금액합계가 일치하도록 작성하여 주시기 바랍니다.</p>
				</div> 
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행 기관 목록 수정 */}
			<ModalPopup
				open={modaladm2122.isShowing}
				title="수행 기관 목록 수정"
				size="mid"
				onClose={modaladm2122.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap5 mb15">
						<Button color='pri' size="sm">예금주조회</Button> 
						<Button color='pri-o' size="sm">행추가</Button> 
						<Button color='gray-o' size="sm">행삭제</Button> 
						<Button color='gray-o' size="sm">수행기업목록 양식받기</Button> 
						<Button color='gray-o' size="sm">수행기업목록 Upload</Button>
					</div>
					<div className="tb-total mb15">
						<div className="tb-total-items">지원 금액 합계(원)</div>
						<div className="tb-total-items">
							<div className="fund-form-items tf-unit">
								<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
								<span className="u">원</span>
							</div>
							<p className="tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></p> 
						</div>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap5">
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
					<p className="tx-msg mt10">※ [지원기업 목록]의 지원금액합계와 [수행금액 목록]의 지급금액합계가 일치하도록 작성하여 주시기 바랍니다.</p>
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