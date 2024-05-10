import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import { Tooltip } from "react-tooltip";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const modalusr2120 = useToggleState({});
	const modalusr2122 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 내용 수정</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">신청 기본 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">지급신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'Y-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title hz-item mb15">지원금 지급 방식</h3>
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
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">지원금 지원 기업</h3>
							<div className="hz-root hz-gap8">
								<Button color='gray-o' size="sm" onClick={modalusr2122.open}>수행기업 목록 수정</Button> 
								<Button color='gray-o' size="sm" onClick={modalusr2120.open}>지원기업 목록 수정</Button> 
							</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
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
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
											<p className="tx-msg hz-item">개사</p>
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
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'2'} placeholder={''} readOnly={true} />	
											<p className="tx-msg hz-item">개사</p>
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
									<p className="fo-key">지급 신청서</p>
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
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">선지급 요청서(선지급시만)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={'파일명.확장자(0,000kb)'} placeholder={'파일을 첨부해 주세요.'} />
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
						<p className="tx-msg mb15"><span className="fc-pri">※ 항목 외 기타 파일들은 파일 첨부를 이용해 주세요.</span></p>
						<div>file upload...</div>
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
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
				</main>
			</div>
			{/* modal - 지원 기업 목록 */}
			<ModalPopup
				open={modalusr2120.isShowing}
				title="지원 기업 목록"
				size="mid"
				onClose={modalusr2120.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap10 mb15">
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
					<p className="tx-msg mt10">※ [지원기업 목록]의 지원금액합계와 [수행금액 목록]의 지급금액합계가 일치하도록 작성하여 주시기 바랍니다.</p>
				</div> 
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>	
			{/* modal - 수행 기업 목록 */}
			<ModalPopup
				open={modalusr2122.isShowing}
				title="수행 기업 목록"
				size="mid"
				onClose={modalusr2122.close}
			>
				<div className="modal-con">
					<div className="hz-root hz-right hz-gap10 mb15">
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