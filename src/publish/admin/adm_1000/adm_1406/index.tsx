import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm1410p = useToggleState({});
	const modaladm1411p = useToggleState({});
	const modaladm1415p = useToggleState({});
	const modaladm1408p = useToggleState({});
	const modaladm1409p = useToggleState({});
	const modaladm1412p = useToggleState({});
	const modaladm1414p = useToggleState({});
	const modaladm1520p = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">지급관리</Link></li>
					<li><Link to="#">지급신청현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 신청 상세</h1>
					<h3 className="section-title mb15">신청 기업 정보</h3>					
					<form className="fo fo-col2 mb30" name="" action="" method="">
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

					<h3 className="section-title mb15">지급 신청 정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">지급신청번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'Y-00-00000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">진행상태</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지급 신청일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행 완료일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">과제 신청 내용</h3>
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
								<p className="fo-key">전자인증 여부</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'전자인증/서면'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제기간</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)~YYYY-MM-DD(Day) (00개월 00일)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[동반성장투자재원]'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기금사용용도</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[중소기업의 생산성 향상을 위한 지원 사업]'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원분야</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[지원분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제분야</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[과제분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">수행기관</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[수행기관을 입력했으면 수행기관명들이 출력됨] [수행기관을 입력했으면 수행기관명들이 출력됨]'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원금 지급방식</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사후정산'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원 신청 잔여 금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원 기업수</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'10개사'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">지원기업 검증</Button>
										<Button color="gray-o" size="md">지원기업 목록</Button>
									</div>

								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">중소기업 지원금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">수행기관 수</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'10개사'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">수행기업 목록</Button>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">수행기관 지급금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">총 지원금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">집행 내용</h3>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">집행 기업수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md'} value={'10개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행 금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">미집행 기업수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md'} value={'10개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">미집행 금액</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'1,000,000 원'} placeholder={''} readOnly={true} />
										<span className="hz-item tx tx-cp1 fc-pri">(100만원원)</span>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

					<h3 className="section-title mb15">지원내용 및 기대효과</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
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
								<p className="fo-key">기대효과(정량)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">자료첨부</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">지급 신청서</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'첨부가 완료되었습니다'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">다운로드</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">선지급 요청서(선지급시만)</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'첨부가 완료되었습니다'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">다운로드</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">세금계산서(내부용)</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">국세청바로가기</Button>
										<Button color="gray-o" size="md">문서첨부</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">자료첨부</p>
								<div className="fo-value">
									[D] K-Upload  영역
								</div>
							</div>							
						</div>
					</form>					

					<h3 className="section-title mb15">내부 검토사항</h3>
					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="" />
								<col width="100px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>99</td>
									<td>반려사유입니다.</td>
									<td>홍길동</td>
								</tr>
							</tbody>
						</table>
					</div>					

					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="" />
								<col width="100px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
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

					<h3 className="section-title mb15">반려사유</h3>
					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="" />
								<col width="100px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>99</td>
									<td>반려사유입니다.</td>
									<td>홍길동</td>
								</tr>
							</tbody>
						</table>
					</div>					

					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="" />
								<col width="100px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
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

					<h3 className="section-title mb15">심사 의견</h3>
					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="100px" />
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
									<td>접수</td>
									<td>YY-MM-DD HH:MM:SS</td>
									<td>접수되었습니다.</td>
									<td>홍길동</td>
									<td>YY-MM-DD HH:MM:SS</td>
								</tr>
							</tbody>
						</table>
					</div>					

					<div className="tb tb-narrow mb30"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="100px" />
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
											<i className="ic"></i>
											<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>												

					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >문서첨부</Button>
						<Button color="gray-o" size="sm" >최종접수</Button>
						<Button color="gray-o" size="sm" >수정요청</Button>

						<Button color="gray-o" size="sm" >반려</Button>
						<Button color="pri-o" size="sm" >접수</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1410p.open}>1410p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1411p.open}>1411p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1415p.open}>1415p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1408p.open}>1408p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1409p.open}>1409p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1412p.open}>1412p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1414p.open}>1414p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1520p.open}>1520p</Button> <br/><br/>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}		

				</main>
			</div>

			
		{/* modal - 1410p*/}
		<ModalPopup
				open={modaladm1410p.isShowing}
				title="지원 기업 목록"
				size="lg"
				onClose={modaladm1410p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">계좌미등록내역</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
									<option value="20">20개씩보기</option>
									<option value="50">50개씩보기</option>
									<option value="100">100개씩보기</option>
									<option value="200">200개씩보기</option>
									<option value="500">500개씩보기</option>
									<option value="1000">1000개씩보기</option>
								</select>
							</div>
						</div>
					</div>
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">지원 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right fc-pri'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>
			</ModalPopup>

		{/* modal - 1411p*/}
		<ModalPopup
				open={modaladm1411p.isShowing}
				title="수행 기업 목록"
				size="lg"
				onClose={modaladm1411p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">계좌미등록내역</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
									<option value="20">20개씩보기</option>
									<option value="50">50개씩보기</option>
									<option value="100">100개씩보기</option>
									<option value="200">200개씩보기</option>
									<option value="500">500개씩보기</option>
									<option value="1000">1000개씩보기</option>
								</select>
							</div>
						</div>
					</div>
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">지원 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right fc-pri'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>	
			</ModalPopup>

		{/* modal - 1415p*/}
		<ModalPopup
				open={modaladm1415p.isShowing}
				title="지원기업목록(운영비)"
				size="lg"
				onClose={modaladm1415p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">계좌미등록내역</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
									<option value="20">20개씩보기</option>
									<option value="50">50개씩보기</option>
									<option value="100">100개씩보기</option>
									<option value="200">200개씩보기</option>
									<option value="500">500개씩보기</option>
									<option value="1000">1000개씩보기</option>
								</select>
							</div>
						</div>
					</div>
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">지원 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행 금액 합계(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right fc-pri'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>

			</ModalPopup>

		{/* modal - 1408p*/}
		<ModalPopup
				open={modaladm1408p.isShowing}
				title="지원기업 검증"
				size="lg"
				onClose={modaladm1408p.close}
			>
				<div className="modal-con">
					<p className="tx tx-cp1 mb10">한국기업데이터 연계하여 국내 사업자의 기업 개요 및 재무정보를 통해 기업 정보를 검증합니다. 단 검증대상 기업의 재무자료, 관계사 관련 자료 등의 최신 데이터가 없는 경우, 기업규모 판단내용이 부정확할 수 있습니다.</p>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="pri-o" size="sm">지원기업검증</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>
					
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>

			</ModalPopup>

		{/* modal - 1409p*/}
		<ModalPopup
				open={modaladm1409p.isShowing}
				title="지원기업 검증 이력"
				size="lg"
				onClose={modaladm1409p.close}
			>
				<div className="modal-con">
					<p className="tx tx-cp1 mb10">한국기업데이터 연계하여 국내 사업자의 기업 개요 및 재무정보를 통해 기업 정보를 검증합니다. 단 검증대상 기업의 재무자료, 관계사 관련 자료 등의 최신 데이터가 없는 경우, 기업규모 판단내용이 부정확할 수 있습니다.</p>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>
					
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>

			</ModalPopup>

		{/* modal - 1412p*/}
		<ModalPopup
				open={modaladm1412p.isShowing}
				title="지원기업 계좌 미등록 내역"
				size="lg"
				onClose={modaladm1412p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>
					
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='pri' size="md">확인</Button>
					</div>
				</div>					

			</ModalPopup>

		{/* modal - 1414p*/}
		<ModalPopup
				open={modaladm1414p.isShowing}
				title="수행기업 계좌 미등록 내역"
				size="lg"
				onClose={modaladm1414p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>
					
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='pri' size="md">확인</Button>
					</div>
				</div>					

			</ModalPopup>

		{/* modal - 1520p*/}
		<ModalPopup
				open={modaladm1520p.isShowing}
				title="문서첨부"
				size="lg"
				onClose={modaladm1520p.close}
			>
				<div className="modal-con">
					
					<div className="ibsheet">[D] K-Upload 영역</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>					

			</ModalPopup>
			
																								

		</PageContainer>
	);
}
export default ContentsContainer;