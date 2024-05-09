
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const modaladm2138 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={4}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">환수신청 상세</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="pri" size="md">제출</Button>
						<Button color="pri-o" size="md" href="/main/usr_2100/usr_2138">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2134">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">환수 신청 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">환수신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'R-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">진행상태</p>
									<div className="fo-value">
										<span className="badge badge-22 blue">신청</span>
										<span className="badge badge-22 green">최종접수</span>
										<span className="badge badge-22 yellow">수정요청</span>
										<span className="badge badge-22 skyblue">접수중</span>
										<span className="badge badge-22 gray">환수완료</span>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">환수 신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">환수완료일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">환수 금액</p>
									<div className="fo-value">
										<div className="tf-unit hz-item w100p">
											<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}/>
											<span className="u">원</span>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">환수 기업수</p>
									<div className="fo-value">
										<div className="hz-root hz-sb w100p">
											<div className="hz-root hz-gap5 ">
												<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''}  readOnly={true}/>	
												<p className="tx-msg hz-item">개사</p>
											</div>
											<Button color='gray-o' size="md" onClick={modaladm2138.open}>환수기업내역</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">환수 사유</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'지급일 기준 퇴사자 발생'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'Y-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					{/* 최종 접수상태 */}
					<section className="fund-section">
						<h3 className="section-title mb15">환수 입금내역 및 면제부 금액</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow mb15">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col width="230px" />
										<col width="120px" />
										<col />
										<col width="230px" />
										<col width="120px" />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">거래일시</th>
											<th scope="col">계좌구분</th>
											<th scope="col">가상계좌</th>
											<th scope="col">지원금액(원)</th>
											<th scope="col">입금의뢰인</th>
											<th scope="col">입금금액(원)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'환수계좌'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'12312345612123'} placeholder={''} readOnly={true} /></td>
											<td>
												<div className="tf-unit hz-item w100p">
													<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}/>
													<span className="u">원</span>
												</div>
											</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td>
												<div className="tf-unit hz-item w100p">
													<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}/>
													<span className="u">원</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="fo fo-col2">
								<div className="inner">
									<div className="fo-item fo-m-1-3">
										<div className="fo-key">면제부 금액</div>
										<div className="fo-value">
											<div className="hz-root hz-gap5 w100p">
												<div className="tf-unit hz-item hz-fg">
													<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}/>
													<span className="u">원</span>
												</div>
												<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
											</div>
										</div>
									</div>
									<div className="fo-item fo-m-1-3">
										<div className="fo-key">면제부 사유</div>
										<div className="fo-value">
											<div className="ta-group w100p">
												<textarea rows={3} className="ta-ip" placeholder="" defaultValue="폐업처리" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">과제 지급 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">과제명</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다.'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item ">
									<div className="fo-key">과제기간</div>
									<div className="fo-value">
										<div className="hz-root hz-left hz-gap5">
											<UIInput className={'w280 hz-fg tf tf-md'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											<div className="hz-item tx-msg">(MM월DD일)</div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">집행금액(원)</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}/>
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업분류</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[투자재원]'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">기금사용용도</div>
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
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 대상</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">중소기업 지원 수</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 ">
											<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''}  readOnly={true}/>	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">중소기업 외 지원 수</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 ">
											<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''}  readOnly={true}/>	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">수행기관</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'수행기관이 있으면 수행기관명 출력, 없으면 해당 행이 출력되지 않음'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title">첨부파일</h3>
							<Button color='gray-o' size="sm">첨부파일수정</Button> 
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">환수 신청서</p>
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
					</section>
					<section className="fund-section">
						<h3 className="section-title hz-item mb15">내부검토사항</h3>
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
											<th scope="col">반려사유</th>
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
					<section className="fund-section">
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
						<Button color="pri" size="md">제출</Button>
						<Button color="pri-o" size="md" href="/main/usr_2100/usr_2138">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2134">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 환수기업 내역등록 */}
			<ModalPopup
				open={modaladm2138.isShowing}
				title="환수기업 내역등록"
				size="mid"
				onClose={modaladm2138.close}
			>
				<div className="modal-con">
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">지원 금액 합계(원)</p>
								<div className="fo-value">
									<div className="tf-unit hz-item w100p">
										<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} />
										<span className="u">원</span>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">환수금액 합계(원)</p>
								<div className="fo-value">
									<div className="tf-unit hz-item w100p">
										<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} />
										<span className="u">원</span>
									</div>
								</div>
							</div>
						</div>
					</form>
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