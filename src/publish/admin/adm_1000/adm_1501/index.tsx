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
	const modaladm1501p = useToggleState({});
	const modaladm1502p = useToggleState({});	
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">환수관리</Link></li>
					<li><Link to="#">환수신청현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">환수 신청 내용</h1>

					<h3 className="section-title mb15">환수 신청 내용</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
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
									<UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} />
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
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">환수 금액</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">환수 기업수</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'2개사'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">환수기업내역</Button>
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

					<h3 className="section-title mb15">환수 입금내역 및 면제부 금액</h3>
					<div className="tb tb-narrow mb30">
						<table>
							<caption></caption>
							<colgroup>
								<col width="100px" />
								<col width="200px" />
								<col width="200px" />
								<col width="" />
								<col width="200px" />
								<col width="100px" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>NO</th>
									<th>거래일시</th>
									<th>계좌구분</th>
									<th>가상계좌</th>
									<th>지원금액(원)</th>
									<th>입금의뢰인</th>
									<th>입금금액(원)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										99
									</td>
									<td>
										YYYY-MM-DD HH:MM:SS
									</td>
									<td>
										환수계좌
									</td>
									<td>
										123456789123456789
									</td>
									<td>
										<p className="ta-right">500,000</p>
									</td>
									<td>
										홍길동
									</td>
									<td>
										<p className="ta-right">500,000</p>
									</td>
								</tr>
								<tr>
									<td>
										99
									</td>
									<td>
										YYYY-MM-DD HH:MM:SS
									</td>
									<td>
										환수계좌
									</td>
									<td>
										123456789123456789
									</td>
									<td>
										<p className="ta-right">500,000</p>
									</td>
									<td>
										홍길동
									</td>
									<td>
										<p className="ta-right">500,000</p>
									</td>
								</tr>								
							</tbody>
						</table>
					</div>

					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">면제부 금액</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p ta-right'} value={'500,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">면제부 사유</p>
								<div className="fo-value">
									<div className="ta-view h200 w100p">
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
									</div>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">과제 지급 내용</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">과제명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제기간</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)~YYYY-MM-DD(Day) MM개월DD일'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행금액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md ta-right'} value={'5,000,000'} placeholder={''} readOnly={true} />
										<p className="hz-item tx tx-cp1 fc-pri">(500만원)</p>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[투자재원]'} placeholder={''} readOnly={true} />
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
						</div>
					</form>

					<h3 className="section-title mb15">지원 대상</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">중소기업 지원 수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'N 개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">중소기업 외 지원 수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'N 개사'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">수행기관</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'수행기관이 있으면 수행기관명 출력, 없으면 해당 행이 출력되지 않음'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>																						

					<h3 className="section-title mb15">첨부파일</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">환수 신청서</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'환수신청서.pdf(00,000kb)'} placeholder={''} readOnly={true} />
										<Button color="gray-o" size="md">미리보기</Button>										
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									[D] K-Upload 영역
								</div>
							</div>							
						</div>
					</form>

					<h3 className="section-title mb15">내부검토사항</h3>
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
									<td>$</td>
									<td>$</td>
									<td>$</td>
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
									<td>수정요청</td>
									<td>YYYY-MM-DD HH:MM:SS</td>
									<td>수정요청되었습니다.</td>
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
											<i className="ic"></i>
											<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
										</div>												
									</td>
								</tr>
							</tbody>
						</table>
					</div>										


					<h3 className="section-title mb15">기업 정보</h3>
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
						<Button color="pri-o" size="sm" >최종접수</Button>
						<Button color="pri-o" size="sm" >수정요청</Button>
						<Button color="pri-o" size="sm" >접수</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1501p.open}>1501p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1502p.open}>1502p</Button>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}										

				</main>
			</div>

		{/* modal - 1501p*/}
		<ModalPopup
				open={modaladm1501p.isShowing}
				title="입금확인"
				size="lg"
				onClose={modaladm1501p.close}
			>
				<div className="modal-con">
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">환수 금액(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">환수 기업수(개사)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<div className="ibsheet">[D] IBSHEET 영역</div>

					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">면제부 금액(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'금액을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">면제부 사유</p>
								<div className="fo-value">
									<div className="ta h200 w100p">
										<textarea className="ta-ip" placeholder="면제부 사유를 입력하세요"></textarea>
									</div>
								</div>
							</div>
						</div>
					</form>
					
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="sm">취소</Button>
						<Button color='pri' size="sm">저장</Button>
					</div>
				</div>	
			</ModalPopup>

		{/* modal - 1502p*/}
		<ModalPopup
				open={modaladm1502p.isShowing}
				title="환수기업내역"
				size="lg"
				onClose={modaladm1502p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
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
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>
			</ModalPopup>

		</PageContainer>
	);
}
export default ContentsContainer;