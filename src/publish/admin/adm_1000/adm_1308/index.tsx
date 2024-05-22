import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import { Tooltip } from 'react-tooltip';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={2}  lnbD2Idx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제 신청 내용 수정</h1>
					<h3 className="section-title mb15">과제 신청 정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다'} placeholder={''} readOnly={true} />
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
									<UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제신청일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제기간</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)~YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
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
									<UIInput className={'tf tf-md w100p'} value={'전자인증/서면'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제종료여부</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제종료일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
							
							<div className="fo-rs-tit row6">유형</div>

							<div className="fo-item fo-item-rs">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기금사용용도</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-item-rs">
								<p className="fo-key">지원분야</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제분야</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">과제개요 및 기대효과</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제개요</p>
								<div className="fo-value">
									<div className="ta-view h100 w100p">
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">정성효과</p>
								<div className="fo-value">
									<div className="ta-view h100 w100p">
											[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
											[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
										</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">기대효과</p>
								<div className="fo-value d-block">
									
									<form className="fo fo-col2 no-top-line mb0" name="" action="" method="">
										<div className="inner">
											<div className="fo-item">
												<p className="fo-key">매출액</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'1000억'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">지식재산권</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">일자리창출</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">수출액</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">판로처 확대</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">신규참여 수탁기업 수</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">신규 투자액</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">신설 창업기업 수</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">생산성 향상</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">중소기업 체감도</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">예상 구매액</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">기타 성과1</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">예상 판매액</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item">
												<p className="fo-key">기타 성과2</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
												</div>
											</div>
										</div>
									</form>

								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">지원 대상</h3>
					
					<form className="fo fo-col3 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">중소기업 지원 수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'N 개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">
										
									<span>중소기업 외 지원 수</span>&nbsp;
									<button type="button" className="button-tooltip" data-tooltip-id="tooltip">툴팁</button>
									<Tooltip 
										id="tooltip"  
										disableStyleInjection={true}
										place={"bottom-start"}
										className="tooltip-conts"
										//openOnClick
									>
										<div className="msg">
											{/* <h6 className="tooltip-title">상생협력기금은 중소기업에게만 지원 가능합니다.</h6> */}
											<p className="tx tx-cp1">상생협력기금은 중소기업에게만 지원 가능합니다.</p>
										</div>
									</Tooltip>									
								</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'N 개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">합계</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'N 개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">수행기관</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'수행기관 없음'} placeholder={''} readOnly={true} />
								</div>
							</div>																					
						</div>
					</form>

					<h3 className="section-title mb15">지원 항목 별 지원금</h3>
					<form className="fo fo-col4 mb0" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">지원항목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'설비구매비'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">산출근거</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'자동화 생산 공정 기계 설비'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">증빙방법</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'견적서'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">금액(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'100,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>					
					<div className="tb-total mb30">
						<div className="tb-total-items">
							지원 항목별 합계금액 (원)
						</div>
						<div className="tb-total-items">
							<div className="fund-form-items tf-unit">
								<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
								<span className="u">원</span>
							</div>
							<p className="tx-msg"><span className="fc-pri">(1억원)</span></p> 
						</div>
					</div>						

					<h3 className="section-title mb15">첨부파일</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제 신청서(필수)</p>
								<div className="fo-value">
									<div className="hz-root hz-sb w100p">
										<UIInput className={'tf tf-md w100p'} value={'첨부가 완료되었습니다.'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">다운로드</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제계획서(필수)</p>
								<div className="fo-value">
									<div className="hz-root hz-sb w100p">
										<UIInput className={'tf tf-md w100p'} value={'첨부가 완료되었습니다.'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">다운로드</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">수행기관 사업자 등록증 (수행기관 해당시만)</p>
								<div className="fo-value">
									<div className="hz-root hz-sb w100p">
										<UIInput className={'tf tf-md w100p'} value={'첨부가 완료되었습니다.'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">다운로드</Button>
									</div>
								</div>
							</div>														
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									[D] K-Upload
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">심사의견</h3>
					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="200px" />
								<col width="200px" />
								<col width="" />
								<col width="100px" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>심사진행상태</th>
									<th>심사일시</th>
									<th>심사의견</th>
									<th>담당자명</th>
									<th>담당자 수정일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>99</td>
									<td>심사완료</td>
									<td>YYYY-MM-DD HH:MM:SS</td>
									<td>심사완료되었습니다.</td>
									<td>홍길동</td>
									<td>YYYY-MM-DD HH:MM:SS</td>
								</tr>
							</tbody>
						</table>
					</div>					

					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="200px" />
								<col width="200px" />
								<col width="" />
								<col width="100px" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>심사진행상태</th>
									<th>심사일시</th>
									<th>심사의견</th>
									<th>담당자명</th>
									<th>담당자 수정일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan={6}>
										<div className="nd">
											{/* <i className="ic"></i> */} {/* [M.20240522]삭제 */}
											<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
										</div>										
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h3 className="section-title mb15">출연 기업정보</h3>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">법인사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123456-1234567'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123-12-12345'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">담당자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">직위</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'직위명'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">부서</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'부서명'} placeholder={''} readOnly={true} />	
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'abcde@gmail.com'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">전화번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'021231234'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >취소</Button>
						<Button color="pri-o" size="sm" >저장</Button>
					</div>
				</main>
			</div>
					
		</PageContainer>
	);
}
export default ContentsContainer;